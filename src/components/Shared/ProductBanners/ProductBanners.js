import { View, Image, Pressable, Dimensions } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { styles } from "./ProductBanners.style";
import { useNavigation } from "@react-navigation/native";
import { size } from "lodash";
import { ENV, scrensName } from "../../../utils";
import { useState } from "react";

const width = Dimensions.get("window").width;

export function ProductBanners(props) {
  const { banners } = props;
  const navigation = useNavigation();
  const [bannerActive, setBannerActive] = useState(0);

  const goToProducto = (id) => {
    navigation.navigate(scrensName.home.product, { productId: id });
  };

  const renderItem = (item) => {
    const urlImage = item.item.banner.url;

    return (
      <Pressable onPress={() => goToProducto(item.item.product.id)}>
        <Image
          source={{ uri: `${ENV.URL}${urlImage}` }}
          style={styles.carousel}
        />
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        layout="default"
        data={banners}
        sliderWidth={width}
        itemWidth={width}
        renderItem={renderItem}
        onSnapToItem={(index) => setBannerActive(index)}
      />
      <Pagination
        dotsLength={size(banners)}
        activeDotIndex={bannerActive}
        inactiveDotOpacity={0.6}
        inactiveDotScale={0.6}
        containerStyle={styles.dotContainer}
        dotStyle={styles.dot}
        inactiveDotStyle={styles.dot}
      />
    </View>
  );
}
