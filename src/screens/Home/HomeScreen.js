import { useState, useEffect } from "react";
import Toast from "react-native-root-toast";
import { ProductBanners } from "../../components/Shared";
import { homeBannerCtrl } from "../../api";
import { useAuth } from "../../hooks";
import { Layout } from "../../layouts";
import { SafeAreaView } from "react-native-safe-area-context";

export function HomeScreen() {
  const { logout } = useAuth();
  const [banners, setBanners] = useState(null);

  useEffect(() => {
    getBanners();
  }, []);

  const getBanners = async () => {
    try {
      const response = await homeBannerCtrl.getAll();
      setBanners(response?.data || null);
    } catch (error) {
      Toast.show("Error al obtener los banners", {
        position: Toast.positions.CENTER,
      });
    }
  };

  return (
    <Layout.Basic>
      {banners && <ProductBanners banners={banners} />}
    </Layout.Basic>
  );
}
