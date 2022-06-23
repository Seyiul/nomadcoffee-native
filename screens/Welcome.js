import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { colors } from "../colors";
import { useFonts } from "@expo-google-fonts/inter";
import { Pacifico_400Regular } from "@expo-google-fonts/pacifico";
import AppLoading from "expo-app-loading";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";

const LoginLink = styled.Text`
  color: ${colors.green};
  font-weight: 600;
  margin-top: 20px;
  text-align: center;
`;

export default function Welcome({ navigation }) {
  const goToCreateAccount = () => navigation.navigate("CreateAccount");
  const goToLogin = () => navigation.navigate("Login");
  const [fontLoaded] = useFonts({ Pacifico_400Regular });

  if (!fontLoaded) {
    return <AppLoading />;
  } else {
    return (
      <AuthLayout>
        <AuthButton
          text="Create Account"
          disabled={false}
          onPress={goToCreateAccount}
        />
        <TouchableOpacity onPress={goToLogin}>
          <LoginLink onPress={goToLogin}>Log In</LoginLink>
        </TouchableOpacity>
      </AuthLayout>
    );
  }
}
