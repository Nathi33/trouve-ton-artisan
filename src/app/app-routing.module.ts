import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BuildingComponent } from './building/building.component';
import { ServicesComponent } from './services/services.component';
import { ManufacturingComponent } from './manufacturing/manufacturing.component';
import { FoodComponent } from './food/food.component';
import { CardComponent } from './card/card.component';
import { LegalNoticesComponent } from './legal-notices/legal-notices.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { AccessibilityComponent } from './accessibility/accessibility.component';
import { CookiesComponent } from './cookies/cookies.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'building', component: BuildingComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'manufacturing', component: ManufacturingComponent},
  {path: 'food', component: FoodComponent},
  {path: 'card', component: CardComponent},
  {path: 'legal-notices', component: LegalNoticesComponent},
  {path: 'personal-data', component: PersonalDataComponent},
  {path: 'accessibility', component: AccessibilityComponent},
  {path: 'cookies', component: CookiesComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
