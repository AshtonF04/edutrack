import { useCallback, useRef, useState, useEffect } from "react";
import { Link } from "expo-router";
import {
  Keyboard,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

import Course from "../components/Course";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import AddCourse from "../components/AddCourse";

export default function App() {
  const sheetRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);

  const snapPoints = ["35%", "75%"];

  const openAddCourse = useCallback((index) => {
    sheetRef.current?.snapToIndex(0);
    setIsOpen(true);
  }, []);

  useEffect(() => {
    Keyboard.addListener("keyboardWillShow", () => {
      sheetRef.current?.snapToIndex(1);
    });

    Keyboard.addListener("keyboardWillHide", () => {
      sheetRef.current?.snapToIndex(0);
    });
  }, []);

  courses = true;

  return (
    <GestureHandlerRootView>
      <View className={`bg-[#F1F1F1] flex-1 items-center px-6`}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          className="flex gap-y-8 pt-12"
          contentContainerStyle={{paddingBottom: 75}}
        >
          <View className="flex gap-y-4">
            <Text className="font-bold text-3xl">Dashboard</Text>

            {/* Total GPA Display View */}
            <View className="flex flex-row justify-between px-4 items-center self-center h-24 w-full bg-white rounded-md">
              <View className="flex justify-center items-center">
                <View className="rounded-full bg-green-400 w-10 h-10 flex items-center justify-center">
                  <Text className="text-white font-bold text-xl">#</Text>
                </View>
                <Text className="font-bold text-slate-950/30">Total GPA</Text>
              </View>
              <View className="flex items-center gap-1">
                <Text className="font-bold text-2xl">3.5</Text>
                <Text className="text-slate-950/30">5.0 Credits</Text>
              </View>
            </View>
          </View>

          {/* Courses Display Area */}
          <View className="flex flex-row items-center justify-between">
            <Text className="font-bold text-3xl">Courses</Text>
            <Pressable
              onPress={() => openAddCourse()}
              className="rounded-full bg-green-400 w-8 h-8 flex items-center justify-center"
            >
              <Text className="text-white font-bold text-lg">+</Text>
            </Pressable>
          </View>

          {!courses && (
            <View className="flex justify-between bg-white self-center w-72 h-48 rounded-lg p-4">
              <View className="flex gap-y-3">
                <Text className="font-bold">No courses.</Text>
                <Text>
                  Looks pretty empty...{"\n"}Why don't you add a course.
                </Text>
              </View>

              <Pressable
                onPress={() => openAddCourse()}
                className="self-center bg-green-400 rounded-md h-10 w-32 flex items-center justify-center"
              >
                <Text className="font-bold text-white">Add Course</Text>
              </Pressable>
            </View>
          )}

          {courses && (
            <View className="flex flex-col">
              <Course courseName="COMPSCI 2033A" />
              <Course courseName="WRITING 2101G" />
            </View>
          )}
        </ScrollView>
      </View>

      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        index={-1}
        enablePanDownToClose={true}
        onClose={() => setIsOpen(false)}
        enableContentPanningGesture={false}
      >
        <BottomSheetView>
          <AddCourse />
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}
