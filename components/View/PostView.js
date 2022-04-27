import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";
import React from "react";
import { APP_ICONS } from "../../context/settings";

const PostView = ({ Post, idx }) => {
  return (
    <>
      <View>
        <View style={styles.PostViewHeader}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: 10,
              marginRight: 10
            }}
          >
            <Image
              source={{ uri: Post.profilePicture }}
              style={styles.PostImageProfilepicture}
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
        <View style={styles.PostViewPosts}>
          <Image
            source={{ uri: Post.userPost }}
            key={idx}
            style={styles.PostImagePosts}
          />
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
  PostImageProfilepicture: {
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
  },
  PostImagePosts: {
    width: "100%",
    height: "100%",
    marginTop: 10
  },
  PostViewPosts: {
    width: "100%",
    height: 400
  }
});
