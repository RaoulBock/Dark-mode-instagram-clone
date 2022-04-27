import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";
import React from "react";
import { APP_ICONS, dataset } from "../../context/settings";
import OptionView from "./OptionView";
import DoubleClick from "react-native-double-tap";

const PostView = ({ Post, idx }) => {
  const [texts, setTexts] = React.useState(Post.caption.substring(0, 100));
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
        <View style={styles.PostViewPosts} onPress={() => console.log("liked")}>
          <DoubleClick
            doubleTap={() => {
              console.log("double tap", Post.id);
            }}
            delay={200}
          >
            <Image
              source={{ uri: Post.userPost }}
              key={idx}
              style={styles.PostImagePosts}
              resizeMode="cover"
            />
          </DoubleClick>
        </View>
        <View style={{ marginTop: 35 }}>
          <OptionView />
        </View>
        <View>
          <Text style={styles.Liketext}>{Post.userPostLike} Likes</Text>
        </View>
        <View>
          <Text style={styles.nameText}>{Post.name}</Text>
          {Post.caption.length > 50 ? (
            <Text style={styles.CoptionText}>
              {texts} ...
              <Text
                style={styles.moreText}
                onPress={() => {
                  setTexts(Post.caption.substring(0, 10000000));
                }}
              >
                <Text> more</Text>
              </Text>
            </Text>
          ) : (
            <Text style={styles.CoptionText}>{texts}</Text>
          )}
        </View>
        <View style={styles.commentSection}>
          <TouchableOpacity>
            <Text>View all comments</Text>
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
  },
  Liketext: {
    color: "white",
    marginLeft: 10,
    fontWeight: "bold",
    marginTop: 10
  },
  CoptionText: {
    color: "white",
    marginLeft: 10
  },
  moreText: {
    color: "#eee"
  },
  nameText: {
    color: "white",
    fontWeight: "bold",
    marginLeft: 10
  }
});
