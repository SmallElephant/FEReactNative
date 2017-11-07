//
//  PushEventEmitter.h
//  PushDemo
//
//  Created by FlyElephant on 2017/11/7.
//  Copyright © 2017年 FlyElephant. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface PushEventEmitter : RCTEventEmitter <RCTBridgeModule>

- (void)addEventReminderReceived:(NSNotification *)notification;

@end
