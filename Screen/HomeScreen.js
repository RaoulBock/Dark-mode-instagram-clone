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
import BottomNav from "../components/nav/BottomNav";
import HeaderNav from "../components/nav/HeaderNav";

import { StatusDataset } from "../context/settings";
import { styleProps } from "react-native-web/dist/cjs/modules/forwardedProps";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.body}>
        <View style={styles.view1}>
          <HeaderNav />
        </View>
        <View style={styles.view2}>
          <View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.statusView}
            >
              <TouchableOpacity style={{ marginLeft: 1 }}>
                <Image
                  source={{
                    uri: "https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg"
                  }}
                  style={styles.statusImage}
                />
                <Text style={styles.text}>Your status</Text>
              </TouchableOpacity>
              {StatusDataset.map((Status) => (
                <TouchableOpacity style={styles.statusView}>
                  <Image
                    source={{ uri: Status.image }}
                    style={styles.statusImage}
                    key={Status.id}
                  />
                  <Text style={styles.text} key={Status.id}>
                    {Status.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
        <View style={styles.view3}>
          <BottomNav />
        </View>
      </View>
    </SafeAreaView>
  );
};

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
    backgroundColor: "#000"
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
    fontWeight: "200",
    fontSize: 10,
    marginTop: 10
  },
  statusView: {
    marginLeft: 10
  },
  statusImage: {
    width: 50,
    height: 50,
    borderRadius: 50
  }
});
export default HomeScreen;
