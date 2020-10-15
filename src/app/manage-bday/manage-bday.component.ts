import { Component, OnInit } from '@angular/core';
import {StorageService} from '../../services/storage.service';



interface IPerson {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  daysRemaining?: number;
  age?: number;
}

@Component({
  selector: 'app-manage-bday',
  templateUrl: './manage-bday.component.html',
  styleUrls: ['./manage-bday.component.css']
})
export class ManageBdayComponent implements OnInit {

  constructor(private storage: StorageService) {
    this.persons = this.storage.get<IPerson[]>('persons') || [];

  }

  persons: Array<IPerson> = [];


  ngOnInit(): void {
    console.log(this.persons);
  }

}
