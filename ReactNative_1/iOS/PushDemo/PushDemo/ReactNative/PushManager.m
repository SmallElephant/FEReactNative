//
//  PushManager.m
//  PushDemo
//
//  Created by FlyElephant on 2017/11/7.
//  Copyright © 2017年 FlyElephant. All rights reserved.
//

#import "PushManager.h"

@implementation PushManager

RCT_EXPORT_MODULE();

- (NSDictionary *)baseInfomation {
    return @{ @"name": @"FlyElephant" };
}

RCT_EXPORT_METHOD(showMessage:(NSString *)message type:(NSString *)type)
{
    RCTLogInfo(@"FlyElephant 本地调用 %@---%@---", message, type);
}

@end
