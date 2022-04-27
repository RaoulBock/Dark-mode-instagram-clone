import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";
import React from "react";

const StatusView = ({ Status }) => {
  return (
    <TouchableOpacity style={styles.statusView}>
      <Image
        source={{ uri: Status.profilePicture }}
        style={styles.statusImage}
      />
      <Text style={styles.text}>{Status.name.substring(0, 10)} ...</Text>
    </TouchableOpacity>
  );
};

export default StatusView;

const styles = StyleSheet.create({
  statusView: {
    marginLeft: 10
  },
  statusImage: {
    width: 50,
    height: 50,
    borderRadius: 50
  },
  text: {
    color: "white",
    fontWeight: "200",
    fontSize: 10,
    marginTop: 10
  }
});
