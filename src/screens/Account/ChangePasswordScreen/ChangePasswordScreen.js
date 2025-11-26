import { View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useFormik } from "formik";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../../hooks";
import { userCtrl } from "../../../api";
import { globalStyles } from "../../../styles";
import { initialValues, validationSchema } from "./ChangePasswordScreen.form";
import { styles } from "./ChangePasswordScreen.style";
import Toast from "react-native-root-toast";

export function ChangePasswordScreen() {
  // Get user data and update function from AuthContext
  const { user, logout } = useAuth();

  // Navigation hook to move between screens
  const navigation = useNavigation();
  // console.log(user);

  // Formik configuration for form handling and validation
  const formik = useFormik({
    // Initial values filled with the current user's data
    initialValues: initialValues(),

    // Form validation rules (Yup)
    validationSchema: validationSchema(),

    // Disable validation on typing, only validate on submit
    validateOnChange: false,

    // Function triggered when submitting the form
    onSubmit: async (formValue) => {
      try {
        // Send update request to the API
        await userCtrl.update(user.id, formValue);
        logout();
      } catch (error) {
        // Show error message if something goes wrong
        Toast.show("Error al actualizar los datos", {
          position: Toast.positions.CENTER,
        });
      }
    },
  });

  return (
    <View style={styles.container}>
      {/* First name input */}
      <TextInput
        label="Nueva contraseña"
        style={globalStyles.form.input}
        onChangeText={(text) => formik.setFieldValue("password", text)}
        value={formik.values.password}
        error={formik.errors.password}
        secureTextEntry
      />
      {/* Last name input */}
      <TextInput
        label="Confirmar nueva contraseña"
        style={globalStyles.form.input}
        onChangeText={(text) => formik.setFieldValue("repeatPassword", text)}
        value={formik.values.repeatPassword}
        error={formik.errors.repeatPassword}
        secureTextEntry
      />
      {/* Submit button */}
      <Button
        mode="contained"
        style={globalStyles.form.btnSubmit}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      >
        Cambiar nombre y apellidos
      </Button>
    </View>
  );
}
