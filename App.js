import { StatusBar } from "expo-status-bar";
import SplashScreen from "react-native-splash-screen";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Clipboard,
  ToastAndroid,
} from "react-native";
import { AdviceButton } from "./src/components/buttons/AdviceButton";
import axios from "axios";
const Toast = ({ visible, message }) => {
  if (visible) {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      25,
      50
    );
    return null;
  }
  return null;
};
import { TouchableOpacity } from "react-native";
export default function App() {
  useEffect(() => {
    SplashScreen.hide();

    fetchAdvice();
  }, []);

  const [advice, setAdvice] = useState("loading...");
  const [visibleToast, setVisibleToast] = useState(false);
  const getRandomId = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() * (max - min + 1)) + min).toString();
  };
  const fetchAdvice = async () => {
    await axios
      .get("http://api.adviceslip.com/advice/" + getRandomId(1, 200))
      .then((response) => {
        // console.log(response.data.slip.advice);
        setAdvice(response.data.slip.advice);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const copyToClipboard = () => {
    Clipboard.setString(advice);
    setVisibleToast(true);
  };
  return (
    <>
      <StatusBar barStyle="light" />
      {/* app container */}
      <View style={styles.appContainer}>
        {/* inner container start here */}
        <View style={styles.innerContainer}>
          <View style={[styles.card, styles.shadowProp]}>
            <Text>"{advice}"</Text>
            <View style={styles.copyContainer}>
              <TouchableOpacity
                onPress={copyToClipboard}
                style={[styles.button, styles.shadowProp]}
              >
                <Image
                  source={require("./src/asset/icons/copy.png")}
                  style={styles.buttonImageIconStyle}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={fetchAdvice}
              style={[styles.button, styles.shadowProp]}
            >
              <Image
                source={require("./src/asset/icons/icon.png")}
                style={styles.buttonImageIconStyle}
              />
              <Text>advice</Text>
            </TouchableOpacity>
          </View>
          <Toast visible={visibleToast} message="copied!" />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    backgroundColor: "#011F4B",
  },
  innerContainer: {
    flexDirection: "column",
    justifyContent: "center",
    // backgroundColor: "#fff",
    padding: 20,
    margin: 10,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: "100%",
    marginVertical: 10,
    // flex: 0.3,
    // backgroundColor: "e0e0e0",
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonContainer: {
    // width: "50%",
    alignContent: "center",
    alignItems: "center",
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
  },
  buttonImageIconStyle: {
    width: 20,
    height: 20,
    marginVertical: 3,
    marginHorizontal: 3,
  },
  copyContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
