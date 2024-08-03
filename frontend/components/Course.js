import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Course = (props) => {
  ({ courseName } = props);

  return (
    <Link
      href={`courses/${courseName}`}
      className="h-24 mb-4"
    >
      <View className="p-4 flex flex-row items-center justify-between bg-white rounded-lg h-full w-full">
        <View className="flex gap-y-1">
          <Text className="text-lg">{courseName}</Text>
          <Text className="text-slate-950/30">0.5 Credits</Text>
        </View>
        <View className="bg-green-400 h-14 w-14 rounded-lg flex justify-center items-center">
          <Text className="font-bold text-white text-lg">85%</Text>
        </View>
      </View>
    </Link>
  );
};

export default Course;
