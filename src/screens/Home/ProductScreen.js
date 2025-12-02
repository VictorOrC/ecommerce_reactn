import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { forEach } from "lodash";
import { productCtrl } from "../../api";
import { Layout } from "../../layouts";
import { map } from "lodash";
import { LoadingScreen, Separator } from "../../components/Shared";
import { Product } from "../../components/Product";

export function ProductScreen(props) {
  const {
    route: { params },
  } = props;
  const productId = params.productId;
  //console.log(props);
  const [product, setProduct] = useState(null);
  const [images, setImages] = useState([]);
  const [characteristics, setCharacteristics] = useState([]);

  useEffect(() => {
    getProduct();
  }, [productId]);

  const getProduct = async () => {
    try {
      const response = await productCtrl.getById(productId);
      setProduct(response);

      // --- IMÁGENES ---
      const mainImage = response.main_image.url;
      const images = response.images;

      const arrayImages = [mainImage];
      forEach(images, (image) => {
        arrayImages.push(image.url);
      });
      setImages(arrayImages);

      // --- CARACTERÍSTICAS ---
      const chars =
        response.characteristics
          ?.flatMap(
            (block) => block.children?.map((child) => child.text.trim()) ?? []
          )
          .filter((t) => t.length > 0) ?? [];

      setCharacteristics(chars);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Layout.Basic>
        {!product ? (
          <LoadingScreen text="Cargando Producto" size="large" />
        ) : (
          <>
            <Product.Title text={product.title} />
            <Product.CarouselImages images={images} />
            <Product.Price price={product.price} discount={product.discount} />
            <Separator height={10} />
            <Product.Characteristics text={characteristics} />
            <Separator height={70} />
          </>
        )}
      </Layout.Basic>

      {product && <Product.BottomBar productId={productId} />}
    </>
  );
}
