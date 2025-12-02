import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AwesomeIcon from "react-native-vector-icons/FontAwesome5";
import { styles } from "./SearchHistory.style";
import { map } from "lodash";
import { searchHistoryCtrl } from "../../../../api";
import { useSearch } from "../../../../hooks";
import Toast from "react-native-root-toast";

export function SearchHistory(props) {
  const { open, height, onSearch } = props;
  const containerStyles = { top: height };
  const { setSearchText } = useSearch();
  const [history, setHistory] = useState(null);

  useEffect(() => {
    if (open) getHistory();
  }, [open]);

  const getHistory = async () => {
    try {
      const response = await searchHistoryCtrl.get();
      setHistory(response);
    } catch (error) {
      Toast.show("Error al obtener el historial de busqueda", {
        position: Toast.positions.CENTER,
      });
    }
  };

  const onSearchWrapper = (text) => {
    setSearchText(text);
    onSearch(text);
  };

  if (!open) return null;

  return (
    <View style={[containerStyles, styles.container]}>
      {map(history, (item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => onSearchWrapper(item.search)}
        >
          <View style={styles.historyItem}>
            <Text style={styles.text}>{item.search}</Text>
            <AwesomeIcon name="arrow-right" size={16} />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}
