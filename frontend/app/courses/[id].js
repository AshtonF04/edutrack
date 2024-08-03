import { View, Text, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useLocalSearchParams } from "expo-router";

const CoursePage = (props) => {
  const { id } = useLocalSearchParams();

  return (
    <View className="bg-[#F1F1F1] flex-1 px-4">
      <SafeAreaView className="">

        {/* No assignments view */}
        <View className="flex items-center justify-center absolute h-screen w-full">
          <Text className="mb-1 font-bold">No Assignments Found</Text>
          <Text>Add your first assignment to get started</Text>
          <Pressable className="mt-6 bg-[#E7E7E7] w-48 h-10 rounded-md justify-center items-center">
            <Text className="font-bold text-[#1DCF6F]">Add Assignment</Text>
          </Pressable>
        </View>

        {/* Link to return to course page */}
        <Link className="text-[#1DCF6F] text-lg" href="/">
          <Text>{"< Courses"}</Text>
        </Link>

        {/* Text displaying course name */}
        <View className="flex flex-row justify-center mt-4">
          <Text className="font-bold text-lg">{id}</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default CoursePage;
