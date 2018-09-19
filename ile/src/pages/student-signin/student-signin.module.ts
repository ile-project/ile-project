import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentSigninPage } from './student-signin';

@NgModule({
  declarations: [
    StudentSigninPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentSigninPage),
  ],
})
export class StudentSigninPageModule {}
