import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-blank',
  templateUrl: './blank.page.html',
  styleUrls: ['./blank.page.scss'],
})
export class BlankPage implements OnInit {

  constructor(private sample:Router, private navCtrl:NavController) { 
    
  }

  ngOnInit() {
   
  };

  onClick(){
    //this.sample.navigateByUrl('/tabs/message');
    this.navCtrl.navigateRoot('tabs/message');
  };

 

}
