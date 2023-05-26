import { Injectable } from '@angular/core';
import { IFood } from 'src/app/shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): IFood[] {
    return [
      {
        id: 1,
        name: 'Pizza de Pepperoni',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['Itália'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/food-1.jpg',
        tags: ['FastFood', 'Pizza', 'Lanche'],
      },
      {
        id: 2,
        name: 'Almôndegas',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['Pérsia', 'Oriente Médio', 'China'],
        stars: 4.7,
        imageUrl: '/assets/images/foods/food-2.jpg',
        tags: ['SlowFood', 'Almoço'],
      },
      {
        id: 3,
        name: 'Hamburger',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['Alemanha', 'USA'],
        stars: 3.5,
        imageUrl: '/assets/images/foods/food-3.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 4,
        name: 'Batata Frita',
        price: 2,
        cookTime: '15-20',
        favorite: true,
        origins: ['Bélgica', 'França'],
        stars: 3.3,
        imageUrl: '/assets/images/foods/food-4.jpg',
        tags: ['FastFood', 'Fritos'],
      },
      {
        id: 5,
        name: 'Sopa de Galinha',
        price: 11,
        cookTime: '40-50',
        favorite: false,
        origins: ['Índia', 'Ásia'],
        stars: 3.0,
        imageUrl: '/assets/images/foods/food-5.jpg',
        tags: ['SlowFood', 'Sopa'],
      },
      {
        id: 6,
        name: 'Pizza de Vegetais',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['Itália'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/food-6.jpg',
        tags: ['FastFood', 'Pizza', 'Lanche'],
      }
    ]
  }
}
