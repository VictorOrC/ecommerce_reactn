import { View, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useFormik } from "formik";
import { useNavigation } from "@react-navigation/native";
import { initialValues, validationSchema } from "./Payment.form";
import { styles } from "./Payment.styles";
import { globalStyles } from "../../../styles";
import { orderCtrl } from "../../../api";
import { useAuth, useCart } from "../../../hooks";
import { scrensName } from "../../../utils";
import Toast from "react-native-root-toast";

export function Payment(props) {
  const { totalPayment, selectedAddress, products } = props;
  const { user } = useAuth();
  const { emptyCart } = useCart();
  const navigation = useNavigation();
  //console.log(products);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const idPayment = generatePaymentId();

        // Opcional: simplificar los productos que mandas
        const productsPayload = products.map((item) => ({
          id: item.id,
          title: item.title,
          price: item.price,
          quantity: item.quantity,
        }));

        // Opcional: simplificar dirección
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
            screen: scrensName.account.order,
          });
        } else {
          new Error("Error al realizar el pedido");
        }
      } catch (error) {
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
    return `PAY-${timePart}-${randomPart}`; // Ej: PAY-MB4K2L-9XQ2FZ
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forma de pago</Text>

      <TextInput
        label="Nombre del titular"
        style={globalStyles.form.input}
        onChangeText={(text) => formik.setFieldValue("name", text)}
        value={formik.values.name}
        error={formik.errors.name}
      />
      <TextInput
        label="Nombre de tarjeta"
        style={globalStyles.form.input}
        onChangeText={(text) => formik.setFieldValue("number", text)}
        value={formik.values.number}
        error={formik.errors.number}
      />

      <View style={styles.inputGroup}>
        <View style={styles.viewMonthYearInputs}>
          <TextInput
            label="Mes"
            style={styles.inputDate}
            onChangeText={(text) => formik.setFieldValue("exp_month", text)}
            value={formik.values.exp_month}
            error={formik.errors.exp_month}
          />
          <TextInput
            label="Año"
            style={styles.inputDate}
            onChangeText={(text) => formik.setFieldValue("exp_year", text)}
            value={formik.values.exp_year}
            error={formik.errors.exp_year}
          />
        </View>

        <TextInput
          label="CVV/CVC"
          style={styles.inputCvc}
          onChangeText={(text) => formik.setFieldValue("cvc", text)}
          value={formik.values.cvc}
          error={formik.errors.cvc}
        />
      </View>

      <Button
        mode="contained"
        contentStyle={styles.btnContent}
        labelStyle={styles.btnText}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      >
        Pagar {totalPayment && `($${totalPayment.toFixed(2)})`}
      </Button>
    </View>
  );
}
