import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        marginTop: Platform.OS === 'android' ? '13%' : '15%',
        marginBottom: Platform.OS === 'android' ? '13%' : '15%',
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'contain',
        width: 250,
        height: 170,
        // backgroundColor:'red'
    },
    input:{
        width:'90%',
        height: 42,
        backgroundColor: '#f4f3f3',
        marginBottom:20,
        padding: 8,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#e0e0e0'
    },
    forgotContainer:{
        width: '90%',
        alignItems: 'flex-end'
    },
    forgotText:{
        color: '#399fff'
    },
    loginButton:{
        marginTop: '5%',
        backgroundColor: '#399fff',
        width: '90%',
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    textButton:{
        color: '#fff',
        fontSize: 17

    }
});