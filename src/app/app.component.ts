import { Component, OnInit, ViewContainerRef } from '@angular/core';

import { MappingService } from './shared/utils/mapping.service';

// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  

   constructor(private viewContainerRef: ViewContainerRef, private mappingService: MappingService) {
        // You need this small hack in order to catch application root view container ref
        this.viewContainerRef = viewContainerRef;
    }


    isUserLoggedIn(): boolean {
        return ;//this.mappingService.isUserAuthenticated();
    }

    getUserName(): string {
        if (this.isUserLoggedIn()) {
            //var _user = this.mappingService.getLoggedInUser();
            return;// _user.username;
        }
        else
            return 'Account';
    }
}
