import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const accountRoutes: Routes = [
    {
        path: 'account',
        component: AccountComponent,
        children: [
            { path: 'registration', component: RegisterComponent },
            { path: 'login', component: LoginComponent }
        ]
    }
];

export const accountRouting: ModuleWithProviders = RouterModule.forChild(accountRoutes);