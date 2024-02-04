import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import Detail from "./screens/Detail";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavScreen from "./screens/FavScreen";
import {Ionicons } from '@expo/vector-icons'

const stack = createNativeStackNavigator();
const drawer = createDrawerNavigator();
function DrawerNav() {
  return(
    <drawer.Navigator  screenOptions={{
      headerStyle: { backgroundColor: "#4d95a2" },
      headerTintColor: "white",
      sceneContainerStyle: { backgroundColor: "#ffe3f5" },
      drawerContentStyle:{backgroundColor:"#ffe3f5" },
      drawerInactiveTintColor:'black',
      drawerActiveTintColor:'white',
      drawerActiveBackgroundColor:"#4d95a2"
      
    }}>
      <drawer.Screen
        name="Categorie"
        component={CategoriesScreen}
        options={{ title: "All Categories" ,drawerIcon:({color,size})=>(
          <Ionicons name="list" color={color} size={size}/>
        ),}}
      />
       <drawer.Screen
        name="FavScreen"
        component={FavScreen}
        options={{ title: 'Favorite' ,drawerIcon:({color,size})=>(
          <Ionicons name="star" color={color} size={size}/>
        ),}}
      />
    </drawer.Navigator>
  )
}
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
            component={DrawerNav}
            options={
              {
                headerShown:false
              }
            }
          />
          <stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <stack.Screen name="Mealdetailscreen" component={Detail} options={{title:'About The Screen'}}/>
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
