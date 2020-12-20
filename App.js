import 'react-native-gesture-handler';
import * as React from 'react';
// import React,{useState} from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { Text, View, StyleSheet, Button, TouchableOpacity, handlePress } from 'react-native';
// import { useState } from 'react';

// export default function App() {
//   return (
//     <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
//   );
// }

export default function App() {
  let [k, setK]= useState();
  let [x, setX]= useState();
  let [y, setY]= useState();
  let [e, setE]= useState();
  let sum = () => {
    if(k) equ()
    if(!x) setX(x=e)
    if(x) setK(k='+')
  };
  let diff = () => {
    if(k) equ()
    if(!x) setX(x=e)
    if(x) setK(k='-')
  };
  let mul = () => {
    if(k) equ()
    if(!x) setX(x=e)
    if(x) setK(k='*')
  };
  let div = () => {
    if(k) equ()
    if(!x) setX(x=e)
    if(x) setK(k='/')
  };
  let equ = () => {
    if (k==='+'){
      setE(e=x+y)
    }
    if (k==='-'){
      setE(e=x-y)
    }
    if (k==='*'){
      setE(e=x*y)
    }
    if (k==='/'){
      setE(e=x/y)
    }
    setK(k='')
    setX(x='')
    setY(y='')
  };
  
  
  let one = () => {
    if(!k){
      if(!x)
      setX(x=1)
      else{
        setX(x=x*10)
        setX(x=x+1)
      }
    }
    else if(k){
      if(!y)
      setY(y=1)
      else{
        setY(y=y*10)
        setY(y=y+1)
      }
    }
  };
  let two = () => {
    if(!k){
      if(!x)
      setX(x=2)
      else{
        setX(x=x*10)
        setX(x=x+2)
      }
    }
    else if(k){
      if(!y)
      setY(y=2)
      else{
        setY(y=y*10)
        setY(y=y+2)
      }
    }
  };
  let three = () => {
    if(!k){
      if(!x)
      setX(x=3)
      else{
        setX(x=x*10)
        setX(x=x+3)
      }
    }
    else if(k){
      if(!y)
      setY(y=3)
      else{
        setY(y=y*10)
        setY(y=y+3)
      }
    }
  };
  let four = () => {
    if(!k){
      if(!x)
      setX(x=4)
      else{
        setX(x=x*10)
        setX(x=x+4)
      }
    }
    else if(k){
      if(!y)
      setY(y=4)
      else{
        setY(y=y*10)
        setY(y=y+4)
      }
    }
  };
  let five = () => {
    if(!k){
      if(!x)
      setX(x=5)
      else{
        setX(x=x*10)
        setX(x=x+5)
      }
    }
    else if(k){
      if(!y)
      setY(y=5)
      else{
        setY(y=y*10)
        setY(y=y+5)
      }
    }
  };
  let six = () => {
    if(!k){
      if(!x)
      setX(x=6)
      else{
        setX(x=x*10)
        setX(x=x+6)
      }
    }
    else if(k){
      if(!y)
      setY(y=6)
      else{
        setY(y=y*10)
        setY(y=y+6)
      }
    }
  };
  let seven = () => {
    if(!k){
      if(!x)
      setX(x=7)
      else{
        setX(x=x*10)
        setX(x=x+7)
      }
    }
    else if(k){
      if(!y)
      setY(y=7)
      else{
        setY(y=y*10)
        setY(y=y+7)
      }
    }
  };
  
  let eight = () => {
    if(!k){
      if(!x)
      setX(x=8)
      else{
        setX(x=x*10)
        setX(x=x+8)
      }
    }
    else if(k){
      if(!y)
      setY(y=8)
      else{
        setY(y=y*10)
        setY(y=y+8)
      }
    }
  };
  let nine = () => {
    if(!k){
      if(!x)
      setX(x=9)
      else{
        setX(x=x*10)
        setX(x=x+9)
      }
    }
    else if(k){
      if(!y)
      setY(y=9)
      else{
        setY(y=y*10)
        setY(y=y+9)
      }
    }
  };
  let zero = () => {
    if(!k){
      if(x)
      setX(x=x*10)
    }
    else if(k){
      if(y)
      setY(y=y*10)
    }
  };
  let clear = () => {
    setK(k='')
    setX(x='')
    setY(y='')
    setE(e='')
  };
  return (
  // <NavigationContainer>
    <View style={styles.container}>
      <View style={styles.roll}>
        <Text style={styles.rolltext}>ZAKS</Text>
        <Text style={styles.rolltext}>SP18-BCS-016</Text>
      </View>
      <View style={styles.result}>
        <Text style={styles.tex}> {x} </Text>
        <Text style={styles.tex}> {k} </Text>
        <Text style={styles.tex}> {y} </Text>
        <Text style={styles.tex}> = </Text>
        <Text style={styles.tex}> {e} </Text>
      </View>

      <View style={styles.equation}>
        <TouchableOpacity style={styles.button} onPress={one}><Text>1</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={two}><Text>2</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={three}><Text>3</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={sum}><Text>+</Text></TouchableOpacity>
      </View>
      
      <View style={styles.equation}>
        <TouchableOpacity style={styles.button} onPress={four}><Text>4</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={five}><Text>5</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={six}><Text>6</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={diff}><Text>-</Text></TouchableOpacity>
      </View>
      
      <View style={styles.equation}>
        <TouchableOpacity style={styles.button} onPress={seven}><Text>7</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={eight}><Text>8</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={nine}><Text>9</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={mul}><Text>*</Text></TouchableOpacity>
      </View>
      
      <View style={styles.equation}>
        <TouchableOpacity style={styles.button} onPress={clear}><Text>CLR</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={zero}><Text>0</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={div}><Text>/</Text></TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={equ}><Text>=</Text></TouchableOpacity>
    </View>
  // </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'darkblue',
    padding: 3,
    justifyContent: 'center',
    // paddingTop: 300,
  },
  equation:{
    padding:3,
    // paddingHorizontal:91,
    justifyContent: 'center',
    flexDirection: 'row',
    color: 'white',
  },
  result:{
    borderRadius: 50,
    // borderWidth: 3,
    // borderStyle:'solid',
    // borderColor:'black',
    backgroundColor: 'green',
    padding:3,
    // paddingHorizontal:111,
    justifyContent: 'center',
    flexDirection: 'row',
    color: 'white',
  },
  button:{
    backgroundColor:"blue",
    borderRadius: 50,
    borderWidth: 3,
    borderStyle:'solid',
    justifyContent: 'center',
    alignItems:'center',
    // borderColor: 'green',
    padding: 11,
  },
  tex:{
    padding:3,
    color:'cyan',
    justifyContent: 'center',
    alignItems:'center',
  },
  roll:{
    fontSize:111,
    color:'yellow',
    justifyContent: 'center',
    alignItems:'center',
  },
  rolltext:{
    fontSize:21,
    color:'yellow',
  }
});