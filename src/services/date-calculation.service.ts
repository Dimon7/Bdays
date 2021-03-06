import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateCalculationService {

  constructor() { }

  getDaysRemaining(upcomingDate: Date): number{
   const now = new Date();
   const bday = new Date(upcomingDate);

   bday.setFullYear(now.getFullYear());

   let diff = bday.getTime() - now.getTime();

   if (diff < 0){
     bday.setFullYear(now.getFullYear() + 1);
   }

   diff = bday.getTime() - now.getTime();
   return Math.floor(diff / (1000 * 60 * 60 * 24)) + 1;

  }

  upcomingBirthDay(days: number): Date{
    const result = new Date().setDate(new Date().getDate() + days + 1);
    return new Date(result);
  }

  getYears(upcomingDate: Date): number {
    const now = new Date();
    return now.getFullYear() - upcomingDate.getFullYear();
  }
}
