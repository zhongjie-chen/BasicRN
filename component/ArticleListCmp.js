'use strict'
import React, {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableHighlight,
    ToastAndroid,
    ListView,
    AsyncStorage,
    Image,
    ProgressBarAndroid,
    StyleSheet,
} from 'react-native';
import RequestBuilder from '../http/RequestBuilder';
import ImageProgress from 'react-native-image-progress'
import DetailArticleCmp from './DetailArticleCmp';
class ArticleListCmp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isInitLoading:false,
      count:20,
      articles:[]
    }
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });

  }
  componentDidMount(){
    if(!this.state.isInitLoading){
      RequestBuilder({"TX":"Z002004","page_size":20,"class_id":97,"page_no":1})
      .then(responseData => {
        console.log(responseData);
        if(responseData.R == 200){
          this.setState({isInitLoading:true});
          this.setState({articles:responseData.list});
          this.setState({pageCount:responseData.page_count})
          this.setState({pageStart:1})
        }
      }).done();
    }
  }

  _onItemClick(rowData,rowID){
    const { navigator } = this.props;
    if(navigator) {
        navigator.push({
            name: 'DetailArticleCmp',
            component: DetailArticleCmp,
            params:{
              rowData
            }
        })
    }
    // let newArticles = this.state.articles;
    // newArticles[rowID].title = '被我点击了 改变title'
    // this.setState({articles:newArticles})
  }

  _renderRow(rowData,sectionID, rowID, highlightRow){
    return(
      <TouchableHighlight underlayColor="rgba(34, 26, 38, 0.1)" onPress={()=>this._onItemClick(rowData,rowID)}>
        <View style={{flexDirection:'row',padding:12,borderBottomWidth:StyleSheet.hairlineWidth,borderColor:'#c9c9c9'}}>
          <ImageProgress
            source = {{uri: rowData.small_photo}}
            indicator={ProgressBarAndroid}
            style = {{height:80,width:120}}
          />
          <View style={{marginLeft:10,flex:1}}>
            <Text style={{fontSize: 18,fontWeight: 'bold',color:'black'}}>{rowData.title}</Text>
            <Text style={{flex:1}}>{rowData.summary}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
  _renderFooter(){
    if (this.state.pageCount > this.state.pageStart) {
      return (
        <View
          style={{
            marginVertical: 20,
            paddingBottom: 20,
            alignSelf: 'center'
          }}
        >
          <ProgressBarAndroid />
        </View>
      )
    } else {
      return (
        <View
          style={{
            marginVertical: 20,
            paddingBottom: 20,
            alignSelf: 'center'
          }}
        >
          <Text
            style={{
              color: 'rgba(0, 0, 0, 0.3)'
            }}
          >数据已结加载完了- -|||</Text>
        </View>
      );
    }
  }
  _onEndReached(){
    if (this.state.pageCount > this.state.pageStart) {
      RequestBuilder({"TX":"Z002004","page_size":20,"class_id":97,"page_no":this.state.pageStart + 1})
      .then(responseData => {
        console.log(responseData);
        if(responseData.R == 200){
          this.setState({articles:[...this.state.articles, ...responseData.list]});
          this.setState({pageStart:this.state.pageStart + 1})
        }
      }).done();
    }
  }

  render() {
    if (!this.state.isInitLoading) {
        return (
            <ProgressBarAndroid  color="red" styleAttr="Inverse" />
        );
     }
      return(
      <View style={styles.container}>
        <ListView
            renderFooter={this._renderFooter.bind(this)}
            onEndReached={this._onEndReached.bind(this)}
            dataSource={this.dataSource.cloneWithRows(this.state.articles)}
            renderRow={this._renderRow.bind(this)}
            initialListSize={this.state.count}
            pageSize={this.state.count}
          />
      </View>)

  }
}
const styles = StyleSheet.create({
  container:{
    flex:1
  }
});

export{ ArticleListCmp as default };
