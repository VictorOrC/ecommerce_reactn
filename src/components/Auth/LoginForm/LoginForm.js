import { View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { globalStyles } from "../../../styles";
import { useFormik } from "formik";
import Toast from "react-native-root-toast";
import { initialValues, validationSchema } from "./LoginForm.form";
import { authCtrl } from "../../../api";
import { useAuth } from "../../../hooks";

export function LoginForm(props) {
  const { showRegister } = props;
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const { email, password } = formValue;
        const response = await authCtrl.login(email, password);

        login(response.jwt);
      } catch (error) {
        Toast.show("ERROR ALGO SALIÓ MAL", {
          duration: 2000,
          position: Toast.positions.CENTER,
        });
      }
    },
  });

  return (
    <View>
      <TextInput
        label="Corero electronico"
        style={globalStyles.form.input}
        autoCapitalize="none"
        onChangeText={formik.handleChange("email")}
        onBlur={formik.handleBlur("email")}
        value={formik.values.email}
        error={!!(formik.touched.email && formik.errors.email)}
      />
      <TextInput
        label="Contraseña"
        style={globalStyles.form.input}
        secureTextEntry
        onChangeText={formik.handleChange("password")}
        onBlur={formik.handleBlur("password")}
        value={formik.values.password}
        error={!!(formik.touched.password && formik.errors.password)}
      />

      <Button
        mode="contained"
        style={globalStyles.form.btnSubmit}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      >
        Iniciar Sesion
      </Button>

      <Button
        mode="text"
        style={globalStyles.form.bntText}
        labelStyle={globalStyles.form.bntTextLabel}
        onPress={showRegister}
      >
        No tienes cuenta? Registrate
      </Button>
    </View>
  );
}
