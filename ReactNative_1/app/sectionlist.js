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
    {data: ['积分是公司虚拟货币，用户可以通过完成指定任务或参与活动等方式获得积分，积分可用于获取福利，如兑换商品和抽奖等。']},
    {data: [{row1: {title: '1、投资即可获得积分，投资金额越高，期限越长，获得积分越多，详情如下：',
                    line1: '投资理财计划：所得积分=投资本金*0.05',
                    line2: '积分获取按实际投资金额计算'},
             row2: {
                 title: '2、通过参加任务或活动获得积分，具体以任务或活动规则为准。',
             }
    }]},
    {data: ['可在积分商城兑换商品，也可用于参与活动，更多详情可进入积分中心首页查看']},
    {data: [{title: '完成投资，积分即刻派发至个人积分账户。',
        content : '选择续期，积分将在续期完成后，即刻派发至个人积分账户'}]},
    {data: [{title: '每个积分有效期为一年', line1: '用户通过任何作弊行为获取积分，一经发现扣除该用户全部积分',
        line2: '积分所有内容解释权归公司所有'}]}
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
                    <View style = {{flex: 1, flexDirection: 'row', height: 120, backgroundColor: '#F7F9FC'}}>
                        <View style = {[{flex: 10, alignItems: 'center', justifyContent: 'center'},styles.tableBorder]}>
                            <Text style = {{fontSize: 12}}>计划1</Text>
                            <Text style = {{fontSize: 12, marginTop: 5}}>计划2</Text>
                            <Text style = {{fontSize: 12, marginTop: 5}}>计划3</Text>
                        </View>
                        <View style = {[{flex: 15, paddingTop: 10},styles.tableBorder]}>
                            <Text style = {{fontSize: 12, marginLeft: 10, marginRight: 10}}>投资金额*锁定期／12*0.05</Text>
                            <Text style = {{fontSize: 12, marginLeft: 10, marginRight: 10, marginTop: 8, color: '#3F3F3F', lineHeight: 15}}>举例：投资1万元，可获得250积分</Text>
                            <Text style = {{fontSize: 12, marginLeft: 10, marginRight: 10, marginTop: 8, color: '#3F3F3F', lineHeight: 20}}>计划锁定期为1个月，12月期以上产品锁定期均按12个月计算</Text>
                        </View>
                    </View>
                    <View style = {[styles.tableHeader, {height: 130}]}>
                        <Text style = { [styles.tableHeaderText, styles.tableBorder, {flex: 10, lineHeight: 130, fontSize: 12}] }>计划4</Text>
                        <View style = {[{flex: 15, height: 130, paddingTop: 15}, styles.tableBorder]}>
                            <Text style = {{fontSize: 12, marginLeft: 10, marginRight: 10, lineHeight: 20}}>每笔投资金额*（到期时间-每次投资时间）／12*0.05</Text>
                            <Text style = {{fontSize: 12, marginLeft: 10, marginRight: 10, marginTop: 5, color: '#3F3F3F', lineHeight: 20}}>举例：首次投资1000元，获得50积分以此类推</Text>
                        </View>
                    </View>
                    <View style = { [styles.tableHeader, {backgroundColor: '#F7F9FC'}]}>
                        <Text style = { [styles.tableHeaderText, styles.tableBorder, {flex: 10, fontSize: 12}] }>计划5</Text>
                        <Text style = { [styles.tableHeaderText, styles.tableBorder, {flex: 15, color: '#999999', fontSize: 12}] }>不参与积分获取</Text>
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