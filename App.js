import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

const stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#4d95a2" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#ffe3f5" },
          }}
        >
          <stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{ title: "All Categories" }}
          />
          <stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
        </stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
