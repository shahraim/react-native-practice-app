import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Profile from "./src/Screens/Profile";
import Subscribe from "./src/Screens/Subscribe";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Purchase from "./src/Components/Subscribe/Purchase";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Subscribe" component={Subscribe} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Purchase" component={Purchase} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131313",
    paddingTop: 25,
  },
});
