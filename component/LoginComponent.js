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

const REUQST_URL = 'http://test.zzzxyy.ucmed.cn/api/exec/1.htm';
const APP_KEY = 'ZW5sNWVWOWhibVJ5YjJsaw==';
const CLIENT_ID  = 1;

class LoginComponent extends React.Component {


    toQueryString(obj) {
        return obj ? Object.keys(obj).sort().map(function (key) {
            var val = obj[key];
            if (Array.isArray(val)) {
                return val.sort().map(function (val2) {
                    return encodeURIComponent(key) + '=' + encodeURIComponent(val2);
                }).join('&');
            }

            return encodeURIComponent(key) + '=' + encodeURIComponent(val);
        }).join('&') : '';
    }
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
    // fetch("http://xx.xx.xx.xx/login.do?srt=2", {
    //     method : 'POST',
    //     body : JSON.stringify({
    //         SLoginCode : this.state.userName,
    //         SPasswd : this.state.userPwd,
    //         randCode : this.state.vertifyCode,
    //         m : 'login',
    //         language : 'cn',
    //         srt : '2'
    //     }),
    //     headers : {
    //         'Accept' : 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;',
    //         'Content-Type' : 'text/plain;charset=UTF-8',
    //         'User-Agent' : 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.89 Safari/537.36',
    //         'Host' : 'domain.xx.com',
    //     }
    // })
    // .then((response) => {
    //     console.log(response);
    // })
    // .catch((error) => {
    //     console.warn(error);
    // })
    // .done();
    _handlerLogin(){

      console.log('login...');

      fetch(REUQST_URL, {
      method: 'POST',
      headers: {
        'K': APP_KEY
      },
      body: JSON.stringify({
        requestData:JSON.stringify({
          'D': 'DDDDD',
          'V':'1.0.0',
          'TX': 'U001003',
          'T': '0',
          'login_name': '13732208887',
          'password':'123456',
          'type':'2'
        })
      })
    })
      .then(response => response.json())
      .then(responseData => {
        console.log(JSON.stringify(responseData));
      })
      .done();
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
                      onPress = {()=>this._handlerLogin()}
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
/**
<script type="text/javascript">
	function sendmsg() {
		var requestData = $('#textarea1').val();
		$.ajax({
			url : "/api/exec/1.htm",
			data : {
				requestData : requestData
			},
			type : "POST",
			beforeSend : function(xhr) {
				xhr.setRequestHeader('K', 'ZW5sNWVWOWhibVJ5YjJsaw==');
			},
			success : function(data) {
				var result = JSON.stringify(data);
				$('#textarea2').val(result);
			}
		});
	}
</script>**/
export { LoginComponent as default}
