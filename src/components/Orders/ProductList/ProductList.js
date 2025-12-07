import { View, Text, Image } from "react-native";
import { map } from "lodash";
import { styles } from "./ProductList.styles";
import { fn } from "../../../utils";
import { ENV } from "../../../utils";

export function ProductList(props) {
  const { products } = props;
  console.log(`${ENV.URL}${products[0].image}`);

  return map(products, (product) => (
    <View key={product.id} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: `${ENV.URL}${product.image}` }}
          style={styles.image}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name} numberOfLines={3} ellipsizeMode="tail">
          {product.title}
        </Text>

        <View style={styles.price}>
          <Text style={styles.currentPrice}>
            ${fn.calcPrice(product.price, product.discount)} {" x "}
            {product.quantity}
          </Text>
        </View>
      </View>
    </View>
  ));
}
