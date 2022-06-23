import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../../screens/Profile";
import Photo from "../../screens/Photo";
import Home from "../../screens/Home";
import Search from "../../screens/Search";
import Me from "../../screens/Me";
import { Text } from "react-native";
import { useFonts } from "@expo-google-fonts/inter";
import { Pacifico_400Regular } from "@expo-google-fonts/pacifico";
import AppLoading from "expo-app-loading";

const Stack = createStackNavigator();

export default function StackNavFactory({ screenName }) {
  const [fontLoaded] = useFonts({ Pacifico_400Regular });
  if (!fontLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Stack.Navigator
        headerMode="screen"
        screenOptions={{
          headerBackTitleVisible: false,
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "black",
            shadowColor: "rgba(255,255,255,0.5)",
          },
          headerTitleAlign: "center",
        }}
      >
        {screenName === "Home" ? (
          <Stack.Screen
            name={"Home"}
            component={Home}
            options={{
              headerTitle: () => (
                <Text
                  style={{
                    color: "white",
                    fontFamily: "Pacifico_400Regular",
                    fontSize: 25,
                  }}
                >
                  Nomad Coffee
                </Text>
              ),
            }}
          />
        ) : null}
        {screenName === "Search" ? (
          <Stack.Screen name={"Search"} component={Search} />
        ) : null}
        {screenName === "Me" ? (
          <Stack.Screen name={"Me"} component={Me} />
        ) : null}
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Photo" component={Photo} />
      </Stack.Navigator>
    );
  }
}
