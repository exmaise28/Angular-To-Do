import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private items:Item[];
  private itemInput:string;

  private color:string;
  private colors:string[];

  constructor(){
    this.items = [];
    this.items = [new Item('Milk')]; 
    this.items.push(new Item('Butter'));
    this.colors = ["blue", "green", "purple", "cyan"];
  
  }

  addItem(){
    this.items.push(new Item(this.itemInput));
    this.itemInput = "";
  }

  removeItem(item:Item){
 
    let index = this.items.findIndex ( a => {
      return a.name === item.name;})
    this.items.splice(index,1);
     }

   colorOnChange(item:Item){

     let color = this.colors[this.random()];
     item.color = color;
     }

 random():number{
     return Math.floor(Math.random() * 3);
  }
}

class Item{
  name:string;
  color:string;
  constructor(name:string){
    this.name = name;
  }
}