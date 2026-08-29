import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-hero-section',
  imports: [MatButtonModule],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})
export class HeroSection {

    public currengtIndex = 0

      herosData: { title: string; subtitle: string; subtitle2: string; image: string }[] = [
        {
            title: "Design Your Imagination",
            subtitle:
                "Discover endless possibilities with thoughtfully crafted blocks and a Design Studio that lets you create, customize, and bring your ideas to life — one meaningful build at a time.",
            subtitle2: "Not just toys — timeless experiences.",
            image: "../../../assets/cake-1.jpeg",
        },
    ]


}
