import { Component, OnInit } from '@angular/core';
import {StorageService} from '../../services/storage.service';
import {DateCalculationService} from '../../services/date-calculation.service';
import {IPerson} from '../shared/person';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {


  constructor(private storage: StorageService, private dateCalculation: DateCalculationService) {
    this.persons = this.storage.get<IPerson[]>('persons') || [];
  }

  errorMessage = '';
  date = null;
  firstName = '';
  lastName = '';

  persons: Array<IPerson> = [];

  hideMessage(): void{
    setTimeout(() => {
      this.errorMessage = '';
    }, 2500);
  }

  addPerson(): void{
    const today = new Date();
    if (today.getTime() < new Date(this.date).getTime()){
      this.errorMessage = `You could not set day of birthday which is more than ${today}`;
      this.hideMessage();
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

  ngOnInit(): void {
  }

}

