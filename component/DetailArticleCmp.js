import React, {
    View,
    Text,
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
      return (
              <View>
                    <Header doBack = {this._pressButton.bind(this)} headerModel = {{'leftIcon':Icons.back,'titleName':'新闻详情'}}/>
              </View>
      );
    }
}

export { DetailArticleCmp as default}
