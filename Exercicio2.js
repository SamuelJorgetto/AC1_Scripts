class User {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  
  const users = [
    new User('John', 25),
    new User('Jane', 30),
    new User('Doe', 35),
  ];
  
  const userNamesUppercase = users.map(user => user.name.toUpperCase());
  console.log('User names in uppercase:', userNamesUppercase);
  
  const usersOver18 = users.filter(user => user.age > 18);
  console.log('Users over 18:', usersOver18);
  
  const userBetween25and30 = users.find(user => user.age >= 25 && user.age <= 30);
  console.log('First user between 25 and 30:', userBetween25and30);
  
  class Animal {
    constructor(sound) {
      this.sound = sound;
    }
  
    emitSound() {
      console.log(this.sound);
    }
  
    run() {
      console.log('Running...');
    }
  }
  
  class Dog extends Animal {
    constructor() {
      super('Woof!');
    }
  }
  
  class Cat extends Animal {
    constructor() {
      super('Meow!');
    }
  }
  
  const dog = new Dog();
  const cat = new Cat();
  
  dog.emitSound();
  cat.emitSound();
  
  dog.run();
  cat.run();
  
  class Book {
    constructor(title, pages) {
      this.title = title;
      this.pages = pages;
    }
  }
  
  const books = [
    new Book('Book 1', 200),
    new Book('Book 2', 400),
    new Book('Book 3', 500),
  ];
  
  const booksOver300Pages = books.filter(book => book.pages > 300);
  console.log('Books with more than 300 pages:', booksOver300Pages);
  
  class Car {
    constructor(brand, year) {
      this.brand = brand;
      this.year = year;
    }
  }
  
  const cars = [
    new Car('Toyota', 2005),
    new Car('Honda', 2012),
    new Car('Toyota', 2015),
  ];
  
  const firstToyota = cars.find(car => car.brand === 'Toyota');
  console.log('First Toyota:', firstToyota);
  
  const carsAfter2010 = cars.filter(car => car.year > 2010);
  console.log('Cars manufactured after 2010:', carsAfter2010);
  
  class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }
  
  const products = [
    new Product('Product 1', 10),
    new Product('Product 2', 20),
    new Product('Product 3', 30),
  ];
  
  const productsWithIncreasedPrice = products.map(product => {
    product.price *= 1.1;
    return product;
  });
  
  console.log('Products with increased price:', productsWithIncreasedPrice);
  
  const firstProductOver100 = products.find(product => product.price > 100);
  if (firstProductOver100) {
    firstProductOver100.name = 'Product Caro';
  }
  console.log('Products after renaming first product over 100:', products);
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  const evenNumbersDoubled = numbers
  .filter(num => num % 2 === 0)
  .map(num => num * 2);
  
  console.log('Even numbers doubled:', evenNumbersDoubled);
  
  const numbersDivisibleBy3 = numbers.filter(num => num % 3 === 0);
  const numbersDivisibleBy3Squared = numbersDivisibleBy3.map(num => num * num);
  console.log('Numbers divisible by 3 squared:', numbersDivisibleBy3Squared);