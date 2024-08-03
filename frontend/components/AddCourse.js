import { View, Text, Pressable } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";
import { BottomSheetTextInput } from "@gorhom/bottom-sheet";

const AddCourse = () => {
  return (
    <View className="flex px-9 py-3">
      <Text className="font-bold text-2xl">New Course</Text>
      <TextInput
        className="self-center mt-8 bg-slate-100 rounded-md h-8 w-80 px-2"
        placeholder="Name"
      ></TextInput>
      <TextInput
        className="self-center mt-4 bg-slate-100 rounded-md h-8 w-80 px-2"
        placeholder="Credits"
      ></TextInput>
      <Pressable
        className="self-center mt-8 bg-green-400 rounded-md h-10 w-32 flex items-center justify-center"
      >
        <Text className="font-bold text-white">ADD</Text>
      </Pressable>
    </View>
  );
};

export default AddCourse;
