import { Component } from '@angular/core';
import {StorageService} from '../services/storage.service';
import {DateCalculationService} from '../services/date-calculation.service';

interface IPerson {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  daysRemaining?: number;
  age?: number;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private storage: StorageService, private dateCalculation: DateCalculationService) {
    this.persons = this.storage.get<IPerson[]>('persons') || [];
  }

  errorMessage = '';
  date = null;
  firstName = '';
  lastName = '';

  persons: Array<IPerson> = [];

  addPerson(): void{
   const today = new Date();
   if (today.getFullYear() < new Date(this.date).getFullYear()){
     this.errorMessage = `You could not set year of birthday which is more than ${today.getFullYear()}`;
   }else {
     const person: IPerson = {
       dateOfBirth: this.date,
       firstName: this.firstName,
       lastName: this.lastName,
       daysRemaining: this.dateCalculation.getDaysRemaining(this.date),
       age: this.dateCalculation.getYears(this.date)
     };

     this.persons.push(person);
     this.storage.set<IPerson[]>('persons', this.persons);
   }
  }


}
