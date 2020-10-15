import { Component, OnInit } from '@angular/core';
import {StorageService} from '../../services/storage.service';
import {DateCalculationService} from '../../services/date-calculation.service';



interface IPerson {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  daysRemaining?: number;
  age?: number;
}

@Component({
  selector: 'app-upcoming-bday',
  templateUrl: './upcoming-bday.component.html',
  styleUrls: ['./upcoming-bday.component.css']
})
export class UpcomingBdayComponent implements OnInit {

  constructor(private storage: StorageService, private dateCalculation: DateCalculationService) {
    this.persons = this.storage.get<IPerson[]>('persons') || [];
  }

  persons: Array<IPerson> = [];


  ngOnInit(): void {
  }

}
