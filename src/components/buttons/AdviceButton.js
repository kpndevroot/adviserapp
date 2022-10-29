import Icon from "react-native-vector-icons/FontAwesome";
import React from "react";
import { TouchableOpacity, StyleSheet, Image, View, Text } from "react-native";

export const AdviceButton = () => {
  return (
    <TouchableOpacity
      style={styles.buttonFacebookStyle}
      activeOpacity={0.5}
      onPress={() => console.log("hi")}
    >
      <Image
        source={require("../../asset/icons/icon.png")}
        style={styles.buttonImageIconStyle}
      />
      <View style={styles.buttonIconSeparatorStyle} />
      <Text style={styles.buttonTextStyle}>Advice</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,

    margin: 10,

    marginTop: 30,

    padding: 30,
  },

  buttonGPlusStyle: {
    flexDirection: "row",

    alignItems: "center",

    backgroundColor: "#dc4e41",

    borderWidth: 0.5,

    borderColor: "#fff",

    height: 40,

    borderRadius: 5,

    margin: 5,
  },

  buttonFacebookStyle: {
    flexDirection: "row",

    alignItems: "center",

    backgroundColor: "#485a96",

    borderWidth: 0.5,

    borderColor: "#fff",

    height: 40,

    borderRadius: 5,

    margin: 5,
  },

  buttonImageIconStyle: {
    padding: 10,

    margin: 5,

    height: 25,

    width: 25,

    resizeMode: "stretch",
  },

  buttonTextStyle: {
    color: "#fff",

    marginBottom: 4,

    marginLeft: 10,
  },

  buttonIconSeparatorStyle: {
    backgroundColor: "#fff",

    width: 1,

    height: 40,
  },
});

export default AdviceButton;
