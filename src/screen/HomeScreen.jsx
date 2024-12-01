import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../utils/colors'
import { fonts } from '../utils/fonts'
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();
    const handleLogin = () => {
        navigation.navigate('Login');
    }
    const handleSignUp = () => {
        navigation.navigate('SignUp');
    }
    return (
        <View style={styles.container}>

            <Image source={require('../assets/newman.png')} style={styles.bannerImage} />
            <Text style={styles.title}>Nagrik aur Samvidhan</Text>
            <Text style={styles.subtitle}>Gaming Your Way to Constitutional Wisdom!</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.loginButtonWrapper, { backgroundColor: colors.primary }]} onPress={handleLogin}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.loginButtonWrapper]} onPress={handleSignUp} >
                    <Text style={styles.signUpButtonText}>Sign-Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',

    },
    bannerImage: {
        height: 200,
        width: 200,
        marginTop: 60,
    },
    title: {
        fontSize: 30,
        fontFamily: fonts.SemiBold,
        paddingHorizontal: 20,
        textAlign: 'center',
        color: colors.primary,
        marginTop: 1,
    },
    subtitle: {
        fontSize: 16,
        fontFamily: fonts.Medium,
        paddingHorizontal: 20,
        textAlign: 'center',
        color: colors.secondary,
        marginVertical: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 20,
        borderWidth: 2,
        borderColor: colors.primary,
        width: '80%',
        height: 60,
        borderRadius: 100,
    },
    loginButtonWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        padding: 10,
        borderRadius: 98,
    },
    loginButtonText: {
        color: colors.white,
        fontSize: 18,
        fontFamily: fonts.SemiBold,

    },
    signUpButtonText: {
        fontSize: 18,
        fontFamily: fonts.SemiBold,
    },
})