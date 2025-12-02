import { View, Text } from "react-native";
import { IconButton } from "react-native-paper";
import { styles } from "./Favorite.styles";

export function Favorite(props) {
  const { productId } = props;
  return (
    <IconButton
      icon="heart"
      style={styles.iconButton}
      iconColor="#fff"
      size={30}
    />
  );
}
