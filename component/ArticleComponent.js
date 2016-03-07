'use strict'
import React, {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableHighlight,
    Switch,
    ToastAndroid,
    ViewPagerAndroid,
    AsyncStorage,
    ProgressBarAndroid,
    StyleSheet,
} from 'react-native';

import FirstPageComponent from './firstPageComponent';
import Header from './Header';
import Icons from '../asset/Icons';
import RequestBuilder from '../http/RequestBuilder';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import ArticleListCmp from './ArticleListCmp';
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
              <View style={styles.container}>
                    <Header doBack = {this._pressButton.bind(this)} headerModel = {{'leftIcon':Icons.home,'titleName':'健康咨询'}}/>
                    <ViewPagerAndroid style={styles.pageStyle}
                      initialPage={0}>
                      <View style={{justifyContent: 'center',}}>
                        <ArticleListCmp {...this.props} />
                      </View>
                      <View style={{backgroundColor:'yellow'}}>
                        <ProgressBarAndroid  color="red" styleAttr="Inverse" />
                      </View>
                    </ViewPagerAndroid>
              </View>
      );
    }
}
const styles = StyleSheet.create({
  container:{
    flex:1
  },
   pageStyle: {
    alignItems: 'center',
    flex:1
  },
});

export { LoginComponent as default}
