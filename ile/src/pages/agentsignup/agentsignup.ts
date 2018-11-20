import { Component } from '@angular/core';
import { NavController, NavParams, Alert, AlertController, IonicPage, Loading, LoadingController } from 'ionic-angular';
import { AgentsigninPage } from "../agentsignin/agentsignin";
import { AutenticatePage } from "../autenticate/autenticate";
import { ModalController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthProvider } from "../../providers/auth/auth";
import { EmailValidator } from "../../validator/email";
import { DashboardPage } from "../dashboard/dashboard";

@IonicPage()
@Component({
  selector: 'page-agentsignup',
  templateUrl: 'agentsignup.html',
})
export class AgentsignupPage {
  inside: any;
  code: any;
  public SignupPage: FormGroup;
  public loading: Loading;
  signupForm: FormGroup;

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, public authProvider: AuthProvider, public loadingCtrl: LoadingController, public alertCtrl: AlertController, formBuilder: FormBuilder) {
    this.inside = AgentsigninPage;
    this.code = AutenticatePage;

    this.signupForm = formBuilder.group({
      email: ["", Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ["", Validators.compose([Validators.minLength(6), Validators.required])],
      name: ["", Validators.compose([Validators.minLength(6), Validators.required])],
      phone: ["", Validators.compose([Validators.required])]

    })

  }


  signupUser(): void {
    if (!this.signupForm.valid) {
      console.log(
        `Need to complete the form, current value: ${this.signupForm.value}`
      );
    } else {
      const email: string = this.signupForm.value.email;
      const password: string = this.signupForm.value.password;
      const name: string = this.signupForm.value.name;
      const phone: string = this.signupForm.value.phone;
      this.authProvider.signupUser(email, password,name,phone).then(
        user => {
          this.loading.dismiss().then(() => {
            this.navCtrl.setRoot(DashboardPage);
          });
        },
        error => {
          this.loading.dismiss().then(() => {
            const alert: Alert = this.alertCtrl.create({
              message: error.message,
              buttons: [{ text: "Ok", role: "cancel" }]
            });
            alert.present();
          });
        }
      );
      this.loading = this.loadingCtrl.create();
      this.loading.present();
    }
  }



}



