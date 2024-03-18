import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Profile from "./src/Screens/Profile";
import ComicPage from "./src/Screens/ComicPage";
// import Navbar from "./src/Components/Navbar";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Navbar /> */}
      <View>
        <Profile />
        {/* <ComicPage /> */}
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#131313",
    height: "100%",
    paddingTop: 25,
  },
});
