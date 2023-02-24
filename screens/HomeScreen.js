import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React from 'react'
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const HomeScreen = () => {

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log('Signed out')
    }).catch((error) => {
      // An error happened.
      console.log(error)
    });
  }
  return (
    <View>
      <Text>HomeScreen</Text>
      <TouchableOpacity onPress={handleSignOut}>
					<Text>SignOut</Text>
				</TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})