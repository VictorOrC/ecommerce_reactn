import { View, Text } from "react-native";
import { styles } from "./Characteristics.styles";
import { markdownToHtml } from "simple-markdown";
import RenderHtml from "react-native-render-html";

export function Characteristics(props) {
  const { text } = props;

  return (
    //<RenderHtml contentWidth={200} source={{ html: markdownToHtml(text) }} />
    <View style={styles.container}>
      <Text style={styles.title}>Descripcion</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}
