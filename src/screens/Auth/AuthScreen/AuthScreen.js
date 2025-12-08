import { useState } from "react";
import {
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { LoginForm, RegisterForm } from "../../../components/Auth";
import logo from "../../../../assets/logo.png";
import { styles } from "./AuthScreen.styles";

export function AuthScreen() {
  const [showLogin, setShowLogin] = useState(true);

  const onShowLoginRegister = () => setShowLogin((prevState) => !prevState);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }} // 🔥 MUY IMPORTANTE
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0} // ajusta si hace falta
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <Image source={logo} style={styles.logo} />

        {showLogin ? (
          <LoginForm showRegister={onShowLoginRegister} />
        ) : (
          <RegisterForm showLogin={onShowLoginRegister} />
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
