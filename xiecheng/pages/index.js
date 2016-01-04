var React = require('react-native');
var Swiper = require('react-native-swiper');

var{
   StyleSheet,
   Text,
   View,
   Image,
   TouchableHighlight,
   ScrollView,
} = React;

var sliderImgs = [
    'http://images3.c-ctrip.com/SBU/apph5/201505/16/app_home_ad16_640_128.png',
    'http://images3.c-ctrip.com/rk/apph5/C1/201505/app_home_ad49_640_128.png',
    'http://images3.c-ctrip.com/rk/apph5/D1/201506/app_home_ad05_640_128.jpg'
];

var Slider = React.createClass(
{
   render:function(){
       return (
       <Swiper style = {styles.wrapper} showsButton = {false} autoplay = {true} height = {150} marginTop = {80} showsPagination = {false}>
          <Image style={[styles.slide,]} source={{uri: sliderImgs[0]}}></Image>
        <Image style={[styles.slide,]} source={{uri: sliderImgs[1]}}></Image>
        <Image style={[styles.slide,]} source={{uri: sliderImgs[2]}}></Image>
       </Swiper>
       );
   }
}

);

var index = React.createClass({
   render:function(){
   	return (
         <Slider></Slider>
   		);
   }
});


var styles = StyleSheet.create({
//container
container:{
    backgroundColor:'#F2F2F2',
    flex:1,
},
//slider
wrapper: {
   // marginTop:64,
    height:80,
},
slide: {
    height:80,
    resizeMode: Image.resizeMode.contain,
},
//sbu
sbu_view:{
    height:84,
    marginLeft: 5,
    marginRight:5,
    borderWidth:1,
    borderRadius:5,
    marginBottom:10,
    flexDirection:'row',
},
sbu_red:{
    backgroundColor: '#FA6778',
    borderColor:'#FA6778',
    marginTop:-70,
},

sbu_blue:{
    backgroundColor: '#3D98FF',
    borderColor:'#3D98FF',
},

sbu_green:{
    backgroundColor: '#5EBE00',
    borderColor:'#5EBE00',
},

sbu_yellow:{
    backgroundColor: '#FC9720',
    borderColor:'#FC9720',
},
sbu_flex:{
    flex:1,
},
sbu_borderRight:{
    borderColor:'#fff',
    borderRightWidth: 0.5,
},
sbu_icon_img:{
    height:40,
    width:40,
    resizeMode:Image.resizeMode.contain,
},
sub_con_flex:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
},
sub_text:{
    justifyContent:'center',
},
font16:{
    fontSize:17,
    color:'#FFF',
    fontWeight:'900',
},
sbu_borderBottom:{
    borderBottomWidth:0.5,
    borderBottomColor:'#fff',
},
img_view:{
    height:62,
    marginLeft:5,
    marginRight:5,
    flexDirection: 'row',
    marginBottom:20,
    backgroundColor:'#fff',
},
img_flex:{
    flex:1,
    borderWidth:1,
    borderColor:'#ccc',
},
img_wh: {
    height:59,
    borderRightWidth:0,
    resizeMode:Image.resizeMode.contain,
}
});
module.exports = index;


