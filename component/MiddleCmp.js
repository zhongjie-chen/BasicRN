'use strict'
import React, {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    TouchableHighlight,
    ViewPagerAndroid,
    ScrollView
} from 'react-native';
import Header from './Header';
import Icons from '../asset/Icons';
let {height, width} = Dimensions.get('window');
class MiddleCmp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      category:['健康咨询','疾病防治','热点新闻','饮食保健','健康美容','心理疾病','中医中药']
    }

  }

  _pressButton() {
      const { navigator,id } = this.props;
      console.log(id);
      if(navigator) {
          navigator.pop();
      }
  }
  _onTabClick(item,index){
    console.log(item+index);
  }
  render() {
      return(
        <View style={styles.container}>
              <Header doBack = {this._pressButton.bind(this)} headerModel = {{'leftIcon':Icons.home,'titleName':'中间'}}/>
              <View>
                <ScrollView contentContainerStyle={{height:55,borderBottomWidth:StyleSheet.hairlineWidth}} horizontal = {true} showsHorizontalScrollIndicator ={false}>
                    {
                      this.state.category.map((item,index) => (
                        <TouchableHighlight underlayColor = "rgba(34, 26, 38, 0.1)" onPress={()=>this._onTabClick(item,index)}>
                          <View key={index} style={{flexDirection:'row',flex:1}}>
                            <View style = {{justifyContent:'center'}}>
                              <Text style = {{fontSize:20,margin:20,color:'black'}}>{item}</Text>
                            </View>
                            <View style={{alignSelf:'center',width:StyleSheet.hairlineWidth,height:35,backgroundColor:'#c9c9c9'}}></View>
                          </View>
                        </TouchableHighlight>
                      ))
                    }
                </ScrollView>
              </View>
              <ViewPagerAndroid style={{flex:1}} initialPage={0}>
                <View style={{flex:1}}><Text>00000</Text></View>
                <View style={{flex:1}}><Text>11111</Text></View>
                <View style={{flex:1}}><Text>22222</Text></View>
                <View style={{flex:1}}><Text>33333</Text></View>
              </ViewPagerAndroid>
        </View>
      )

  }
}
const styles = StyleSheet.create({
  container:{
    flex:1
  }
});

export{ MiddleCmp as default };
