import { View, Text } from "react-native";
import { map } from "lodash";
import { styles } from "./ProductList.styles";
import { Product } from "./Product";

export function ProductList(props) {
  const { products } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Productos:</Text>

      {map(products, (product) => (
        <Product key={product.documentId} product={product} />
      ))}
    </View>
  );
}
