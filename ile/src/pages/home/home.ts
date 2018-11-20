import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import { AgentsigninPage } from "../agentsignin/agentsignin";
import { StudentsignupPage } from "../studentsignup/studentsignup";
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {
  agentGo: any;
  studentGo; any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.studentGo = StudentsignupPage;
    this.agentGo = AgentsigninPage;
  }

}
