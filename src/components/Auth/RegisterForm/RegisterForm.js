import { View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { globalStyles } from "../../../styles";
import { useFormik } from "formik";
import { authCtrl } from "../../../api";
import { initialValues, validationSchema } from "./RegisterForm.form";
import Toast from "react-native-root-toast";

export function RegisterForm(props) {
  const { showLogin } = props;

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: true,
    onSubmit: async (formValue) => {
      try {
        const { email, username, password } = formValue;
        await authCtrl.register(email, username, password);
        showLogin();
      } catch (error) {
        Toast.show("Error al registrar el usuario", {
          position: Toast.positions.CENTER,
        });
      }
    },
  });

  return (
    <View>
      <TextInput
        label="Correo electronico"
        style={globalStyles.form.input}
        autoCapitalize="none"
        onChangeText={formik.handleChange("email")}
        onBlur={formik.handleBlur("email")}
        value={formik.values.email}
        error={!!(formik.touched.email && formik.errors.email)}
      />

      <TextInput
        label="Nombre de usuario"
        style={globalStyles.form.input}
        autoCapitalize="none"
        onChangeText={formik.handleChange("username")}
        onBlur={formik.handleBlur("username")}
        value={formik.values.username}
        error={!!(formik.touched.username && formik.errors.username)}
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

      <TextInput
        label="Repetir contraseña"
        style={globalStyles.form.input}
        secureTextEntry
        onChangeText={formik.handleChange("repeatPassword")}
        onBlur={formik.handleBlur("repeatPassword")}
        value={formik.values.repeatPassword}
        error={
          !!(formik.touched.repeatPassword && formik.errors.repeatPassword)
        }
      />

      <Button
        mode="contained"
        style={globalStyles.form.btnSubmit}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      >
        Registrarte
      </Button>

      <Button
        mode="text"
        style={globalStyles.form.bntText}
        labelStyle={globalStyles.form.bntTextLabel}
        onPress={showLogin}
      >
        Iniciar Sesion
      </Button>
    </View>
  );
}
