import { useState } from "react";
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { LoginForm, RegisterForm } from "../../../components/Auth";
import logo from "../../../../assets/logo.png";
import { styles } from "./AuthScreen.styles";

export function AuthScreen() {
  const [showLogin, setShowLogin] = useState(false);

  const onShowLoginRegister = () => setShowLogin((prevState) => !prevState);

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        {showLogin ? (
          <LoginForm />
        ) : (
          <RegisterForm showLogin={onShowLoginRegister} />
        )}
      </KeyboardAvoidingView>
    </View>
  );
}
