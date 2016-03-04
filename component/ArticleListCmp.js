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
    ProgressBarAndroid,
    StyleSheet,
} from 'react-native';
import RequestBuilder from '../http/RequestBuilder';


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
  _renderRow(rowData){
    return(<Text style={{height:100}}>{rowData.title}</Text>);
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
            renderRow={this._renderRow}
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
