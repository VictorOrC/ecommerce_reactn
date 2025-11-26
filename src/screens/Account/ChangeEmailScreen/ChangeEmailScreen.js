import { View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useFormik } from "formik";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../../hooks";
import { userCtrl } from "../../../api";
import { globalStyles } from "../../../styles";
import { initialValues, validationSchema } from "./ChangeEmailScreen.form";
import { styles } from "./ChangeEmailScreen.style";
import Toast from "react-native-root-toast";

// Screen for updating the user's first and last name
export function ChangeEmailScreen() {
  // Get user data and update function from AuthContext
  const { user, updateUser } = useAuth();

  // Navigation hook to move between screens
  const navigation = useNavigation();
  // console.log(user);

  // Formik configuration for form handling and validation
  const formik = useFormik({
    // Initial values filled with the current user's data
    initialValues: initialValues(user.email),

    // Form validation rules (Yup)
    validationSchema: validationSchema(),

    // Disable validation on typing, only validate on submit
    validateOnChange: false,

    // Function triggered when submitting the form
    onSubmit: async (formValue) => {
      try {
        // Send update request to the API
        await userCtrl.update(user.id, formValue);

        // Update user data in the global AuthContext state
        updateUser("email", formValue.email);

        // Navigate back to the previous screen
        navigation.goBack();
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
        label="Correo Electronico"
        style={globalStyles.form.input}
        onChangeText={(text) => formik.setFieldValue("email", text)}
        value={formik.values.email}
        error={formik.errors.email}
      />
      {/* Submit button */}
      <Button
        mode="contained"
        style={globalStyles.form.btnSubmit}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      >
        Cambiar correo electronico
      </Button>
    </View>
  );
}
