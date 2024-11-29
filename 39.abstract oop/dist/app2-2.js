// 2. Создайте абстрактный класс Animal (Животное) с абстрактным методом makeSound() (издатьЗвук).
// Затем создайте два дочерних класса:
// • Dog
// • Cat
// Каждый из этих классов должен наследовать Animal и реализовывать метод makeSound(),
// возвращая соответствующий звук животного.
// Входные: Dog().makeSound() → Результат: "Гав-гав"
// Объяснение: Метод makeSound() для объекта класса Dog должен вернуть звук собаки.
// Входные: Cat().makeSound() → Результат: "Мяу"
// Объяснение: Метод makeSound() для объекта класса Cat должен вернуть звук кошки
class Animal {
}
class Dog extends Animal {
    makeSound() {
        return "Гав-гав";
    }
}
class Cat extends Animal {
    makeSound() {
        return "Мяу";
    }
}
const dog = new Dog();
console.log(dog.makeSound());
const cat = new Cat();
console.log(cat.makeSound());
