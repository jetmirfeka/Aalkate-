import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-end',
        alignItems:'center'
    },
    img:{
        height: '100%',
        width: '100%',
        position:'absolute'
    },
    wrapper:{
        top:0,
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-end',
        justifyContent:'center',
        width:'100%',
        paddingHorizontal:20,
        paddingVertical:50
    },
    logo:{
        alignSelf:'center',
        width:296,
        height:165,
        marginBottom:80
    },
    privacy:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:5
    },
    checkbox:{
        marginRight:10
    },
    privacyText:{
        color:'#fff'
    },
    termcon:{
        color:'#FF8906'
    }
})