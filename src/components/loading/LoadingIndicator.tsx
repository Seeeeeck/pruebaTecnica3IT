import React, {useState} from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';

const LoadingIndicator = () => {
  return (
    <View style={styles.overlay}>
      <ActivityIndicator
        size="large"
        color="#023e7d"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
   backgroundColor:"white",
   opacity:0.5,
    height:"100%",
    flex: 1,
    width:"100%",
    
    display: 'flex',
    flexDirection: 'row',
    justifyContent:"center",
    alignSelf:"center",
    alignItems:"center",
    position: 'absolute',
    zIndex: 9999,
  },
});

export default LoadingIndicator;
