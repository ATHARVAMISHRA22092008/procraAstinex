import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Card } from "react-native-elements";
import MyHeader from "../components/MyHeader";
import db from "../config";
import firebase from "firebase";
import { RFValue } from "react-native-responsive-fontsize";
export default class HomeScreen extends React.Component{
    render(){
        return(
            <View>
                <Text>Bienvenido al lobby del hotel procrastinex</Text>
            </View>
        )
}
} 