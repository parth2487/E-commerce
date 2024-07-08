import React, { useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const OrderScreen = () => {
  const thumbSize = 100;
  const thumbRotation = new Animated.Value(0);
  const navigation = useNavigation();

  useEffect(() => {
    startAnimation();
    const timeout = setTimeout(() => {
      navigation.replace('Main');
    }, 20000); // 20 seconds

    return () => clearTimeout(timeout);
  }, []);

  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(thumbRotation, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(thumbRotation, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.animationContainer}>
        <Animated.View
          style={[
            styles.thumb,
            {
              transform: [
                {
                  rotate: thumbRotation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '180deg'],
                  }),
                },
              ],
            },
          ]}
        >
          <Ionicons name="thumbs-up" size={thumbSize} color="green" />
        </Animated.View>
      </View>
      <Text style={styles.message}>Your order has been shipped!</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  animationContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  thumb: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default OrderScreen;
