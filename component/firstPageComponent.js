import React,{
    View,
    Text,
    WebView,
    Picker,
    TouchableOpacity
} from 'react-native';

import SecondPageComponent from './SecondPageComponent';

class FirstPageComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {language:''};
    }

    _pressButton() {
        const { navigator } = this.props;
        //或者写成 const navigator = this.props.navigator;
        //为什么这里可以取得 props.navigator?请看上文:
        //<Component {...route.params} navigator={navigator} />
        //这里传递了navigator作为props
        if(navigator) {
            navigator.push({
                name: 'SecondPageComponent',
                component: SecondPageComponent,
                params:{
                  id:1
                }
            })
        }
    }
    onNavigationStateChange(state){
      console.log(state.url);
    }
    render() {
        return (
          <View style={{flex:1}}>
            <View style={{backgroundColor:'red'}} >
                <TouchableOpacity onPress={this._pressButton.bind(this)}>
                    <Text >点我跳转</Text>
                </TouchableOpacity>
            </View>
            <WebView
              startInLoadingState={true}
              url={'http://www.baidu.com'}
              onNavigationStateChange={this.onNavigationStateChange.bind(this)}
            />
            <Picker
              selectedValue={this.state.language}
              onValueChange={(lang) => this.setState({language: lang})}>
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </View>
        );
    }

}
export {FirstPageComponent as default}
