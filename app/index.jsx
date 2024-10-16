import { StatusBar } from "expo-status-bar";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Link href="./(auth)/signin" asChild>
        <Pressable>
          <Text className="text-center">Logo</Text>
          <Text className="text-center">HYD</Text>
          <Text className="text-center">How's Your Day?</Text>
          <View className="mt-3">
            <Text className="text-center">YOU MATTER</Text>
          </View>
        </Pressable>
      </Link>
      <StatusBar style="auto" />
    </View>
  );
}
