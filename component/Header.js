'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Navigator,
  View
} from 'react-native';
import Icons from '../asset/Icons';

class Header extends Component {

  constructor(props) {
    super(props);

  }
  handlerLeftImageClick(e){
    this.props.doBack();
  }
  render() {
    let {leftIcon,titleName} = this.props.headerModel;
    return(
      <View style={style.container}>
      <TouchableOpacity style={{flex:0.2,}} onPress = {this.handlerLeftImageClick.bind(this)}>
        <View >
          <Image source={{uri:leftIcon}}  style={{width:30,height:30}}  />
        </View>
        </TouchableOpacity>
        <Text style={[style.text,{flex:0.6}]}>{titleName}</Text>
        <Text style={[style.text,{flex:0.2}]}></Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor: '#4c51d2',
    height:60,
    padding:10,
  },
  text:{
    fontSize:20,
    textAlign:'center',
    color:'white',
    //backgroundColor:'red',
  }
});

export{ Header as default };
