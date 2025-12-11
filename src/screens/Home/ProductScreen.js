import { useState, useEffect } from "react";
import { productCtrl } from "../../api";
import { Layout } from "../../layouts";
import { LoadingScreen, Separator } from "../../components/Shared";
import { Product } from "../../components/Product";
import { forEach } from "lodash";

export function ProductScreen(props) {
  const {
    route: { params },
  } = props;
  const productId = params.productId;

  const [product, setProduct] = useState(null);
  const [images, setImages] = useState([]);
  const [characteristics, setCharacteristics] = useState(""); // 👈 string

  useEffect(() => {
    getProduct();
  }, [productId]);

  const getProduct = async () => {
    try {
      const response = await productCtrl.getById(productId);

      console.log("🔥 PRODUCTO COMPLETO DESDE STRAPI:");
      console.log(JSON.stringify(response, null, 2));

      setProduct(response);

      // --- IMÁGENES ---
      const mainImage = response.main_image.url;
      const images = response.images;

      const arrayImages = [mainImage];
      forEach(images, (image) => {
        arrayImages.push(image.url);
      });
      setImages(arrayImages);

      // --- CARACTERÍSTICAS (rich-text → markdown) ---
      const rawChars = response.characteristics;
      console.log("🔥 RAW characteristics:", rawChars);

      const charsMarkdown = characteristicsToMarkdown(rawChars);
      console.log("🔥 Markdown generado:\n", charsMarkdown);

      setCharacteristics(charsMarkdown);
    } catch (error) {
      console.log("❌ ERROR EN getProduct:", error);
    }
  };

  // 🔧 Convierte los bloques rich-text de Strapi a un string Markdown
  function characteristicsToMarkdown(blocks = []) {
    if (!Array.isArray(blocks)) return "";

    const parts = blocks
      .map((block) => {
        // PÁRRAFOS
        if (block.type === "paragraph") {
          const text = (block.children || [])
            .map((child) => child.text || "")
            .join("");
          return text.trim();
        }

        // LISTAS SIN ORDEN (unordered)
        if (block.type === "list" && block.format === "unordered") {
          const items =
            block.children?.map((listItem) => {
              const line = (listItem.children || [])
                .map((child) => child.text || "")
                .join("")
                .trim();

              return line ? `- ${line}` : "";
            }) || [];

          return items.filter(Boolean).join("\n");
        }

        return "";
      })
      .filter((t) => t && t.length > 0);

    // Separamos párrafos y listas con una línea en blanco
    return parts.join("\n\n");
  }

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
