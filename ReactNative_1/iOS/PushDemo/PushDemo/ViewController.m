//
//  ViewController.m
//  PushDemo
//
//  Created by FlyElephant on 2017/9/12.
//  Copyright © 2017年 FlyElephant. All rights reserved.
//

#import "ViewController.h"
#import "ReactViewController.h"

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
    ReactViewController *controller = [[ReactViewController alloc] init];
    [self.navigationController pushViewController:controller animated:YES];
}

@end
