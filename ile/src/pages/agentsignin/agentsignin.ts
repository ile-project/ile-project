import { Component } from "@angular/core";
import { Alert, AlertController, IonicPage, LoadingController, NavController } from "ionic-angular";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidator } from '../../validator/email';
import { AuthProvider } from '../../providers/auth/auth';
import { DashboardPage } from '../dashboard/dashboard';
import { TaskPage } from "../task/task";
import { AgentsignupPage } from "../agentsignup/agentsignup";
// import { variable } from "@angular/compiler/src/output/output_ast";
@IonicPage()
@Component({
  selector: 'page-agentsignin',
  templateUrl: 'agentsignin.html',
})
export class AgentsigninPage {
  loginForm: FormGroup;
  navController: any;
  goToSignup: any;
  newPsw: any;
  loading: any;
  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public authProvider: AuthProvider,
    formBuilder: FormBuilder) {
    this.goToSignup = AgentsignupPage;
    this.newPsw = TaskPage;
    this.loginForm = formBuilder.group({
      email: [
        '',
        Validators.compose([Validators.required, EmailValidator.isValid])
      ],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(5)])
      ]
    });


  }

  dash() {
    this.navCtrl.setRoot(DashboardPage);
  }

  loginUser(): void {
    if (!this.loginForm.valid) {
      this.validMethod();
    } else {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
      this.authProvider.loginUser(email, password).then(
        () => {
          this.loading.dismiss().then(() => {
            this.navCtrl.setRoot(DashboardPage);
          });
        },
        error => {
          this.loading.dismiss().then(() => {
            const alert: Alert = this.alertCtrl.create({
              message: error.message,
              buttons: [{ text: 'Ok', role: 'cancel' }]
            });
            alert.present();
          });
        }
      );
      this.loading = this.loadingCtrl.create();
      this.loading.present();
    }
  }


  private validMethod() {
    console.log(`Form is not valid yet, current value: ${this.loginForm.value}`);
  }
}