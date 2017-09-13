'use strict';

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
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

class ChatScreen extends React.Component {

    // const {goBack} = this.props.navigation;
    // Nav options can be defined as a function of the screen's props:


    // Nav options can be defined as a function of the screen's props:
    static navigationOptions = ({ navigation }) => ({
        title: `Chat with ${navigation.state.params.user}`,
        headerRight: <Button title="Info1" />,
        headerRight: (<TouchableHighlight
            onPress={() => navigation.navigate('Home')}
            underlayColor={'#444444'}
        >
            <Image source={ require('./app/left-arrow.png')} />
        </TouchableHighlight>)
    });

    render() {
        return (
            <View>
                <Text>Chat with Lucy</Text>
            </View>
        );
    }
}

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Hello, Chat App!</Text>
                <Button
                    onPress={() => navigate('Chat', {user: 'FlyElephant'}) }
                    title="Chat with Lucy"
                />
            </View>
        );
    }
}

const rootApp = StackNavigator({
    Home: { screen: HomeScreen },
    Chat: { screen: ChatScreen }
});

// 整体js模块的名称
AppRegistry.registerComponent('PushDemo', () => rootApp);