import React,{
    View,
    Text,
    WebView,
    Picker,
    Image,
    StyleSheet,
    AsyncStorage,
    ViewPagerAndroid,
    Animated,
    LayoutAnimation,
    TouchableOpacity
} from 'react-native'

import LoginComponent from './LoginComponent';
import ArticleComponent from './ArticleComponent';
import MiddleCmp from './MiddleCmp';
class HomeComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      pageCount:3,
      w:10,
      h:10,
      index:0,
      fadeAnim:new Animated.Value(0)
    }
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
  _handlerArticle(e){
    const { navigator } = this.props;

    if(navigator) {
        navigator.push({
            name: 'ArticleComponent',
            component: ArticleComponent,
            params:{
              id:1
            }
        })
    }
  }

  _handlerMiddle(e){
    const { navigator } = this.props;

    if(navigator) {
        navigator.push({
            name: 'MiddleCmp',
            component: MiddleCmp,
            params:{
              id:1
            }
        })
    }
  }

  render() {
      let views = [];
      let img;
      for (let i = 0; i < this.state.pageCount; i++) {
        switch (i%3) {
          case 0:
            img = <Image style={{}} source={require('../images/bg_header_1.png')} />
            break;
          case 1:
            img = <Image style={{}} source={require('../images/bg_header_2.png')} />
            break;
          case 2:
            img = <Image style={{}} source={require('../images/bg_header_3.png')} />
            break;
          default:

        }
        views.push(
          <View>
            {img}
          </View>
        );
      }
      let docts;
      switch (this.state.index % 3) {
        case 0:
      docts=[  <Image style={{margin:4}} source={require('../images/bg_dot_focused.png')} />,
        <Image style={{margin:4}} source={require('../images/bg_dot_normal.png')} />,
        <Image style={{margin:4}} source={require('../images/bg_dot_normal.png')} />];
          break;
        case 1:
      docts=[    <Image style={{margin:4}} source={require('../images/bg_dot_normal.png')} />,
        <Image style={{margin:4}} source={require('../images/bg_dot_focused.png')} />,
        <Image style={{margin:4}} source={require('../images/bg_dot_normal.png')} />];
          break;
        case 2:
      docts=[   <Image style={{margin:4}} source={require('../images/bg_dot_normal.png')} />,
        <Image style={{margin:4}} source={require('../images/bg_dot_normal.png')} />,
        <Image style={{margin:4}} source={require('../images/bg_dot_focused.png')} />];
          break;
        default:

      }
      setInterval(()=>{
        Animated.timing(          // Uses easing functions
           this.state.fadeAnim,    // The value to drive
           {toValue: 1},           // Configuration
         ).start();
      },1000);

    return(
        <View style={{flex:1}}>
          <View style={styles.container}>
            <TouchableOpacity style={styles.leftView} onPress={()=>this._handlerArticle()} >
              <Text>左边</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.middleView} onPress={()=>this._handlerMiddle()}>
              <Text>中间</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rightView} onPress={()=>this._handlerLogin()}>
              <Text>登录</Text>
            </TouchableOpacity>
          </View>

          <ViewPagerAndroid style={{height:205}} initialPage={0}
            ref={viewPager => { this.viewPager = viewPager; }}
            onPageSelected ={(event)=>this.setState({index:event.nativeEvent.position})}
          >
              {views}
          </ViewPagerAndroid>
          <View style={{backgroundColor:"rgba(34, 26, 38, 0.5)",height:30,marginTop:-30,flexDirection:'row',alignItems:'center',justifyContent:'flex-end'}}>
            <Text style={{flex:1,color:'white'}}>welcome to RN thnks!</Text>
            {docts}
          </View>

          <View style={{backgroundColor:'red',height:this.state.h,width:this.state.w,margin:20}}>

          </View>
          <Animated.View style={{backgroundColor:'green',flex:1,opacity: this.state.fadeAnim}}>
            <Animated.Text style={{fontSize:this.state.fadeAnim.interpolate({
              inputRange:[0,1],
              outputRange:[10,30]
            })}}>hahah</Animated.Text>
          </Animated.View>
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
