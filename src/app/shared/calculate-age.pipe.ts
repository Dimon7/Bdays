import { Pipe, PipeTransform } from '@angular/core';
import {DateCalculationService} from '../../services/date-calculation.service';

@Pipe({
  name: 'calculateAge'
})
export class CalculateAgePipe implements PipeTransform {

  constructor(private dateCalculation: DateCalculationService) {
  }

  transform(birthDay: Date, ...args: unknown[]): unknown {
    const daysRemaining = this.dateCalculation.getDaysRemaining(birthDay);
    const nextBirthDay = this.dateCalculation.upcomingBirthDay(daysRemaining);
    return nextBirthDay.getFullYear() - new Date(birthDay).getFullYear();
  }

}
