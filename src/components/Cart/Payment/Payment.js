import { View, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useFormik } from "formik";
import { useNavigation } from "@react-navigation/native";
import { initialValues, validationSchema } from "./Payment.form";
import { styles } from "./Payment.styles";
import { orderCtrl } from "../../../api";
import { useAuth, useCart } from "../../../hooks";
import { scrensName } from "../../../utils";
import Toast from "react-native-root-toast";

export function Payment(props) {
  const { totalPayment, selectedAddress, products } = props;
  const { user } = useAuth();
  const { emptyCart } = useCart();
  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const idPayment = generatePaymentId();

        const productsPayload = products.map((item) => ({
          id: item.id,
          title: item.title,
          price: item.price,
          quantity: item.quantity,
          image: item.main_image.url,
        }));

        const addressShipping = {
          id: selectedAddress.id,
          title: selectedAddress.title,
          name: selectedAddress.name,
          address: selectedAddress.address,
          postal_code: selectedAddress.postal_code,
          city: selectedAddress.city,
          state: selectedAddress.state,
          country: selectedAddress.country,
          phone: selectedAddress.phone,
        };

        const response = await orderCtrl.payment(
          idPayment,
          user.id,
          totalPayment,
          productsPayload,
          addressShipping
        );

        if (response) {
          await emptyCart();
          navigation.navigate(scrensName.account.root, {
            screen: scrensName.account.orders,
          });
        } else {
          throw new Error("Error al realizar el pedido");
        }
      } catch (error) {
        console.log("PAYMENT ERROR:", error);
        Toast.show("Error al realizar el pago", {
          duration: 2000,
          position: Toast.positions.CENTER,
        });
      }
    },
  });

  function generatePaymentId() {
    const randomPart = Math.random().toString(36).slice(2, 8).toUpperCase();
    const timePart = Date.now().toString(36).toUpperCase();
    return `PAY-${timePart}-${randomPart}`;
  }

  const hasNameError = !!(formik.touched.name && formik.errors.name);
  const hasNumberError = !!(formik.touched.number && formik.errors.number);
  const hasMonthError = !!(formik.touched.exp_month && formik.errors.exp_month);
  const hasYearError = !!(formik.touched.exp_year && formik.errors.exp_year);
  const hasCvcError = !!(formik.touched.cvc && formik.errors.cvc);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Forma de pago</Text>

        {/* Titular */}
        <TextInput
          label="Nombre del titular"
          mode="outlined"
          style={styles.input}
          outlineStyle={styles.outline}
          contentStyle={{ fontSize: 16, paddingVertical: 10 }}
          left={<TextInput.Icon icon="account-outline" />}
          onChangeText={(text) => formik.setFieldValue("name", text)}
          onBlur={formik.handleBlur("name")}
          value={formik.values.name}
          error={hasNameError}
        />
        {hasNameError && (
          <Text style={styles.errorText}>{formik.errors.name}</Text>
        )}

        {/* Número de tarjeta */}
        <TextInput
          label="Número de tarjeta"
          mode="outlined"
          style={styles.input}
          outlineStyle={styles.outline}
          contentStyle={{ fontSize: 16, paddingVertical: 10 }}
          keyboardType="numeric"
          maxLength={16}
          left={<TextInput.Icon icon="credit-card-outline" />}
          onChangeText={(text) => formik.setFieldValue("number", text)}
          onBlur={formik.handleBlur("number")}
          value={formik.values.number}
          error={hasNumberError}
        />
        {hasNumberError && (
          <Text style={styles.errorText}>{formik.errors.number}</Text>
        )}

        {/* Fecha + CVC */}
        <View style={styles.inputGroup}>
          <View style={styles.viewMonthYearInputs}>
            <TextInput
              label="Mes"
              mode="outlined"
              style={styles.inputDate}
              outlineStyle={styles.outlineSmall}
              contentStyle={{ fontSize: 14, paddingVertical: 8 }}
              keyboardType="numeric"
              maxLength={2}
              onChangeText={(text) => formik.setFieldValue("exp_month", text)}
              onBlur={formik.handleBlur("exp_month")}
              value={formik.values.exp_month}
              error={hasMonthError}
            />
            <TextInput
              label="Año"
              mode="outlined"
              style={styles.inputDate}
              outlineStyle={styles.outlineSmall}
              contentStyle={{ fontSize: 14, paddingVertical: 8 }}
              keyboardType="numeric"
              maxLength={2}
              onChangeText={(text) => formik.setFieldValue("exp_year", text)}
              onBlur={formik.handleBlur("exp_year")}
              value={formik.values.exp_year}
              error={hasYearError}
            />
          </View>

          <TextInput
            label="CVV/CVC"
            mode="outlined"
            style={styles.inputCvc}
            outlineStyle={styles.outlineSmall}
            contentStyle={{ fontSize: 14, paddingVertical: 8 }}
            keyboardType="numeric"
            maxLength={3}
            left={<TextInput.Icon icon="shield-lock-outline" />}
            onChangeText={(text) => formik.setFieldValue("cvc", text)}
            onBlur={formik.handleBlur("cvc")}
            value={formik.values.cvc}
            error={hasCvcError}
          />
        </View>

        {hasMonthError && (
          <Text style={styles.errorText}>{formik.errors.exp_month}</Text>
        )}
        {hasYearError && (
          <Text style={styles.errorText}>{formik.errors.exp_year}</Text>
        )}
        {hasCvcError && (
          <Text style={styles.errorText}>{formik.errors.cvc}</Text>
        )}

        {/* Botón pagar */}
        <Button
          style={styles.btn}
          mode="contained"
          contentStyle={styles.btnContent}
          labelStyle={styles.btnText}
          onPress={formik.handleSubmit}
          loading={formik.isSubmitting}
        >
          Pagar {totalPayment && `($${totalPayment.toFixed(2)})`}
        </Button>
      </View>
    </View>
  );
}
