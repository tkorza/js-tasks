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

abstract class Animal {
    abstract makeSound(): string

}

class Dog extends Animal {
    makeSound(): string {
        return "Гав-гав"
    }
}

class Cat extends Animal {
    makeSound(): string {
        return "Мяу"
    }
}

interface Animal_ {
    makeSound(): string
}

const dog: Animal_ = new Dog()
console.log(dog.makeSound());


const cat: Animal_ = new Cat()
console.log(cat.makeSound());
