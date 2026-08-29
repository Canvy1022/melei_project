import { Component } from '@angular/core';
import { HeroSection } from "../shared/hero-section/hero-section";
import { RouterOutlet } from "../../../../node_modules/@angular/router/types/_router_module-chunk";

@Component({
  selector: 'app-home',
  imports: [HeroSection],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
