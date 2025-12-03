import { wishlistCtrl } from "../../../../api";
import { useState, useEffect } from "react";
import { IconButton } from "react-native-paper";
import { styles } from "./Favorite.styles";
import Toast from "react-native-root-toast";
import { useAuth } from "../../../../hooks";

export function Favorite(props) {
  const { productId } = props;
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [hasWishlist, setHasWishlist] = useState(undefined);

  useEffect(() => {
    checkWishlist();
  }, [productId]);

  const checkWishlist = async () => {
    try {
      const response = await wishlistCtrl.check(user.id, productId);
      setHasWishlist(response);
    } catch (error) {
      setHasWishlist(false);
    }
  };

  const addWishlist = async () => {
    try {
      setLoading(true);
      await wishlistCtrl.add(user.id, productId);
      setHasWishlist(true);
    } catch (error) {
      Toast.show("Error al agregar el producto a la lista de deseos", {
        position: Toast.positions.CENTER,
      });
    }

    setLoading(false);
  };

  const deleteWishlist = async () => {
    try {
      setLoading(true);
      await wishlistCtrl.delete(user.id, productId);
      setHasWishlist(false);
    } catch (error) {
      Toast.show("Error al eliminar de la wishlist", {
        position: Toast.positions.CENTER,
      });
    }

    setLoading(false);
  };

  if (hasWishlist === undefined) return null;
  return (
    <IconButton
      icon="heart"
      style={styles.iconButton}
      iconColor={hasWishlist ? "#073d66ff" : "#fff"}
      size={30}
      onPress={hasWishlist ? deleteWishlist : addWishlist}
      disabled={loading}
    />
  );
}
