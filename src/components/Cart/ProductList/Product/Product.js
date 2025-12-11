// src/components/Cart/ProductList/Product/Product.js
import { View, Text, Image, TextInput } from "react-native";
import { Button, IconButton } from "react-native-paper";
import { ENV, fn } from "../../../../utils";
import { useCart } from "../../../../hooks";
import { styles } from "./Product.styles";

export function Product(props) {
  const { product } = props;
  const { deleteProduct, increaseProduct, decreaseProduct } = useCart();

  const urlImage = product.main_image.url;

  const onDeleteProduct = () => deleteProduct(product.id);
  const onIncreaseProduct = () => increaseProduct(product.id);
  const onDecreaseProduct = () => decreaseProduct(product.id);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: `${ENV.URL}${urlImage}` }} style={styles.image} />
      </View>

      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
            {product.title}
          </Text>
          <View style={styles.prices}>
            <Text style={styles.currentPrice}>
              ${fn.calcPrice(product.price, product.discount)}
            </Text>
          </View>
        </View>

        <View style={styles.actions}>
          <View style={styles.selectQuantity}>
            <IconButton
              icon="minus"
              iconColor="#fff"
              size={18}
              style={styles.btnQuantity}
              onPress={onDecreaseProduct}
            />
            <TextInput
              value={product.quantity.toString()}
              style={styles.inputQuantity}
              editable={false}
            />
            <IconButton
              icon="plus"
              iconColor="#fff"
              size={18}
              style={styles.btnQuantity}
              onPress={onIncreaseProduct}
            />
          </View>

          <Button
            mode="contained"
            style={styles.btnDelete}
            contentStyle={styles.btnDeleteContent}
            labelStyle={styles.btnDeleteLabel}
            buttonColor="#ef4444"
            onPress={onDeleteProduct}
          >
            Borrar
          </Button>
        </View>
      </View>
    </View>
  );
}
