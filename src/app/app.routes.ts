import {Routes} from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {AddReserveComponent} from "./pages/add-reserve/add-reserve.component";
import {ServicePageComponent} from "./pages/service-page/service-page.component";
import {EmergencyPageComponent} from "./pages/emergency-page/emergency-page.component";
import {SpecialtiesPageComponent} from "./pages/specialties-page/specialties-page.component";
import {CalendarComponent} from "./pages/calendar/calendar.component";

export const routes: Routes = [
  //   {path: 'service-page', component: ServicePageComponent},
  {path: '', component: ServicePageComponent},
  {path: 'add-reserve', component: AddReserveComponent},
  {path: 'service-page', component: ServicePageComponent},
  {path: 'emergency-page', component: EmergencyPageComponent},
  {path: 'specialties-page', component: SpecialtiesPageComponent},
  {path: 'calendar', component: CalendarComponent}
];
