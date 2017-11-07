'use strict';

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button, Icon,
    TouchableOpacity,
    Image,
    SectionList,
  View
} from 'react-native';

//导入stack导航组件
import MyFlatList from "./app/list";
import MySectionList from "./app/sectionlist";
import TestPage from "./app/test";

export default class rootApp extends React.Component {
  render() {
      return (
        <View style = {styles.container} >
            <TestPage/>
        </View>
      );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  highScoresTitle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  scores: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


// 整体js模块的名称
AppRegistry.registerComponent('PushDemo', () => rootApp);