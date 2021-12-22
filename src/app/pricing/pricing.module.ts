import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  FeaturesComponent,
  NavbarComponent,
  PricingComponent,
  SwitchComponent
} from './components';
import { SliderComponent } from './components/slider.component';
import { PricingPageComponent } from './containers';
import { PricingRoutingModule } from './pricing-routing.module';

const COMPONENTS = [
  SliderComponent,
  NavbarComponent,
  PricingComponent,
  SwitchComponent,
  FeaturesComponent,
];
const CONTAINERS = [PricingPageComponent];

@NgModule({
  imports: [CommonModule, PricingRoutingModule],
  declarations: [COMPONENTS, CONTAINERS],
})
export class PricingModule {}
