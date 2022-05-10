import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatProgressSpinnerModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    SpinnerComponent
  ]
})
export class LayoutModule { }
