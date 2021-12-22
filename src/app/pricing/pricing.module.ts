import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  BillingComponent,
  FeaturesComponent,
  NavbarComponent,
  PricingComponent,
  SwitchComponent
} from './components';
import { SliderComponent } from './components/slider/slider.component';
import { PricingPageComponent } from './containers';
import { PricingRoutingModule } from './pricing-routing.module';

const COMPONENTS = [
  SliderComponent,
  NavbarComponent,
  PricingComponent,
  SwitchComponent,
  FeaturesComponent,
  BillingComponent,
];
const CONTAINERS = [PricingPageComponent];

@NgModule({
  imports: [CommonModule, PricingRoutingModule, ReactiveFormsModule],
  declarations: [COMPONENTS, CONTAINERS],
})
export class PricingModule {}
