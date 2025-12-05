import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { size, map } from "lodash";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { productCtrl, addressCtrl } from "../../../api";
import { useCart, useAuth } from "../../../hooks";
import { CartLayout } from "../../../layouts/CartLayout";
import { fn } from "../../../utils";
import { LoadingScreen } from "../../../components/Shared";
import { Cart } from "../../../components/Cart";
import { styles } from "./CartScreen.styles";
import { Layout } from "../../../layouts";
import { Search } from "../../../components/Shared";

export function CartScreen() {
  const [products, setProducts] = useState(null);
  const [totalPayment, setTotalPayment] = useState(0);
  const [addresses, setAddresses] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const { cart } = useCart();
  const { user } = useAuth();

  //console.log(addresses);

  useEffect(() => {
    getProducts();
  }, [cart]);

  useEffect(() => {
    loadAddresses();
  }, []);

  const getProducts = async () => {
    const productsTemp = [];
    let totalPaymenTemp = 0;

    for await (const item of cart) {
      const response = await productCtrl.getById(item.id);
      productsTemp.push({ ...response, ...item });

      const priceProduct = fn.calcPrice(response.price, response.discount);
      totalPaymenTemp += priceProduct * item.quantity;
    }

    setProducts(productsTemp);
    setTotalPayment(totalPaymenTemp);
    // console.log(productsTemp[0]);
  };

  const loadAddresses = async () => {
    const response = await addressCtrl.getAll(user.id);
    setAddresses(response);
  };

  return (
    <Layout.Cart>
      {!products ? (
        <LoadingScreen text="Cargando carrito" />
      ) : size(products) === 0 ? (
        <>
          <Search.Input />
          <Cart.Empty />
        </>
      ) : (
        <KeyboardAwareScrollView extraScrollHeight={120}>
          <View style={styles.container}>
            <Cart.ProductList products={products} />
            <Cart.AddressList
              addresses={addresses}
              selectedAddress={selectedAddress}
              setSelectedAddress={setSelectedAddress}
            />
            {selectedAddress && (
              <Cart.Payment
                totalPayment={totalPayment}
                selectedAddress={selectedAddress}
                products={products}
              />
            )}
          </View>
        </KeyboardAwareScrollView>
      )}
    </Layout.Cart>
  );
}
