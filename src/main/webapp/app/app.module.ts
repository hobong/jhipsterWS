import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JhipsterWsSharedModule } from 'app/shared/shared.module';
import { JhipsterWsCoreModule } from 'app/core/core.module';
import { JhipsterWsAppRoutingModule } from './app-routing.module';
import { JhipsterWsHomeModule } from './home/home.module';
import { JhipsterWsEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JhipsterWsSharedModule,
    JhipsterWsCoreModule,
    JhipsterWsHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JhipsterWsEntityModule,
    JhipsterWsAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class JhipsterWsAppModule {}
