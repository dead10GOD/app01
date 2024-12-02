import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const WelcomeScreen = ({ navigation }) => {
  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      {/* Top Image */}
      <Image source={require('../assets/newman.png')} style={styles.image} />

      {/* Translucent Box */}
      <View style={styles.translucentBox}>
        <Text style={styles.heading}>Welcome</Text>

        {/* Buttons */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleNavigation('Games')}
        >
          <Text style={styles.buttonText}>Games</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleNavigation('Forums')}
        >
          <Text style={styles.buttonText}>Forums</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleNavigation('The Constitution')}
        >
          <Text style={styles.buttonText}>The Constitution</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleNavigation('Your Account')}
        >
          <Text style={styles.buttonText}>Your Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Light background
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginVertical: 20,
  },
  translucentBox: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Translucent black background
    width: '90%',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    elevation: 8,
  },
  heading: {
    fontSize: 28,
    color: '#fff', // White text
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50', // Green button
    width: '80%',
    borderRadius: 30,
    paddingVertical: 12,
    marginVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: '#fff', // White text
    fontSize: 18,
    fontWeight: '600',
  },
});
