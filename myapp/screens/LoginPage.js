import React from "react";
import { SafeAreaView, View, Text, Image, TextInput } from "react-native";

const LoginPage = () => {
  return (
    <SafeAreaView style={{ display: "flex" }}>
      <Image
        style={{
          width: 250,
          height: 250,
          display: "inline-block",
          resizeMode: "contain",
          justifyContent: "flex-end",
          marginLeft: "auto",
        }}
        source={require("../assets/images/MyCar.png")}
      />
      <Text
        style={{
          display: "flex",
          fontSize: 20,
          color: "#333",
          textAlign: "right",
          marginBottom: 35,
        }}
      >
        להתחברות לאפליקציית אמדוקס אנא הזינו את מספר הטלפון והמייל שלכם
      </Text>
      <TextInput
        placeholder="מספר טלפון"
        style={{
          borderColor: "#ccc",
          borderWidth: 1,
          paddingBottom: 8,
          paddingTop: 8,
          marginBottom: 25,
          justifyContent: "flex-end",
        }}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="כתובת מייל"
        style={{
          borderColor: "#ccc",
          borderWidth: 1,
          paddingBottom: 8,
          paddingTop: 8,
          marginBottom: 25,
          justifyContent: "flex-end",
        }}
        keyboardType="email-address"
      />
    </SafeAreaView>
  );
};

export default LoginPage;
