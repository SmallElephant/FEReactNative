//
//  ReactViewController.m
//  PushDemo
//
//  Created by FlyElephant on 2017/9/13.
//  Copyright © 2017年 FlyElephant. All rights reserved.
//

#import "ReactViewController.h"
#import <React/RCTRootView.h>

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
    self.navigationController.navigationBar.hidden = true;
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
    self.view = rootView;
}


@end
