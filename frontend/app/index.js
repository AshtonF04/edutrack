import { View, Text } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react';
import { initializeApp } from '@firebase/app';
import { SafeAreaView } from 'react-native-safe-area-context'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from '@firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD_FEcmTpO9deMVra57bkfuvgTr96VdmpU",
  authDomain: "edutrack-607f2.firebaseapp.com",
  projectId: "edutrack-607f2",
  storageBucket: "edutrack-607f2.appspot.com",
  messagingSenderId: "301111660851",
  appId: "1:301111660851:web:e56ea2289126f834152e46",
  measurementId: "G-D0PEPV2WDW"
};

const firebaseApp = initializeApp(firebaseConfig)

const index = () => {
  return (
    <View>
        <SafeAreaView>
            <Text>Login</Text>
        </SafeAreaView>
    </View>
  )
}

export default index