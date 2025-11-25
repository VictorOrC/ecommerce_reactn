import { StatusBar as StatusBarRN } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styled } from "./StatusBar.styles";

export function StatusBar(props) {
  const { backgroundColor, ...rest } = props;
  const styles = styled(backgroundColor);

  return (
    <>
      <StatusBarRN backgroundColor={backgroundColor} {...rest} />
      <SafeAreaView style={styles.safeAreaView} />
    </>
  );
}
