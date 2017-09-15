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

var originalData = [
    {data: ['积分是人人贷在7周年之际特别推出回馈新老用户的奖励型虚拟货币，用户可以通过完成指定任务或参与活动等方式获得积分，积分可用于获取福利，如兑换商品和抽奖等。']},
    {data: [{row1: {title: '1、投资即可获得积分，投资金额越高，期限越长，获得积分越多，详情如下：',
                    line1: '投资优选理财计划：所得积分=投资本金*0.05（此产品已下线，仅用于积分上线时对于老用户过往积分的追溯）',
                    line2: '积分获取按实际投资金额计算（举例：投资1000元12月期U计划，使用了5元优惠券，所得积分以995元作为投资金额计算）'},
             row2: {
                 title: '2、通过参加任务或活动获得积分，具体以任务或活动规则为准。所有计算积分均向下取整。例如，计算可获积分为10.6积分，实际可获取10积分',
             }
    }]},
    {data: ['可在积分商城兑换商品，也可用于参与“人人赚”等活动，更多详情可进入积分中心首页查看']},
    {data: [{title: '完成投资，积分即刻派发至个人积分账户。参加任务或活动获得积分，积分具体派发时间以任务或活动规则为准。',
        content : '选择续期，积分将在续期完成后，即刻派发至个人积分账户'}]},
    {data: [{title: '每个积分有效期为一年，当月获取的积分将在次年该月最后一天清零。', line1: '用户通过任何作弊行为获取积分，一经发现扣除该用户全部积分',
        line2: '积分所有内容解释权归人人贷所有'}]}
];

class CircleRow extends Component {
    render() {
        return (
            <View style = {{flexDirection:'row',marginLeft: 15, marginRight: 15, marginBottom: 15}}>
                <View style = {[styles.circle]}></View>
                <Text style={[{lineHeight: 20,marginLeft: 10, marginTop: -5, fontSize: 13},this.props.style]}>{this.props.name}</Text>
            </View>
        );
    }
}

