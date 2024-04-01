import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { useState } from "react";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView
      className="flex-1"
      style={{
        backgroundColor: COLORS.lightWhite,
        flex: 1,
      }}
    >
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },
          // NOTE: remove the shadow line on header
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              handlePress={() => {}}
              iconUrl={icons.menu}
              dimension={"60%"}
            />
          ),
          // NOTE: remove the "index" center
          headerTitle: "",
          headerRight: () => (
            <ScreenHeaderBtn
              handlePress={() => {}}
              iconUrl={images.profile}
              dimension={"60%"}
            />
          ),
        }}
      />
      {/* NOTE: user dont need to know can scroll */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome />

          <Popularjobs />

          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
