import { Component, OnInit } from '@angular/core';
import {StorageService} from '../../services/storage.service';
import {IPerson} from '../shared/person';

@Component({
  selector: 'app-upcoming-bday',
  templateUrl: './upcoming-bday.component.html',
  styleUrls: ['./upcoming-bday.component.css']
})
export class UpcomingBdayComponent implements OnInit {

  constructor(private storage: StorageService) {
    this.persons = this.storage.get<IPerson[]>('persons') || [];
  }

  persons: Array<IPerson> = [];


  ngOnInit(): void {
  }

}
