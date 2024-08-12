import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context'

const index = () => {
  return (
    <View className="bg-[#F1F1F1] h-screen flex justify-center">
        <View className="mt-4 flex items-center">
            <Text className="text-center text-xl font-bold">Login</Text>
            <TextInput className="bg-white w-72 h-7 rounded-md mt-4 p-1" placeholder='Email'></TextInput>
            <TextInput className="bg-white w-72 h-7 rounded-md mt-4 p-1" placeholder='Password'></TextInput>
            <Link href="/dashboard" className='mt-10 text-blue-400'>No account? Signup instead.</Link>
        </View>
    </View>
  )
}

export default index