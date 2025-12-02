import { useState } from "react";
import { Image, Dimensions, View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { size } from "lodash";
import { styles } from "./CarouselImages.styles";
import { ENV } from "../../../utils";

const { width } = Dimensions.get("window");

export function CarouselImages(props) {
  const { images } = props;
  const [imageActive, setImageactive] = useState(0);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.imageContainer}>
        <Image source={{ uri: `${ENV.URL}${item}` }} style={styles.image} />
      </View>
    );
  };

  return (
    <>
      <Carousel
        layout="default"
        data={images}
        sliderWidth={width}
        itemWidth={width}
        renderItem={renderItem}
        onSnapToItem={(index) => setImageactive(index)}
      />
      <Pagination
        dotsLength={size(images)}
        activeDotIndex={imageActive}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        containerStyle={styles.dotsContainer}
      />
    </>
  );
}
