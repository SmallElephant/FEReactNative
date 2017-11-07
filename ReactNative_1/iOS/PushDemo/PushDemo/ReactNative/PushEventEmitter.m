//
//  PushEventEmitter.m
//  PushDemo
//
//  Created by FlyElephant on 2017/11/7.
//  Copyright © 2017年 FlyElephant. All rights reserved.
//

#import "PushEventEmitter.h"

@implementation PushEventEmitter

+ (id)allocWithZone:(NSZone *)zone {
    static PushEventEmitter *sharedInstance = nil;
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        sharedInstance = [super allocWithZone:zone];
    });
    return sharedInstance;
}

RCT_EXPORT_MODULE();

- (NSArray<NSString *> *)supportedEvents
{
    return @[@"EventReminder"];
}

- (void)addEventReminderReceived:(NSNotification *)notification {
    [self sendEventWithName:@"EventReminder" body:@{@"name": @"FlyElephant"}];
}

@end
