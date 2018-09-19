import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgentSigninPage } from './agent-signin';

@NgModule({
  declarations: [
    AgentSigninPage,
  ],
  imports: [
    IonicPageModule.forChild(AgentSigninPage),
  ],
})
export class AgentSigninPageModule {}
