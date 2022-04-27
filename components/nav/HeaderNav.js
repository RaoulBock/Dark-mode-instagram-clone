import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { APP_ICONS } from "../../context/settings";

const HeaderNav = () => {
  return (
    <View style={styles.headerGrid}>
      <Text style={styles.text}>{APP_ICONS.LOGO} Gram</Text>
      <View style={styles.headerMenu}>
        <TouchableOpacity>{APP_ICONS.PLUS}</TouchableOpacity>
        <TouchableOpacity>{APP_ICONS.MESSAGE}</TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderNav;

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 28,
    width: 200
  },
  headerGrid: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 10,
    marginRight: 10
  },
  headerMenu: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 80
  }
});
