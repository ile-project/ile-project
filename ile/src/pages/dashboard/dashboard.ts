import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { ListingsPage } from '../listings/listings';
import { ListingPage } from '../listing/listing';
import { Tabs } from 'ionic-angular/umd/navigation/nav-interfaces';
import { MenuPage } from '../menu/menu';
@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  @ViewChild('tab') tabRef: Tabs;
  page1 = ListingPage;
  page2 = ListingsPage;
  page0 = MenuPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) { }
 
  ionViewDidLoad() {
    let openTab = this.navParams.get("openTab");
    if(openTab){
    }
  }

}
