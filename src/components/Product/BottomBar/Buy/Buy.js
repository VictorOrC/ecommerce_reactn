import { Button } from "react-native-paper";
import { useCart } from "../../../../hooks";
import { styles } from "./Buy.styles";
import Toast from "react-native-root-toast";

export function Buy(props) {
  const { productId } = props;
  const { addCart } = useCart();

  const addProductCart = async () => {
    try {
      await addCart(productId),
        Toast.show("Producto agregado al carrito", {
          position: Toast.positions.CENTER,
        });
    } catch (error) {
      Toast.show("Error al agregar al carrito", {
        position: Toast.positions.CENTER,
      });
    }
  };
  return (
    <Button
      mode="contained"
      contentStyle={styles.btnBuyContent}
      labelStyle={styles.btnLabel}
      style={styles.btn}
      onPress={addProductCart}
    >
      Añadir al Carrito
    </Button>
  );
}
