import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Main = () => {
  const navigation = useNavigation();
  return (
    <View style ={MyStyle.ViewStyle}>
      <Text style={MyStyle.title}>TRAN PHAM MINH QUANG 2024802010332</Text>
      <TouchableOpacity style={MyStyle.ButtonBg} onPress={() => navigation.push('Project_1')}>
          <Text style={MyStyle.TextStyle}>Project 1. Hello world</Text>
      </TouchableOpacity>
        <TouchableOpacity style={MyStyle.ButtonBg} onPress={() => navigation.push('Project_2')}>
          <Text style={MyStyle.TextStyle}>Project 2. Capturing Taps</Text>
      </TouchableOpacity>
       <TouchableOpacity style={MyStyle.ButtonBg} onPress={() => navigation.push('Project_3')}>
          <Text style={MyStyle.TextStyle}>Project 3. Custom Component</Text>
      </TouchableOpacity>
       <TouchableOpacity style={MyStyle.ButtonBg} onPress={() => navigation.push('Project_4')}>
          <Text style={MyStyle.TextStyle}>Project 4. State & Props</Text>
      </TouchableOpacity>
       <TouchableOpacity style={MyStyle.ButtonBg} onPress={() => navigation.push('Project_5')}>
          <Text style={MyStyle.TextStyle}>Project 5. Styling</Text>
      </TouchableOpacity>
       <TouchableOpacity style={MyStyle.ButtonBg} onPress={() => navigation.push('Project_6')}>
          <Text style={MyStyle.TextStyle}>Project 6. Scrollable Content</Text>
      </TouchableOpacity>
       <TouchableOpacity style={MyStyle.ButtonBg} onPress={() => navigation.push('Project_7')}>
          <Text style={MyStyle.TextStyle}>Project 7. Building a Form</Text>
      </TouchableOpacity>
       <TouchableOpacity style={MyStyle.ButtonBg} onPress={() => navigation.push('Project_8')}>
          <Text style={MyStyle.TextStyle}>Project 8. Long List</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Main

var MyStyle = StyleSheet.create(
    {
        ViewStyle:{
          flex:1,
            justifyContent:'center',
        },
        TextStyle:{
          color:'white',
          // textAlign: 'center',
          // textAlignVertical: 'center', 
        },
        ButtonBg: {
          borderRadius: 10, 
          backgroundColor: '#4793AF',
          marginBottom: 5, 
          top: 30,
          paddingVertical: 12, 
          paddingHorizontal: 25, 
          marginHorizontal: 20,
          borderWidth: 1, 
          borderColor: '#ffffff',
          elevation: 5, 
      },
      
        title: {
          textAlign: 'center',
          position: 'absolute',
          top: '5%',
          left: 0,
          right: 0,
          fontSize: 20,
          fontWeight: 'bold',
          color: 'black',
          backgroundColor: '#FFC470',
          borderRadius: 10,
          padding: 10,
          marginHorizontal: 20
        }

    }
)