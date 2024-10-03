import { Component } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { PeopleService } from '../share/services/people.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  
  constructor(
    public peopleSvc:PeopleService
  ) {
    
  }

  onFavClicked(idx:number){
    //this.people[idx].isFav = !this.people[idx].isFav
  }

  // Método para manejar el clic del botón
  async submit(nameInput: IonInput, surnameInput: IonInput, ageInput: IonInput) {
    try {
      // Obtener los elementos de entrada
      const nameElement = await nameInput.getInputElement();
      const surnameElement = await surnameInput.getInputElement();
      const ageElement = await ageInput.getInputElement();

      // Obtener los valores de los inputs
      const name = nameElement.value;
      const surname = surnameElement.value;
      const age = ageElement.value;

      this.peopleSvc.add({
        name: name,
        surname: surname,
        age: age
      });

    } catch (error) {
      console.error('Error al obtener los valores:', error);
    }
  }

}
