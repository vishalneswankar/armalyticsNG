import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ChartsModule } from "@progress/kendo-angular-charts";
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from "@progress/kendo-angular-layout";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { IconsModule } from "@progress/kendo-angular-icons";
import { GridModule } from "@progress/kendo-angular-grid";
import { DateInputsModule } from "@progress/kendo-angular-dateinputs";
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";
import { TooltipsModule } from "@progress/kendo-angular-tooltip";
import { LabelModule } from "@progress/kendo-angular-label";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SpotterComponent } from './spotter/spotter.component';
import { kpigridComponent } from './spotter/kpigrid.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
//Custom Scrollbar
import { NgScrollbarModule } from 'ngx-scrollbar';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeadernewComponent } from './headernew/headernew.component';
import { FooternewComponent } from './footernew/footernew.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SpotterComponent,
    kpigridComponent,
    DashboardComponent,
    HeadernewComponent,
    FooternewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ChartsModule,
    LayoutModule,
    InputsModule,
    IconsModule,
    GridModule,
    DropDownsModule,
    LabelModule,
    ButtonsModule,
    DateInputsModule,
    FormsModule, 
    ReactiveFormsModule,
    TooltipsModule,
    NgScrollbarModule
    ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
