import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { APP_ICONS, dataset } from "../../context/settings";
import { AppContext } from "../../context/AppProvider";

const OptionView = () => {
  const { liked, setLiked } = React.useContext(AppContext);
  return (
    <>
      <View style={styles.OptionView}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "35%"
          }}
        >
          {liked === true ? (
            <TouchableOpacity onPress={() => setLiked(!liked)}>
              {APP_ICONS.LIKED}
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => setLiked(!liked)}>
              {APP_ICONS.OPTIONSHEART}
            </TouchableOpacity>
          )}
          <TouchableOpacity>{APP_ICONS.OPTIONSMESSAGE}</TouchableOpacity>
          <TouchableOpacity>{APP_ICONS.OPTIONSSHARE}</TouchableOpacity>
        </View>
        <TouchableOpacity>{APP_ICONS.OPTIONSBOOKMARK}</TouchableOpacity>
      </View>
    </>
  );
};

export default OptionView;

const styles = StyleSheet.create({
  OptionView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 10,
    marginRight: 10
  }
});
