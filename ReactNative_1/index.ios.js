'use strict';

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

//导入stack导航组件
import { StackNavigator } from 'react-navigation';

// class rootApp extends React.Component {
//   render() {
//       return (
//         <View style={styles.container}>
//             <MyFlatList/>
//         </View>
//       );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   highScoresTitle: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   scores: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        return <Text>Hello, Navigation!</Text>;
    }
}

const rootApp = StackNavigator({
    Home: { screen: HomeScreen },
});

// 整体js模块的名称
AppRegistry.registerComponent('PushDemo', () => rootApp);