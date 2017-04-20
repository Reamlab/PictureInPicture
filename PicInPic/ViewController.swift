//
//  ViewController.swift
//  PicInPic
//
//  Created by i.razuvaev on 13.02.17.
//  Copyright © 2017 i.razuvaev. All rights reserved.
//

import Cocoa

class ViewController: NSViewController {

  override func viewDidLoad() {
    super.viewDidLoad()
    
    self.view.layer?.backgroundColor = CGColor(red: 255, green: 255, blue: 255, alpha: 0.4);

    // Do any additional setup after loading the view.
  }

  override var representedObject: Any? {
    didSet {
    // Update the view, if already loaded.
    }
  }


}

