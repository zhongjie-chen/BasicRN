import React,{
    View,
    Text,
    WebView,
    Picker,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import LoginComponent from './LoginComponent';

class HomeComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  _handlerLogin(e){
    const { navigator } = this.props;

    if(navigator) {
        navigator.push({
            name: 'LoginComponent',
            component: LoginComponent,
            params:{
              id:1
            }
        })
    }
  }
  render() {
    return(
        <View style={styles.container}>
          <TouchableOpacity style={styles.leftView}>
            <Text>左边</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.middleView}>
            <Text>中间</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rightView} onPress={()=>this._handlerLogin()}>
            <Text>登录</Text>
          </TouchableOpacity>
        </View>
    );
  }
}

const basicStyle = {
  height:60,
  alignItems:'center',
  justifyContent:'center',
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    backgroundColor: '#4c51d2',
    ...basicStyle
  },
  leftView: {
    flex:0.2,
    backgroundColor:'red',
    ...basicStyle
  },
  middleView: {
    flex:0.6,
    backgroundColor:'blue',
    ...basicStyle
  },
  rightView: {
    flex:0.2,
    backgroundColor:'yellow',
    ...basicStyle
  },
});

export{ HomeComponent as default };
