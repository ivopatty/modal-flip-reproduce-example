import * as React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import {Text, View, StyleSheet, Button} from 'react-native'
import AuthenticationNavigator from './AuthenticationNavigator';
import { useNavigation } from '@react-navigation/native';

const HomeStack = createNativeStackNavigator()

const WelcomeScreen = () => {
    const {navigate} = useNavigation()
    return(
        <View style={styles.container}>
            <Text>Hello</Text>
            <Button title={'Sign In'} onPress={() => navigate('Auth', {screen: 'SignIn'})}/>
            <Button title={'Sign Up'} onPress={() => navigate('Auth', {screen: 'SignUp'})}/>
        </View>
    )
}

const HomeNavigator = () => (
    <HomeStack.Navigator screenOptions={{stackAnimation: "fade"}}>
        <HomeStack.Screen name={'Welcome'} component={WelcomeScreen} />
        <HomeStack.Screen name={'Auth'} component={AuthenticationNavigator} options={{headerShown: false, stackPresentation: "modal"}}/>
    </HomeStack.Navigator>
)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default HomeNavigator