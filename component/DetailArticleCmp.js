import React, {
    View,
    Text,
    Image,
    WebView,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

import FirstPageComponent from './firstPageComponent';
import Header from './Header';
import Icons from '../asset/Icons';
class DetailArticleCmp extends React.Component {

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
      const {rowData} = this.props;
      let imgHtml = `<img style="width: 100%;height: 45%;" src='${rowData.big_photo}'>${rowData.content}`;
      console.log(rowData);
      return (
              <View style={{flex :1}}>
                    <Header doBack = {this._pressButton.bind(this)} headerModel = {{'leftIcon':Icons.back,'titleName':'新闻详情'}}/>
                    <View style={{flexDirection:'row',padding:8}}>
                      <Text style = {{fontWeight:'bold',fontSize:20,color:'black',flex:1}}>{rowData.title}</Text>
                      <Text style={{alignSelf:'flex-end'}}>{rowData.date}</Text>
                    </View>
                    <WebView
                      style={{flex:1}}
                      html={imgHtml}
                    />
              </View>
      );
    }
}

export { DetailArticleCmp as default}
