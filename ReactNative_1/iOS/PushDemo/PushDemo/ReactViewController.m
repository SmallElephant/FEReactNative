//
//  ReactViewController.m
//  PushDemo
//
//  Created by FlyElephant on 2017/9/13.
//  Copyright © 2017年 FlyElephant. All rights reserved.
//

#import "ReactViewController.h"
#import <React/RCTRootView.h>
#import "PushEventEmitter.h"

@interface ReactViewController ()

@end

@implementation ReactViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    [self setup];
}

- (void)viewWillAppear:(BOOL)animated {
    [super viewWillAppear:animated];
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (void)setup {
    NSURL *jsCodeLocation = [NSURL
                             URLWithString:@"http://127.0.0.1:8081/index.ios.bundle?platform=ios"];
    RCTRootView *rootView =
    [[RCTRootView alloc] initWithBundleURL : jsCodeLocation
                         moduleName        : @"PushDemo"
                         initialProperties :
     @{
       @"scores" : @[
               @{
                   @"name" : @"FlyElephant",
                   @"value": @"100"
                   },
               @{
                   @"name" : @"Keso",
                   @"value": @"10"
                   }
               ]
       }
                          launchOptions    : nil];
    rootView.frame = CGRectMake(0, 150, [UIScreen mainScreen].bounds.size.width, 300);
    [self.view addSubview:rootView];
    
    self.view.backgroundColor = [UIColor whiteColor];
    
    UIButton *button = [UIButton buttonWithType:UIButtonTypeCustom];
    button.frame = CGRectMake(20, 64, 100, 30);
    [button setTitle:@"测试回调" forState:UIControlStateNormal];
    [button setBackgroundColor:[UIColor redColor]];
    [button addTarget:self action:@selector(test) forControlEvents:UIControlEventTouchUpInside];
    [self.view addSubview:button];
}

- (void)test {
    PushEventEmitter *eventEmitter = [PushEventEmitter allocWithZone:nil];
    [eventEmitter addEventReminderReceived:nil];
}

@end
