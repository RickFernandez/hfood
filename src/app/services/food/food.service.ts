import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Pizza de Pepperoni',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['Itália'],
        stars: 1,
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
        stars: 2,
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
        stars: 4,
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
        stars: 5,
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
        stars: 4.5,
        imageUrl: '/assets/images/foods/food-6.jpg',
        tags: ['FastFood', 'Pizza', 'Lanche'],
      }
    ];
  };

  getAllTags(): Tag[] {
    return [
      { name: "Todos", count: 6 },
      { name: "FastFood", count: 4 },
      { name: "Pizza", count: 2 },
      { name: "Lanche", count: 2 },
      { name: "SlowFood", count: 2 },
      { name: "Hamburger", count: 1 },
      { name: "Fritos", count: 1 },
      { name: "Sopa", count: 1 },
    ];
  };

  getAllFoodBytag(tag: string): Food[] {
    return tag == "Todos" ? this.getAll() : this.getAll().filter(food => food.tags.includes(tag));
  };

  getAllFoodBySearchTerm(searchTerm: string): Food[] {
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  };

  getFoodById(id: number): Food {
    return this.getAll().find(food => food.id == id)!;
  };

  getFoodByFavorite(): Food[] {
    return this.getAll().filter(food => food.favorite);
  }

  getFoodByMinRating(minRating: number): Food[] {
    return this.getAll().filter(food => food.stars >= minRating);
  }
  
  orderByPriceAscending(): Food[] {
    return this.getAll().sort((a, b) => a.price - b.price);
  }
  
  orderByPriceDescending(): Food[] {
    return this.getAll().sort((a, b) => b.price - a.price);
  }
  
  orderByRateAscending(): Food[] {
    return this.getAll().sort((a, b) => a.stars - b.stars);
  }
  
  orderByRateDescending(): Food[] {
    return this.getAll().sort((a, b) => b.stars - a.stars);
  }
  
}
