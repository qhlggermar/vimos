import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Navigation } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NavigationBarComponent = () => {
  const navigation = useNavigation();

  const navigateToManualInput = () => {
    navigation.navigate('ManualInput');
  };

  return (
    <View style={styles.navigationBar}>
      <TouchableOpacity onPress={navigateToInput}> 
        <Image source={require('../assets/document.png')} style={styles.navButton} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require('../assets/scanner.png')} style={styles.navButton} />
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToManualInput}>
        <Image source={require('../assets/pen.png')} style={styles.navButton} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 10,
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 20, 
  },
  navButton: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});

export default NavigationBarComponent;
