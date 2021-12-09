import { Component } from '@angular/core';

import { Product } from './components/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'victor-store';

  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 80000,
      description: 'Camiseta producto'
    },
    {
      id: '2',
      image: 'assets/images/hoodie.png',
      title: 'Hoodie',
      price: 80000,
      description: 'Hoodie producto'
    },
    {
      id: '3',
      image: 'assets/images/mug.png',
      title: 'Mug',
      price: 80000,
      description: 'Mug producto'
    },
    {
      id: '4',
      image: 'assets/images/pin.png',
      title: 'Pin',
      price: 80000,
      description: 'Pin producto'
    },
    {
      id: '5',
      image: 'assets/images/stickers1.png',
      title: 'Sticker #1',
      price: 80000,
      description: 'Sticker 1 producto'
    },
    {
      id: '6',
      image: 'assets/images/stickers2.png',
      title: 'Sticker #2',
      price: 80000,
      description: 'Stickers 2 producto'
    },
  ];

  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }
}
