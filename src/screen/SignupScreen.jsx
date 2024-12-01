import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';
import { useNavigation } from '@react-navigation/native';
const SignupScreen = () => {
    const navigation = useNavigation();
    const [secureEntry, setSecureEntry] = useState(true);
    const handleGoBack = () => {
        navigation.goBack();
    };
    const handleSignup = () => {
        navigation.navigate("SignUp");
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoBack}>
                <Ionicons name={'arrow-back-outline'} size={25} color={colors.primary} />
            </TouchableOpacity>
            <View style={styles.textContainer}>
                <Text style={styles.headingText}>Let's get</Text>
                <Text style={styles.headingText}>Started</Text>
            </View>
            {/* form */}
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Ionicons name='mail-outline' size={30} color={colors.secondary} />
                    <TextInput style={styles.TextInput} placeholder='Enter your Email' placeholderTextColor={colors.secondary} keyboardType='email-address ' />
                </View>
                <View style={styles.inputContainer}>
                    <Ionicons name='lock-closed-outline' size={30} color={colors.secondary} />
                    <TextInput style={styles.TextInput} placeholder='Enter your Password' placeholderTextColor={colors.secondary} secureTextEntry={secureEntry} />
                    <TouchableOpacity onPress={() => {
                        setSecureEntry((prev) => !prev);
                    }}>
                        <Ionicons name='eye-outline' size={30} color={colors.secondary} />
                    </TouchableOpacity>
                </View>
                <View style={styles.inputContainer}>
                    <Ionicons
                        name={"phone-portrait-outline"}
                        size={30}
                        color={colors.secondary}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter your phone no"
                        placeholderTextColor={colors.secondary}
                        secureTextEntry={secureEntry}
                        keyboardType="phone-pad"
                    />
                </View>
                <TouchableOpacity style={styles.loginButtonWrapper}>
                    <Text style={styles.loginText}>SIGN-UP</Text>
                </TouchableOpacity>
                
            </View>

        </View>
    )
}

export default SignupScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        padding: 20,
    },
    backButtonWrapper: {
        height: 40,
        width: 40,
        backgroundColor: colors.gray,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        marginVertical: 20,
    },
    headingText: {
        fontSize: 32,
        color: colors.primary,
        fontFamily: fonts.SemiBold,
    },
    formContainer: {
        marginTop: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.secondary,
        borderRadius: 100,
        paddingHorizontal: 20,
        padding: 2,
        marginVertical: 10,
    },
    TextInput: {
        flex: 1,
        paddingHorizontal: 10,
        fontFamily: fonts.Light,
    },
    forgotPasswordText: {
        textAlign: "right",
        color: colors.primary,
        fontFamily: fonts.SemiBold,
        marginVertical: 10,
    },
    loginButtonWrapper: {
        backgroundColor: colors.primary,
        borderRadius: 100,
        marginTop: 20,
    },
    loginText: {
        color: colors.white,
        fontSize: 20,
        fontFamily: fonts.SemiBold,
        textAlign: "center",
        padding: 10,

    },
    footerContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
        gap: 5,
    },
    accountText: {
        color: colors.primary,
        fontFamily: fonts.Regular,
    },
    signupText: {
        color: colors.primary,
        fontFamily: fonts.Bold,
    },
})