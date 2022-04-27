import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import React from "react";
import { APP_ICONS } from "../../context/settings";

const SearchInput = () => {
  return (
    <View style={styles.SearchInput}>
      <Text style={{ marginLeft: 10 }}>{APP_ICONS.SEARCH}</Text>
      <TextInput
        placeholder="Search"
        style={{ paddingLeft: 10, padding: 4, color: "white", width: "100%" }}
        placeholderTextColor="#fff"
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  SearchInput: {
    backgroundColor: "#333",
    alignItems: "stretch",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center"
  }
});
