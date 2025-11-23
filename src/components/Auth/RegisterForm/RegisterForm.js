import { View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { globalStyles } from "../../../styles";

export function RegisterForm(props) {
  const { showLogin } = props;
  return (
    <View>
      <TextInput
        label="Correo electronico"
        style={globalStyles.form.input}
        autoCapitalize="none"
      />
      <TextInput
        label="Nombre de usuario"
        style={globalStyles.form.input}
        autoCapitalize="none"
      />
      <TextInput
        label="Contraseña"
        style={globalStyles.form.input}
        secureTextEntry
      />
      <TextInput
        label="Repetir contraseña"
        style={globalStyles.form.input}
        secureTextEntry
      />

      <Button mode="contained" style={globalStyles.form.btnSubmit}>
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
