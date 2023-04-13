import { StyleSheet, View } from "react-native";
import MainApp from "./src/components/MainApp";

import { useState } from "react";
import nextId from "react-id-generator";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <MainApp />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  }
});
