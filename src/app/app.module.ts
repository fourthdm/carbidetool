import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductComponent } from './pages/product/product.component';
import { ServicesComponent } from './pages/services/services.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { FooterComponent } from './common/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StubdrillComponent } from './drill/stubdrill/stubdrill.component';
import { JobberdrillComponent } from './drill/jobberdrill/jobberdrill.component';
import { ExtralongdrillComponent } from './drill/extralongdrill/extralongdrill.component';
import { CenterdrilltypeaComponent } from './drill/centerdrilltypea/centerdrilltypea.component';
import { CenterdrilltypebComponent } from './drill/centerdrilltypeb/centerdrilltypeb.component';
import { NcspotdrillComponent } from './drill/ncspotdrill/ncspotdrill.component';
import { ThroughcoolestdrillComponent } from './drill/throughcoolestdrill/throughcoolestdrill.component';
import { BurnishingdrillComponent } from './drill/burnishingdrill/burnishingdrill.component';
import { StepdrillComponent } from './drill/stepdrill/stepdrill.component';
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
import { NarrowslottingComponent } from './tslotcutter/narrowslotting/narrowslotting.component';
import { DeepslottingComponent } from './tslotcutter/deepslotting/deepslotting.component';
import { WoodrufcutterComponent } from './tslotcutter/woodrufcutter/woodrufcutter.component';
import { LongreachcutterComponent } from './tslotcutter/longreachcutter/longreachcutter.component';
import { MissionComponent } from './pages/mission/mission.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    AboutComponent,
    ProductComponent,
    ServicesComponent,
    ClientsComponent,
    FooterComponent,
    StubdrillComponent,
    JobberdrillComponent,
    ExtralongdrillComponent,
    CenterdrilltypeaComponent,
    CenterdrilltypebComponent,
    NcspotdrillComponent,
    ThroughcoolestdrillComponent,
    BurnishingdrillComponent,
    StepdrillComponent,
    StandardendmillComponent,
    ExtralongseriesendmillComponent,
    MicroendmillComponent,
    RougherendmillComponent,
    BallnseendmillComponent,
    StependmillComponent,
    RadiusendmillComponent,
    TapermillComponent,
    HolemillComponent,
    ThoughcoolestendmillComponent,
    StrightfluteComponent,
    NarrowslottingComponent,
    DeepslottingComponent,
    WoodrufcutterComponent,
    LongreachcutterComponent,
    MissionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
