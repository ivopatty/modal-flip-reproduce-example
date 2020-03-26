import * as React from 'react'
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import {Text, View, StyleSheet, Button} from 'react-native'
import { useNavigation } from '@react-navigation/native';

const AuthenticationStack = createNativeStackNavigator()

const SignIn = () => {
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <Text>SignIn</Text>
            <Button onPress={() => navigation.navigate('SignUp')} title='Sign Up?' />
        </View>
    )
}

const SignUp = () => {
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <Text>SignUp</Text>
            <Button onPress={() => navigation.navigate('SignIn')} title='Already have an account?' />
        </View>
    )
}

const AuthenticationNavigator = () => (
    <AuthenticationStack.Navigator>
        <AuthenticationStack.Screen name={'SignIn'} component={SignIn} options={{headerShown: false, stackPresentation: "fullScreenModal", stackAnimation: 'flip'}}/>
        <AuthenticationStack.Screen name={'SignUp'} component={SignUp} options={{headerShown: false, stackPresentation: "fullScreenModal", stackAnimation: 'flip'}}/>
    </AuthenticationStack.Navigator>
)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default AuthenticationNavigator