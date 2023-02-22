import { Component , EventEmitter , Output} from '@angular/core';

@Component({
  selector: 'app-pop-up-form',
  templateUrl: './pop-up-form.component.html',
  styleUrls: ['./pop-up-form.component.scss']
})
export class PopUpFormComponent {
  @Output() formSubmit: EventEmitter<any> = new EventEmitter();
  @Output() formClose: EventEmitter<any> = new EventEmitter();
  onSubmit(event : Event) {
    event.preventDefault();
    this.formSubmit.emit();
  }
  onClose() {
    this.formClose.emit();
  }
}
