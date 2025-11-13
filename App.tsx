import { StyleSheet, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { Demo } from "./src/components/Demo"

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Demo/>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
