import { Component } from '@angular/core';

// Como criar um componente ? 1. uma classe 2. usar decorator do angular

interface Fruit {
    name: string;
}

@Component({
    selector: 'app-fruit-list',
    templateUrl: './fruit-list.component.html' 
})
export class FruitListComponent {
    newFruit: string = ''

    fruits: Array<Fruit> = [
        {
            name:'banana'
        },
        {
            name: 'morango'
        },
        {
            name: 'abacaxi' 
        }
    ]

    addFruit() {
        const fruit : Fruit = {
            name: this.newFruit,
        }

        this.fruits.push(fruit)
        this.newFruit = ''
    }

    removeFruit(){
        this.fruits.splice(0, 1)
    }

    removeByFruit(fruit : Fruit){
        console.log(fruit)
        let removeFromIndex = this.fruits.indexOf(this.fruits.find(f => f.name === fruit.name))
        this.fruits.splice(removeFromIndex, 1)

        this.fruits.concat
    }
}

// export, export default