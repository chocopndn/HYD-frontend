import { StatusBar } from "expo-status-bar";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { Link } from "expo-router";
import { Image } from "react-native";

import images from "../constants/images";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Link href="./(auth)/signin" asChild>
        <Pressable>
          <View className="flex-1 items-center">
            <View className="flex-1 items-center justify-center">
              <Image source={images.logo} className="h-40 w-40" />
              <Text className="text-center font-ibold text-3xl">HYD</Text>
              <Text className="text-center text-2xl font-iregular">
                How's Your Day?
              </Text>
            </View>
            <View className="mb-20">
              <Text className="text-center text-2xl font-iregular">
                YOU MATTER
              </Text>
            </View>
          </View>
        </Pressable>
      </Link>
      <StatusBar style="auto" />
    </View>
  );
}
