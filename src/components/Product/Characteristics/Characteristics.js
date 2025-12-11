import { View } from "react-native";
import { useWindowDimensions } from "react-native";
import { markdownToHtml } from "simple-markdown";
import RenderHtml from "react-native-render-html";
import { styles } from "./Characteristics.styles";

export function Characteristics({ text }) {
  const { width } = useWindowDimensions();

  const safeText =
    typeof text === "string" && text.trim().length > 0
      ? text
      : "No hay descripción disponible para este producto.";

  let html = "";
  try {
    html = markdownToHtml(safeText);
  } catch (e) {
    console.log("ERROR markdownToHtml:", e);
    html = safeText;
  }

  // 👇 Estilos por etiqueta HTML
  const tagsStyles = {
    h1: {
      fontSize: 18,
      fontWeight: "700",
      marginBottom: 6,
      color: "#111827",
    },
    h2: {
      fontSize: 16,
      fontWeight: "600",
      marginTop: 10,
      marginBottom: 4,
      color: "#111827",
    },
    p: {
      marginBottom: 6,
    },
    ul: {
      marginTop: 4,
      marginBottom: 8,
      paddingLeft: 18,
    },
    li: {
      marginBottom: 2,
    },
    strong: {
      fontWeight: "700",
    },
  };

  return (
    <View style={styles.container}>
      <RenderHtml
        contentWidth={width - 24}
        source={{ html: markdownToHtml(text) }}
        baseStyle={styles.baseText}
        tagsStyles={tagsStyles}
      />
    </View>
  );
}
