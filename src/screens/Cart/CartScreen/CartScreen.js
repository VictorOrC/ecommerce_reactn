import { useState, useEffect } from "react";
import { View, Platform, KeyboardAvoidingView, ScrollView } from "react-native";
import { size } from "lodash";
import { productCtrl, addressCtrl } from "../../../api";
import { useCart, useAuth } from "../../../hooks";
import { Layout } from "../../../layouts";
import { Cart } from "../../../components/Cart";
import { LoadingScreen, Search } from "../../../components/Shared";
import { fn } from "../../../utils";
import { styles } from "./CartScreen.styles";

export function CartScreen() {
  const [products, setProducts] = useState(null);
  const [totalPayment, setTotalPayment] = useState(0);
  const [addresses, setAddresses] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const { cart } = useCart();
  const { user } = useAuth();

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
  };

  const loadAddresses = async () => {
    const response = await addressCtrl.getAll(user.id);
    setAddresses(response);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0} // súbelo a 100/120 si hace falta
    >
      <Layout.Cart>
        {!products ? (
          <LoadingScreen text="Cargando carrito" />
        ) : size(products) === 0 ? (
          <>
            <Search.Input />
            <Cart.Empty />
          </>
        ) : (
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
          >
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
          </ScrollView>
        )}
      </Layout.Cart>
    </KeyboardAvoidingView>
  );
}
