import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './features/footer/footer';
import { Header } from './features/header/header';
import { Home } from "./features/home/home";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Home],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('melei-cake-shop');
}
