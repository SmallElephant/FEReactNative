//
//  ViewController.m
//  PushDemo
//
//  Created by FlyElephant on 2017/9/12.
//  Copyright © 2017年 FlyElephant. All rights reserved.
//

#import "ViewController.h"
#import <React/RCTRootView.h>

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
}


- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (IBAction)touchAction:(UIButton *)sender {
    NSLog(@"Push按钮点击");
    NSURL *jsCodeLocation = [NSURL
                             URLWithString:@"http://10.10.7.40:8081/index.ios.bundle?platform=ios"];
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
    UIViewController *vc = [[UIViewController alloc] init];
    vc.view = rootView;
    [self presentViewController:vc animated:YES completion:nil];
}

@end
