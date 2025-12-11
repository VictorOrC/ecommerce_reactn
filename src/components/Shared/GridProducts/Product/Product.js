import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { scrensName } from "../../../../utils";
import { styles } from "./Product.style";
import { ENV } from "../../../../utils";

export function Product(props) {
  const { product } = props;
  const navigation = useNavigation();
  const mainImage = product.main_image.url;

  const goToProduct = () => {
    navigation.navigate(scrensName.home.product, {
      productId: product.documentId,
    });
  };

  return (
    <TouchableWithoutFeedback onPress={goToProduct}>
      <View style={styles.container}>
        <View style={styles.product}>
          <Image
            source={{ uri: `${ENV.URL}${mainImage}` }}
            style={styles.image}
            resizeMode="stretch"
          />
          <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
            {product.title}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
