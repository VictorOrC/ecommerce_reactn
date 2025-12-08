import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import { globalStyles } from "../../../styles";
import { useFormik } from "formik";
import { authCtrl } from "../../../api";
import { initialValues, validationSchema } from "./RegisterForm.form";
import Toast from "react-native-root-toast";
import { styles } from "./RegisterForm.styles";

export function RegisterForm(props) {
  const { showLogin } = props;

  const [secure, setSecure] = useState(true);
  const [secureRepeat, setSecureRepeat] = useState(true);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const { email, username, password } = formValue;
        await authCtrl.register(email, username, password);
        showLogin();
      } catch (error) {
        console.log("ERROR REGISTER:", JSON.stringify(error, null, 2));

        const msg =
          error?.error?.message ||
          error?.message ||
          "Error al registrar el usuario";

        Toast.show(msg, {
          position: Toast.positions.CENTER,
          duration: 2000,
        });
      }
    },
  });

  const hasEmailError = !!(formik.touched.email && formik.errors.email);
  const hasUsernameError = !!(
    formik.touched.username && formik.errors.username
  );
  const hasPasswordError = !!(
    formik.touched.password && formik.errors.password
  );
  const hasRepeatPasswordError = !!(
    formik.touched.repeatPassword && formik.errors.repeatPassword
  );

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Título */}
        <View style={styles.header}>
          <Text variant="titleLarge" style={styles.title}>
            Crear cuenta
          </Text>
          <Text variant="bodyMedium" style={styles.subtitle}>
            Regístrate para comenzar
          </Text>
        </View>

        {/* Correo */}
        <TextInput
          label="Correo electrónico"
          mode="outlined"
          style={styles.input}
          contentStyle={{ fontSize: 16, paddingVertical: 10 }}
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

        {/* Nombre de usuario */}
        <TextInput
          label="Nombre de usuario"
          mode="outlined"
          style={styles.input}
          contentStyle={{ fontSize: 16, paddingVertical: 10 }}
          outlineStyle={styles.outline}
          autoCapitalize="none"
          left={<TextInput.Icon icon="account-outline" />}
          onChangeText={formik.handleChange("username")}
          onBlur={formik.handleBlur("username")}
          value={formik.values.username}
          error={hasUsernameError}
        />
        {hasUsernameError && (
          <Text style={styles.errorText}>{formik.errors.username}</Text>
        )}

        {/* Contraseña */}
        <TextInput
          label="Contraseña"
          mode="outlined"
          style={styles.input}
          contentStyle={{ fontSize: 16, paddingVertical: 10 }}
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

        {/* Repetir contraseña */}
        <TextInput
          label="Repetir contraseña"
          mode="outlined"
          style={styles.input}
          contentStyle={{ fontSize: 16, paddingVertical: 10 }}
          outlineStyle={styles.outline}
          secureTextEntry={secureRepeat}
          left={<TextInput.Icon icon="lock-check-outline" />}
          right={
            <TextInput.Icon
              icon={secureRepeat ? "eye-off-outline" : "eye-outline"}
              onPress={() => setSecureRepeat((prev) => !prev)}
            />
          }
          onChangeText={formik.handleChange("repeatPassword")}
          onBlur={formik.handleBlur("repeatPassword")}
          value={formik.values.repeatPassword}
          error={hasRepeatPasswordError}
        />
        {hasRepeatPasswordError && (
          <Text style={styles.errorText}>{formik.errors.repeatPassword}</Text>
        )}

        {/* Botón registrar */}
        <Button
          mode="contained"
          style={globalStyles.form.btnSubmit}
          onPress={formik.handleSubmit}
          loading={formik.isSubmitting}
        >
          Registrarte
        </Button>

        {/* Botón volver a login */}
        <Button
          mode="text"
          style={globalStyles.form.btnText}
          labelStyle={globalStyles.form.btnTextLabel}
          onPress={showLogin}
        >
          Iniciar sesión
        </Button>
      </View>
    </View>
  );
}
