

import React, {
    Component,
} from 'react';

import {
    Text,
    View,
    TouchableHighlight,
    NativeModules,
    NativeEventEmitter,
} from 'react-native';

const PushManager = NativeModules.PushManager;
const PushEventEmitter  = NativeModules.PushEventEmitter;

const emitterManager = new NativeEventEmitter(PushEventEmitter);


export default class TestPage extends Component {

    constructor(...args) {
        super(...args);
    }

    componentDidMount() {
        subscription = emitterManager.addListener(
            'EventReminder',
            (reminder) => console.log('JavaScript接收到通知:'+reminder.name)
        );

    }
    componentWillUnmount(){
        subscription.remove();// 移除通知
    }
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <TouchableHighlight style={{ height: 100, backgroundColor: 'red' }} onPress={()=>{
                            PushManager.showMessage("消息推送","local");
                    }}>
                        <Text>本地方法</Text>
                    </TouchableHighlight>
                </View>
                <View>
                    <TouchableHighlight style={{ height: 100, backgroundColor: 'blue' }} onPress={()=>{
                        PushManager.showMessage("消息推送","remote");
                    }}>
                        <Text>组件传递参数测试</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
};