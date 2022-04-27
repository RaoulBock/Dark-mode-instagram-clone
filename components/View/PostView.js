import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { APP_ICONS } from "../../context/settings";

const PostView = ({ Post, idx }) => {
  return (
    <>
      <View style={{ marginLeft: 10, marginRight: 10 }}>
        <View style={styles.PostViewHeader}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Image
              source={{ uri: Post.profilePicture }}
              style={styles.PostImage}
            />
            <Text style={styles.text}>{Post.name}</Text>
          </View>
          <TouchableOpacity
            style={styles.verticalIcons}
            onPress={() => console.log(Post.id)}
          >
            {APP_ICONS.VIRTICALDOTS}
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default PostView;

const styles = StyleSheet.create({
  PostViewHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  PostImage: {
    width: 30,
    height: 30,
    marginTop: 18,
    borderRadius: 50
  },
  text: {
    color: "white",
    marginTop: 18,
    marginLeft: 10
  },
  verticalIcons: {
    marginTop: 18
  }
});
