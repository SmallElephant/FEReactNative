/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    SectionList,
    Image,
    TouchableOpacity,
} from 'react-native';

const arrowIcon = require('./left-arrow.png');

export default class MySectionList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            originalData: [
                {title: '什么是积分', data: ['Devin']},
                {title: '积分如何获得', data: ['Jackson']},
                {title: '标题宽度比例限制宽度比例限制这个为比例…', data: ['Jackson']},
                {title: '积分派发时间', data: ['Jackson']},
                {title: '积分有效期', data: ['Jackson']}
            ]
        };
    }

    _sectionHeader = (data) => {
        console.log('========'+JSON.stringify(data));
         return <TouchableOpacity style = {styles.sectionHeader}
                              onPress={()=>{ alert('test'); }}>
                <View style = {{flex: 1, flexDirection: 'row'}}>
                    <Text style={ styles.sectionText }>{data.section.title}</Text>
                    <View style = { styles.sectionImage }>
                        <Image source = { arrowIcon } style = { {width: 12, height: 12} }/>
                    </View>
                </View>
            </TouchableOpacity>
    };

    _sectionItem = (data) => {
        console.log('当前的item:'+JSON.stringify(data));
        return <Text style={styles.item}>{data.item}</Text>
    };

    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    sections = { this.state.originalData }
                    renderItem = { this._sectionItem }
                    renderSectionHeader = { this._sectionHeader }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    sectionHeader: {
        fontSize: 15,
        height: 60,
        color: '#333333',
        backgroundColor: 'gray',
        justifyContent: 'center'
    },
    sectionText: {
        flex: 17,
        paddingLeft: 15,
        paddingTop: 20,
        backgroundColor: 'red'
    },
    sectionImage: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44
    },
});

// export default class MySectionList extends Component {
//
//     constructor(props) {
//         super(props);
//     }
//
//     _renderItem = (info) => {
//         var txt = 'index:' + info.index + '     ' + info.item.title;
//         var bgColor = info.index % 2 == 0 ? 'red' : 'blue';
//         return <Text
//             style={{height:100,textAlignVertical:'center',backgroundColor:bgColor,color:'white',fontSize:15}}>{txt}</Text>
//     }
//
//     _sectionComponet = (info) => {
//         var txt = 'key:' + info.section.key;
//         return <Text
//             style={{height:50,textAlign:'center',textAlignVertical:'center',backgroundColor:'black',color:'white',fontSize:30}}>{txt}</Text>
//     }
//
//     render() {
//         var sections = [];
//         for (var i = 0; i < 10; i++) {
//             var datas = [];
//             for (var j = 0; j < 10; j++) {
//                 datas.push({title: 'title:' + j});
//             }
//             sections.push({key: i, data: datas});
//         }
//         return (
//             <View style={{flex:1}}>
//                 <SectionList
//                     renderSectionHeader = {this._sectionComponet}
//                     renderItem = {this._renderItem}
//                     sections = {sections} />
//             </View>
//         );
//     }
// }

// const listStyles = StyleSheet.create({
//     container: {
//         flex: 1,
//         paddingTop: 22
//     },
//     sectionHeader: {
//         paddingTop: 2,
//         paddingLeft: 10,
//         paddingRight: 10,
//         paddingBottom: 2,
//         fontSize: 14,
//         fontWeight: 'bold',
//         backgroundColor: 'rgba(247,247,247,1.0)',
//     },
//     item: {
//         padding: 10,
//         fontSize: 18,
//         height: 44,
//     },
// });

// 初始化总数据
// var AllArr=[
//     {name:'河北省',citys:[{name:'石家庄'},{name:'沧州'},{name:'邢台'},{name:'邯郸'},{name:'衡水'}]},
//     {name:'山西省',citys:[{name:'太原'},{name:'大同'},{name:'阳泉'},{name:'临汾'},{name:'晋城'}]},
//     {name:'辽宁省',citys:[{name:'沈阳市'},{name:'大连市'},{name:'鞍山市'},{name:'抚顺市'},{name:'本溪市'}]},
//     {name:'吉林省',citys:[{name:'长春市'},{name:'吉林市'},{name:'四平市'},{name:'辽源市'},{name:'通化市'}]},
//     {name:'黑龙江省',citys:[{name:'哈尔滨'},{name:'齐齐哈尔'},{name:'双鸭山'}]},
//     {name:'江苏省',citys:[{name:'南京'},{name:'苏州'},{name:'无锡'},{name:'常州'}]},
//     {name:'浙江省',citys:[{name:'杭州市'},{name:'宁波'},{name:'温州'},{name:'嘉兴'},{name:'湖州'}]},
// ];
// export default class MySectionList extends Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             //改变数据的数组
//             Arr:[
//                 {name:'河北省'},
//                 {name:'山西省'},
//                 {name:'辽宁省'},
//                 {name:'吉林省'},
//                 {name:'黑龙江省'},
//                 {name:'江苏省'},
//                 {name:'浙江省'}
//             ]
//         };
//         //for循环添加字段删除字段添加标示和key
//         for (var i = 0; i < this.state.Arr.length; i++) {
//             this.state.Arr[i]['data'] = [];
//             this.state.Arr[i]['key'] = i;
//             this.state.Arr[i]['isShow'] = 'off';
//             // delete this.state.Arr[i]['citys'];
//
//         }
//     }
//     //分组创建的cell
//     Cell(data){
//         console.log('当前的数据:'+data.item.name);
//         return(
//             <View style={{height:40,backgroundColor:'green',justifyContent: 'center',}}>
//                 <View style={{height:39,backgroundColor:'yellow',justifyContent: 'center',}}>
//                     <Text>{data.item.name}</Text>
//                 </View>
//             </View>
//         );
//     }
//     // 展开改变数据源，增加数据，合上删除数组里的数据，根据isShow状态判断
//     show(data){
//         if (data.isShow==='off') {
//             this.state.Arr[data.key]['data'] = AllArr[data.key].citys;
//             this.state.Arr[data.key]['isShow'] = 'on';
//             this.setState({
//                 Arr:this.state.Arr,
//             });
//         }else{
//             this.state.Arr[data.key]['data'] = [];
//             this.state.Arr[data.key]['isShow'] = 'off';
//             this.setState({
//                 Arr:this.state.Arr,
//             });
//         }
//
//     }
//     //列表分组的header
//     Header({section}){
//         return(
//             <TouchableOpacity style={{height:50,
//                 backgroundColor:'orange',
//                 justifyContent: 'center',}}
//                               onPress={()=>{this.show(section)}}>
//                 <View>
//                     <Text style={{fontSize:20}}>{section.name}</Text>
//                 </View>
//             </TouchableOpacity>
//         );
//     }
//     //去除警告
//     extraUniqueKey(item,index){
//         return index+item;
//     }
//     render() {
//         console.log('========'+JSON.stringify(this.state.Arr));
//         return (
//             <View style={styles.container}>
//                 <SectionList
//                     sections={this.state.Arr}//数据源
//                     renderItem={ this.Cell.bind(this) }//cell绑定时间创建cell
//                     keyExtractor = {this.extraUniqueKey}//去除警告
//                     renderSectionHeader={this.Header.bind(this)}//Header绑定时间创建表头
//                     scrollEnabled={true}//默认是true，false禁止滚动
//
//                 >
//                 </SectionList>
//             </View>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#F5FCFF',
//     },
//     welcome: {
//         fontSize: 20,
//         textAlign: 'center',
//         margin: 10,
//     },
//     instructions: {
//         textAlign: 'center',
//         color: '#333333',
//         marginBottom: 5,
//     },
// });
