import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import { globalStyles } from "../../../styles";
import { useFormik } from "formik";
import Toast from "react-native-root-toast";
import { initialValues, validationSchema } from "./LoginForm.form";
import { authCtrl } from "../../../api";
import { useAuth } from "../../../hooks";
import { styles } from "./LoginForm.styles";

export function LoginForm(props) {
  const { showRegister } = props;
  const { login } = useAuth();
  const [secure, setSecure] = useState(true);

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
        console.log("ERROR LOGIN:", JSON.stringify(error, null, 2));

        const msg =
          error?.error?.message ||
          error?.message ||
          "Usuario o contraseña incorrectos";

        Toast.show(msg, {
          duration: 2000,
          position: Toast.positions.CENTER,
        });
      }
    },
  });

  const hasEmailError = !!(formik.touched.email && formik.errors.email);
  const hasPasswordError = !!(
    formik.touched.password && formik.errors.password
  );

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Título */}
        <View style={styles.header}>
          <Text variant="titleLarge" style={styles.title}>
            Bienvenido de vuelta
          </Text>
          <Text variant="bodyMedium" style={styles.subtitle}>
            Inicia sesión en tu cuenta
          </Text>
        </View>

        {/* Correo */}
        <TextInput
          label="Correo electrónico"
          mode="outlined"
          style={styles.input}
          outlineStyle={styles.outline}
          autoCapitalize="none"
          keyboardType="email-address"
          left={<TextInput.Icon icon="email-outline" />}
          onChangeText={formik.handleChange("email")}
          onBlur={formik.handleBlur("email")}
          value={formik.values.email}
          error={hasEmailError}
        />
        {hasEmailError && (
          <Text style={styles.errorText}>{formik.errors.email}</Text>
        )}

        {/* Contraseña */}
        <TextInput
          label="Contraseña"
          mode="outlined"
          style={styles.input}
          outlineStyle={styles.outline}
          secureTextEntry={secure}
          left={<TextInput.Icon icon="lock-outline" />}
          right={
            <TextInput.Icon
              icon={secure ? "eye-off-outline" : "eye-outline"}
              onPress={() => setSecure((prev) => !prev)}
            />
          }
          onChangeText={formik.handleChange("password")}
          onBlur={formik.handleBlur("password")}
          value={formik.values.password}
          error={hasPasswordError}
        />
        {hasPasswordError && (
          <Text style={styles.errorText}>{formik.errors.password}</Text>
        )}

        {/* Botón principal */}
        <Button
          mode="contained"
          style={globalStyles.form.btnSubmit}
          onPress={formik.handleSubmit}
          loading={formik.isSubmitting}
        >
          Iniciar sesión
        </Button>

        {/* Botón de cambio a registro */}
        <Button
          mode="text"
          style={globalStyles.form.btnText}
          labelStyle={globalStyles.form.btnTextLabel}
          onPress={showRegister}
        >
          ¿No tienes cuenta? Regístrate
        </Button>
      </View>
    </View>
  );
}
