import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgentSignupPage } from './agent-signup';

@NgModule({
  declarations: [
    AgentSignupPage,
  ],
  imports: [
    IonicPageModule.forChild(AgentSignupPage),
  ],
})
export class AgentSignupPageModule {}
