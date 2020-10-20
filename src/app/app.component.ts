import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'seven wonders';
  sevenWonders = [
    { name: 'Tajmahal', image: '\assets\images\Taj_Mahal.jpg', link: '/tajmahal'},
    { name: 'Chichen-Itza', image: '\assets\images\Chichen-Itza.jfif', link: '/chichen-itza'},
    { name: 'Christ_the_redeemer', image: '\assets\images\Christ_the_redeemer.jpg', link: '/christ-the-redeemer'},
    { name: 'Colosseum', image: '\assets\images\Colosseum.jpg', link: '/colosseum'},
    { name: 'Machu_Picchu', image: '\assets\images\Machu_Picchu.jpg', link: '/machu-pichu'},
    { name: 'Petra', image: '\assets\images\Petra.jpg', link: '/petra'},
    { name: 'The_Great_Wall_of_China', image: '\assets\images\The_Great_Wall_of_China.jpg', link: '/chinawall'}
  ];
}
