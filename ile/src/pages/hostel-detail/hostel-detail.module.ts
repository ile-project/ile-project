import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HostelDetailPage } from './hostel-detail';

@NgModule({
  declarations: [
    HostelDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(HostelDetailPage),
  ],
})
export class HostelDetailPageModule {}
