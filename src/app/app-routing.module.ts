import { TajmahalComponent } from './tajmahal/tajmahal.component';
import { PetraComponent } from './petra/petra.component';
import { MachuPichuComponent } from './machu-pichu/machu-pichu.component';
import { ColosseumComponent } from './colosseum/colosseum.component';
import { ChristTheRedeemerComponent } from './christ-the-redeemer/christ-the-redeemer.component';
import { ChinawallComponent } from './chinawall/chinawall.component';
import { ChichenItzaComponent } from './chichen-itza/chichen-itza.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'chichen-itza', component: ChichenItzaComponent },
  { path: 'chinawall', component: ChinawallComponent },
  { path: 'christ-the-redeemer', component: ChristTheRedeemerComponent },
  { path: 'colosseum', component: ColosseumComponent },
  { path: 'machu-pichu', component: MachuPichuComponent },
  { path: 'petra', component: PetraComponent },
  { path: 'tajmahal', component: TajmahalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
ColosseumComponent,
ChinawallComponent,
ChichenItzaComponent,
ChristTheRedeemerComponent,
MachuPichuComponent,
PetraComponent,
TajmahalComponent
];

