import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import SearchInput from "../components/Input/SearchInput";
import HeaderNav from "../components/nav/HeaderNav";
import BottomNav from "../components/nav/BottomNav";

const SearchScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.body}>
        <View style={styles.view1}>
          <SearchInput />
        </View>
        <View style={styles.view2}>
          <Text style={styles.text}>2</Text>
        </View>
        <View style={styles.view3}>
          <BottomNav />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  body: {
    height: "100%",
    alignItems: "stretch",
    justifyContent: "center"
  },
  view1: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "stretch",
    justifyContent: "center"
  },
  view2: {
    flex: 10,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center"
  },
  view3: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 0.3,
    borderColor: "#eee"
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18
  }
});
