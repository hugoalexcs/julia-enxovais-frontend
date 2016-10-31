
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {LoginService} from '../../shared/services/login.service';
import {Account} from '../../shared/domain/account';
import {AccountEventsService} from '../../shared/services/account.events.service';
import { Router } from '@angular/router';

import { Component, OnInit, ViewChild, Input, Output,
    trigger,
    state,
    style,
    animate,
    transition } from '@angular/core';
 
import { ModalDirective } from 'ng2-bootstrap';

import { DataService } from '../../shared/services/data.service';
import { ItemsService } from '../../shared/utils/items.service';
import { NotificationService } from '../../shared/utils/notification.service';
import { ConfigService } from '../../shared/utils/config.service';
import { HighlightDirective } from '../../shared/directives/highlight.directive';
import { User } from '../../shared/domain/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
    animations: [
        trigger('flyInOut', [
            state('in', style({ opacity: 1, transform: 'translateX(0)' })),
            transition('void => *', [
                style({
                    opacity: 0,
                    transform: 'translateX(-100%)'
                }),
                animate('0.5s ease-in')
            ]),
            transition('* => void', [
                animate('0.2s 10 ease-out', style({
                    opacity: 0,
                    transform: 'translateX(100%)'
                }))
            ])
        ])
    ]
})
export class LoginComponent implements OnInit {
   
    private  _user: User;
    username:string;
    password:string;
    wrongCredentials:boolean;
    loginForm:FormGroup;
    account:Account;
    error:string;
    test: String = "Testando";
    constructor(
        private formBuilder: FormBuilder, 
        private loginService: LoginService, 
        private accountEventService:AccountEventsService,
        private router: Router) {
        
    }
    ngOnInit() {
     this.wrongCredentials = false;
     this._user = new User('', '');
        
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        this.accountEventService.subscribe((account) => {
            if(!account.authenticated) {
                if(account.error) {
                    if(account.error.indexOf('BadCredentialsException') !== -1) {
                        this.error = 'Username and/or password are invalid !';
                    } else {
                        this.error = account.error;
                    }
                }
            }
        });
    } 
    login(): void {
        event.preventDefault();
        console.log(this._user);
        this.loginService.authenticate(this._user.email, this._user.password)
            .subscribe((account) => {
                this.account = account;
                console.log('Successfully logged',account);
                this.router.navigate(['/users']);
            });
         
    }
}
