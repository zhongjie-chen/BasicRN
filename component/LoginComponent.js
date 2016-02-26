import React, {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableHighlight,
    Switch,
    StyleSheet,
} from 'react-native';

import FirstPageComponent from './firstPageComponent';
import Header from './Header';
import Icons from '../asset/Icons';
class LoginComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    _pressButton() {
        const { navigator,id } = this.props;
        console.log(id);
        if(navigator) {
            //很熟悉吧，入栈出栈~ 把当前的页面pop掉，这里就返回到了上一个页面:FirstPageComponent了
            navigator.pop();
        }
    }

    render() {
      return (
              <View>
                    <Header doBack = {this._pressButton.bind(this)} headerModel = {{'leftIcon':Icons.home,'titleName':'登录'}}/>
                    <View style={{borderWidth:StyleSheet.hairlineWidth,borderColor:'#c9c9c9',margin:10,marginBottom:0,borderBottomWidth:0,}}>
                      <TextInput
                        style={{height: 48, fontSize:18, backgroundColor:null }}
                        onChangeText={(text) => this.setState({userName:text})}
                        value={this.state.userName}
                        keyboardType  = 'numeric'
                        placeholder = {'账号（注册的手机号）'}
                      />
                    </View>
                    <View style={{borderWidth:StyleSheet.hairlineWidth,borderColor:'#c9c9c9',margin:10,marginTop:0}}>
                      <TextInput
                        style={{height: 48, fontSize:18, backgroundColor:null }}
                        onChangeText={(text) => this.setState({password:text})}
                        value={this.state.password}
                        secureTextEntry  = {true}
                        placeholder = {'密码'}
                      />
                    </View>

                    <View style={{flexDirection:'row',alignItems:'center'}}>
                      <Text style = {{marginLeft:10,color:this.state.isAutoLogin?'green':undefined}}>自动登录</Text>
                      <Switch style={{marginRight:10}}  onValueChange={(value) => this.setState({isAutoLogin: value})}
                       value= {this.state.isAutoLogin} />
                      <Text style = {{marginLeft:10,color:this.state.isRememberPassword?'green':undefined}} >记住密码</Text>
                      <Switch style={{marginRight:10}}  onValueChange={(value) => this.setState({isRememberPassword: value})}
                        value= {this.state.isRememberPassword} />
                    </View>
                    <TouchableHighlight style={{justifyContent :'center',margin:10,height:48,backgroundColor:'#f39d2e'}} activeOpacity = {0.5}
                      underlayColor={'#d27f11'}
                    >
                      <Text style={{textAlign:'center',color:'white',fontSize:20}}>
                        登录
                      </Text>
                    </TouchableHighlight>

                    <Text style={{marginRight:10,textAlign:'right',color:'blue',fontSize:16}}>
                      忘记密码
                    </Text>
              </View>
      );
    }
}

export { LoginComponent as default}
