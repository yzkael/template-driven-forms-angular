import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { Actor } from '../../commons/actor';
@Component({
  selector: 'app-actor-form',
  templateUrl: './actor-form.component.html',
  imports: [FormsModule, JsonPipe],
})
export class ActorFormComponent {
  skills = ['Method Acting', 'Singing', 'Dancing', 'Swordfighting'];
  model = new Actor(18, 'Tom Cruise', this.skills[3], 'CW Productions');
  submitted = false;
  onSubmit() {
    this.submitted = true;
    const myActress = new Actor(42, 'Marilyn Monroe', 'Singing');
    console.log('My actress is called ' + myActress.name); // "My actress is called Marilyn"
  }
  newActor() {
    this.model = new Actor(42, '', '');
  }
}