export default class MySectionList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displayData: [
                {title: '什么是积分'},
                {title: '积分如何获得'},
                {title: '积分如何使用'},
                {title: '积分派发时间'},
                {title: '积分有效期'}
            ]
        };

        for (var i = 0; i < this.state.displayData.length; i++) {
            this.state.displayData[i]['data'] = [];
            this.state.displayData[i]['key'] = i;
            this.state.displayData[i]['isExpanded'] = '0';
        }
    }

    _sectionHeader = (data) => {
        console.log('========'+JSON.stringify(data));
        var imgPath = data.section.isExpanded == '0' ?  require('./down.png') : require('./up.png');
         return <TouchableOpacity style = {styles.sectionHeader} fontSize = {15}   color = {'#333333'}
                              onPress={()=>{ this.toggle(data); }}>
                <View style = { styles.sectionContainer }>
                    <Text style = { styles.sectionText } numberOfLines = { 1 } >{data.section.title}</Text>
                    <View style = { styles.sectionImage }>
                        <Image source = { imgPath } style = { {width: 12, height: 12} }/>
                    </View>
                </View>
            </TouchableOpacity>
    };

    _sectionItem = (data) => {
        console.log('当前的item:'+JSON.stringify(data));
        if(data.section.key == 0) {
            return <Text style={[styles.item, {lineHeight: 20}]} fontSize = {20} >{data.item}</Text>
        } else if(data.section.key == 1) {
            return <View>
                <Text style={[styles.item, {lineHeight: 20}]}>{data.item.row1.title}</Text>
                <View style = {{marginLeft: 15, marginRight: 15, marginBottom: 20}}>
                    <View style = { styles.tableHeader }>
                        <Text style = { [styles.tableHeaderText, styles.tableBorder, {flex: 10}] }>投资产品类别</Text>
                        <Text style = { [styles.tableHeaderText, styles.tableBorder, {flex: 15}] }>获得积分</Text>
                    </View>
                    <View style = {{flex: 1, flexDirection: 'row', height: 120}}>
                        <View style = {[{flex: 10, alignItems: 'center', justifyContent: 'center'},styles.tableBorder]}>
                            <Text style = {{fontSize: 13}}>U计划</Text>
                            <Text style = {{fontSize: 13, marginTop: 5}}>优选计划</Text>
                            <Text style = {{fontSize: 13, marginTop: 5}}>月升计划</Text>
                        </View>
                        <View style = {[{flex: 15, paddingTop: 10},styles.tableBorder]}>
                            <Text style = {{fontSize: 12, marginLeft: 10, marginRight: 10}}>投资金额*锁定期／12*0.05</Text>
                            <Text style = {{fontSize: 12, marginLeft: 10, marginRight: 10, marginTop: 10, color: '#3F3F3F'}}>举例：投资1万元6月期U计划，可获得250积分</Text>
                            <Text style = {{fontSize: 12, marginLeft: 10, marginRight: 10, marginTop: 10, color: '#3F3F3F'}}>月升计划锁定期为1个月，12月期以上产品锁定期均按12个月计算</Text>
                        </View>
                    </View>
                    <View style = {[styles.tableHeader, {height: 130}]}>
                        <Text style = { [styles.tableHeaderText, styles.tableBorder, {flex: 10, lineHeight: 130}] }>薪计划</Text>
                        <View style = {[{flex: 15, paddingTop: 10},styles.tableBorder]}>
                            <Text style = {{fontSize: 12, marginLeft: 10, marginRight: 10}}>每笔投资金额*（到期时间-每次投资时间）／12*0.05</Text>
                            <Text style = {{fontSize: 12, marginLeft: 10, marginRight: 10, marginTop: 10, color: '#3F3F3F'}}>举例：首次投资1000元，获得50积分；第二次支付1000元，再获得45积分；以此类推</Text>
                        </View>
                    </View>
                </View>
                <CircleRow name = {data.item.row1.line1}/>
                <CircleRow name = {data.item.row1.line2} style={{marginTop: -8}}/>
                <Text style={[styles.item, {lineHeight: 20}]}>{data.item.row2.title}</Text>
            </View>
        } else if(data.section.key == 2) {
            return <Text style={[styles.item, {lineHeight: 20}]}>{data.item}</Text>
        } else if(data.section.key == 3) {
            return <View>
                     <Text style={[styles.item, {lineHeight: 20}]}>{data.item.title}</Text>
                     <CircleRow name = {data.item.content}/>
                   </View>
        } else if(data.section.key == 4){
            return <View>
                <Text style={[styles.item, {lineHeight: 20}]}>{data.item.title}</Text>
                <CircleRow name = {data.item.line1}/>
                <CircleRow name = {data.item.line2} style={{marginTop: -8}}/>
            </View>
        } else {
            return <Text style={[styles.item, {lineHeight: 20}]}>{data.item}</Text>
        }
    };

    toggle(data) {
        var key = data.section.key;
        if (data.section.isExpanded == '0') {
            this.state.displayData[key].data = originalData[key].data;
            this.state.displayData[key].isExpanded = '1';
        } else {
            this.state.displayData[key].data = [];
            this.state.displayData[key].isExpanded = '0';
        }
        this.setState({
            displayData: this.state.displayData
        });
    }

    extraUniqueKey(item, index) {
        return index + item;
    }

    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    sections = { this.state.displayData }
                    renderItem = { this._sectionItem.bind(this) }
                    renderSectionHeader = { this._sectionHeader.bind(this) }
                    keyExtractor = { this.extraUniqueKey }//去除警告
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
        height: 60,
        backgroundColor: 'gray',
        justifyContent: 'center'
    },
    sectionContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    sectionText: {
        flex: 22,
        paddingLeft: 15,
        backgroundColor: 'red'
    },
    sectionImage: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    item: {
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 15,
        marginBottom: 15,
        fontSize: 13
    },
    circle: {
        width: 8,
        height: 8,
        backgroundColor:'#f76260',
        borderRadius: 4
    },
    tableHeader: {
        flex: 1,
        flexDirection: 'row',
        height: 45,
        backgroundColor: '#EFF3F9',
        alignItems: 'center'
    },
    tableHeaderText: {
        fontSize: 13,
        textAlign: 'center',
        lineHeight: 45
    },
    tableBorder: {
        borderWidth: 0.5,
        borderColor: '#E0E8F2'
    }
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
