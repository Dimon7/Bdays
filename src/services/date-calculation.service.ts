import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateCalculationService {

  constructor() { }

  getDaysRemaining(upcomingDate: Date): number{
   const now = new Date();
   const bday = new Date(upcomingDate);
   console.log(bday);
   bday.setFullYear(now.getFullYear());

   let diff = bday.getTime() - now.getTime();

   if (diff < 0){
     bday.setFullYear(now.getFullYear() + 1);
   }

   diff = bday.getTime() - now.getTime();
   const days = Math.floor(diff / (1000 * 60 * 60 * 24));

   console.log(days);

   return days;

  }

  getYears(upcomingDate: Date): number {
    const now = new Date();
    return now.getFullYear() - upcomingDate.getFullYear();
  }


}
