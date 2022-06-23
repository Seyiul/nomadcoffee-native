import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { logUserOut } from "../apollo";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

const GET_COFFEESHOPS = gql`
  query seeCoffeeShops($page: Int) {
    seeCoffeeShops(page: $page) {
      id
      name
      latitude
      longitude
      categories {
        name
      }
      user {
        name
      }
    }
  }
`;

export default function Home() {
  const { data } = useQuery(GET_COFFEESHOPS);
  console.log(data);
  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity onPress={() => logUserOut()}>
        <Text style={{ color: "white" }}>Home</Text>
      </TouchableOpacity>
    </View>
  );
}
