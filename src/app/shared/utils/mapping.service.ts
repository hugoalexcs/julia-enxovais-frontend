import { Injectable } from '@angular/core';

import { ISchedule, IScheduleDetails, IUser } from '../interfaces';
import  { ItemsService } from './items.service'

@Injectable()
export class MappingService {

    constructor(private itemsService : ItemsService) { }

    mapScheduleDetailsToSchedule(scheduleDetails: IScheduleDetails): ISchedule {
        var schedule: ISchedule = {
            id: scheduleDetails.id,
            title: scheduleDetails.title,
            description: scheduleDetails.description,
            timeStart: scheduleDetails.timeStart,
            timeEnd: scheduleDetails.timeEnd,
            location: scheduleDetails.location,
            type: scheduleDetails.type,
            status: scheduleDetails.status,
            dateCreated: scheduleDetails.dateCreated,
            dateUpdated: scheduleDetails.dateUpdated,
            creator: scheduleDetails.creator,
            userId: scheduleDetails.creatorId,
            attendees: this.itemsService.getPropertyValues<IUser, number[]>(scheduleDetails.attendeesUsers, 'id')
        }

        return schedule;
    }

     isUserAuthenticated(): boolean {
        var _user: String = localStorage.getItem('user');
        if (_user != null)
            return true;
        else
            return false;
    }

    getLoggedInUser(): IUser {
        var _user: IUser;

        if (this.isUserAuthenticated()) {
            var _userData = JSON.parse(localStorage.getItem('user'));
            //_user = new IUser(_userData.Username, _userData.Password);
        }

        return _userData;
    }

}
/*
 // Convert date times to readable format
                this.schedule.timeStart = new DateFormatPipe().transform(scheduleDetails.timeStart, ['local']); // new DateFormatPipe().transform(schedule.timeStart, ['local']);
                this.schedule.timeEnd = new DateFormatPipe().transform(scheduleDetails.timeEnd, ['local']); //new DateFormatPipe().transform(schedule.timeEnd, ['local']);
            
*/