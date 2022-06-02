import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    menuContainer:{
        position:'absolute',
        width:'100%',
        height:'100%',
        flex:1,
        zIndex: 1,
        paddingVertical: 30,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
    },
    img:{
        width:100,
        height:100,
        resizeMode:'contain'
    },
    menuText:{
        width:'100%',
        fontSize:30,
        fontWeight:'bold',
        color:'#fff',
        textAlign:'left',
        marginBottom:20,
        marginLeft:30
    }
})