import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactComponent } from './components/contact/contact.component';
import { PageContentComponent } from './components/page-content/page-content.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { BackgroundComponent } from './components/background/background.component';
import { SkillsComponent } from './components/skills/skills.component';
import { LicenseComponent } from './components/license/license.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    PageContentComponent,
    AboutComponent,
    ExperienceComponent,
    BackgroundComponent,
    SkillsComponent,
    LicenseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
