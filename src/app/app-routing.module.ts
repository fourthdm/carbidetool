import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ProductComponent } from './pages/product/product.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { StubdrillComponent } from './drill/stubdrill/stubdrill.component';
import { JobberdrillComponent } from './drill/jobberdrill/jobberdrill.component';
import { StandardendmillComponent } from './endmill/standardendmill/standardendmill.component';
import { ExtralongseriesendmillComponent } from './endmill/extralongseriesendmill/extralongseriesendmill.component';
import { MicroendmillComponent } from './endmill/microendmill/microendmill.component';
import { RougherendmillComponent } from './endmill/rougherendmill/rougherendmill.component';
import { BallnseendmillComponent } from './endmill/ballnseendmill/ballnseendmill.component';
import { StependmillComponent } from './endmill/stependmill/stependmill.component';
import { RadiusendmillComponent } from './endmill/radiusendmill/radiusendmill.component';
import { TapermillComponent } from './endmill/tapermill/tapermill.component';
import { HolemillComponent } from './endmill/holemill/holemill.component';
import { ThoughcoolestendmillComponent } from './endmill/thoughcoolestendmill/thoughcoolestendmill.component';
import { StrightfluteComponent } from './reamer/strightflute/strightflute.component';
import { DeepslottingComponent } from './tslotcutter/deepslotting/deepslotting.component';
import { LongreachcutterComponent } from './tslotcutter/longreachcutter/longreachcutter.component';
import { NarrowslottingComponent } from './tslotcutter/narrowslotting/narrowslotting.component';
import { WoodrufcutterComponent } from './tslotcutter/woodrufcutter/woodrufcutter.component';
import { BurnishingdrillComponent } from './drill/burnishingdrill/burnishingdrill.component';
import { CenterdrilltypeaComponent } from './drill/centerdrilltypea/centerdrilltypea.component';
import { CenterdrilltypebComponent } from './drill/centerdrilltypeb/centerdrilltypeb.component';
import { ExtralongdrillComponent } from './drill/extralongdrill/extralongdrill.component';
import { NcspotdrillComponent } from './drill/ncspotdrill/ncspotdrill.component';
import { StepdrillComponent } from './drill/stepdrill/stepdrill.component';
import { ThroughcoolestdrillComponent } from './drill/throughcoolestdrill/throughcoolestdrill.component';
import { MissionComponent } from './pages/mission/mission.component';
import { ValuesComponent } from './pages/values/values.component';
import { StrengthComponent } from './pages/strength/strength.component';
import { CapabilitiesComponent } from './pages/capabilities/capabilities.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'service', component: ServicesComponent },
  { path: 'product', component: ProductComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'mission', component: MissionComponent },
  { path: 'values', component: ValuesComponent },
  { path: 'strength', component: StrengthComponent },
  { path: 'capabilities', component: CapabilitiesComponent },
  { path: 'client', component: ClientsComponent },

  { path: 'stubdrill', component: StubdrillComponent },
  { path: 'jobberdrill', component: JobberdrillComponent },
  { path: 'burnshingdrill', component: BurnishingdrillComponent },
  { path: 'centerdrilltypeA', component: CenterdrilltypeaComponent },
  { path: 'centerdrilltypeB', component: CenterdrilltypebComponent },
  { path: 'extralongdrill', component: ExtralongdrillComponent },
  { path: 'ncspotdrill', component: NcspotdrillComponent },
  { path: 'stepdrill', component: StepdrillComponent },
  { path: 'throughcoolestdrill', component: ThroughcoolestdrillComponent },

  { path: 'stadardendmill', component: StandardendmillComponent },
  { path: 'extralongendmill', component: ExtralongseriesendmillComponent },
  { path: 'microendmill', component: MicroendmillComponent },
  { path: 'rougherendmill', component: RougherendmillComponent },
  { path: 'ballnoseendmill', component: BallnseendmillComponent },
  { path: 'stependmill', component: StependmillComponent },
  { path: 'radiusendmill', component: RadiusendmillComponent },
  { path: 'taperendmill', component: TapermillComponent },
  { path: 'holeendmill', component: HolemillComponent },
  { path: 'throughcoolestendmill', component: ThoughcoolestendmillComponent },

  { path: 'strightflute', component: StrightfluteComponent },

  { path: 'deepslotting', component: DeepslottingComponent },
  { path: 'longreachcutter', component: LongreachcutterComponent },
  { path: 'narrowslotting', component: NarrowslottingComponent },
  { path: 'woodruffcutter', component: WoodrufcutterComponent },

  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
