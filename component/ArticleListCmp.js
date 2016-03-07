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
        }
      }).done();
    }
  }

  _onItemClick(rowData){
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
  }

  _renderRow(rowData){
    return(
      <TouchableHighlight underlayColor="rgba(34, 26, 38, 0.1)" onPress={()=>this._onItemClick(rowData)}>
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
  render() {
    if (!this.state.isInitLoading) {
        return (
            <ProgressBarAndroid  color="red" styleAttr="Inverse" />
        );
     }
      return(
      <View style={styles.container}>
        <ListView
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
