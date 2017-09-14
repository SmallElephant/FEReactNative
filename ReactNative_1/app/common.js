'use strict';

import React from 'react';
import {
    TouchableOpacity,
    View,
    Image,
    Icon,
} from 'react-native';

const ImgButton = ({ onPress, img }) => {
    return (
        <TouchableOpacity onPress= { onPress }>
            <Image
                source = { img }
            />
        </TouchableOpacity>
    );
};

export const CustomNavButton = (navigation) => {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name='ios-arrow-back-outline' size={35} />
            </TouchableOpacity>
        </View>
    )
}

export default ImgButton;