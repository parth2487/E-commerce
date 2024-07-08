import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screen/LoginScreen.js'
import RegisterScreen from '../screen/RegisterScreen.js'
import HomeScreen from '../screen/HomeScreen.js'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import AddressScreen from "../screen/AddressScreen";
import AddAddressScreen from "../screen/AddAddressScreen.js";
import ProductInfoScreen from "../screen/ProductInfoScreen.js"
import ConfirmationScreen from "../screen/ConfirmationScreen.js";
import ProfileScreen from "../screen/ProfileScreen.js";
import CartScreen from "../screen/CartScreen.js"
import OrderScreen from "../screen/OrderScreen.js";
function StackNavigation()
{
	const Tab = createBottomTabNavigator();
	const Stack = createNativeStackNavigator();
	 function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarLabelStyle: { color: "#008E97" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" size={24} color="#008E97" />
              ) : (
                <AntDesign name="home" size={24} color="black" />
              ),
          }}
        />

        <Tab.Screen
          name="Profile"
        component={ProfileScreen}
          options={{
            tabBarLabel: "Profile",
            tabBarLabelStyle: { color: "#008E97" },
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="person" size={24} color="#008E97" />
              ) : (
                <Ionicons name="person-outline" size={24} color="black" />
              ),
          }}
        />

        <Tab.Screen
          name="Cart"
         component={CartScreen}
          options={{
            tabBarLabel: "Cart",
            tabBarLabelStyle: { color: "#008E97" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="shoppingcart" size={24} color="#008E97" />
              ) : (
                <AntDesign name="shoppingcart" size={24} color="black" />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }
	
	return(
		<NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown:false}}/>
         <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Info"
          component={ProductInfoScreen}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Address"
          component={AddAddressScreen}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="Add"
          component={AddressScreen}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="Confirm"
          component={ConfirmationScreen}
          options={{ headerShown: false }}
        />
                <Stack.Screen
          name="Order"
          component={OrderScreen}
          options={{ headerShown: false }}
        />  
      </Stack.Navigator>
    </NavigationContainer>	
		)
}

export default StackNavigation