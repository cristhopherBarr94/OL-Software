import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UiService } from 'src/app/_services/ui.service';
// import { LoadingComponent } from './../../../../utils/components/loading/loading.component';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss'],
})
export class CreateFormComponent implements OnInit {
  public createForm: FormGroup;
  public hide: boolean;
  public password: string;

  constructor(private formBuilder: FormBuilder, private uiService: UiService) {}

  ngOnInit() {
    this.initforms();
  }

  initforms() {
    this.createForm = this.formBuilder.group({
      first_names: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
      ]),
      last_names: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.maxLength(250),
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(10),
      ]),
      identification: new FormControl('', [
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(12),
      ]),
      state: new FormControl(null, Validators.required),
      rol: new FormControl(null, Validators.required),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }

  public inputValidatorNumeric(event: any) {
    const pattern = /^[0-9]*$/;
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^0-9]/g, '');
    }
  }

  public inputValidatorAlphabetical(event: any) {
    const pattern = /^[a-zA-ZnÑ ]*$/;
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^a-zA-ZnÑ ]/g, '');
    }
  }

  public inputValidatorAlphaNumeric(event: any) {
    const pattern = /^[a-zA-ZnÑ0-9 ]*$/;
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^a-zA-ZnÑ0-9 ]/g, '');
    }
  }

  public getClassInput(item: any): string {
    let classreturn = 'input-ol';
    if (item.valid) {
      classreturn = 'input-ol-ok';
    } else if (item.touched) {
      classreturn = 'input-ol-error';
    }
    return classreturn;
  }

  public getClassInputSelect(item: any): string {
    let classreturn = 'select-ol';
    if (item.valid) {
      classreturn = 'select-ol-ok';
    } else if (item.touched) {
      classreturn = 'select-ol-error';
    }
    return classreturn;
  }

  public getMessageform(
    item: any,
    name: string,
    min?: number,
    max?: number
  ): string {
    if (item.hasError('required')) {
      return 'Este campo es obligatorio';
    } else if (item.hasError('maxlength')) {
      return 'Máximo ' + max;
    } else if (item.hasError('minlength')) {
      return 'Mínimo ' + min;
    } else if (
      item.hasError('email') ||
      (item.hasError('pattern') && name === 'email')
    ) {
      return 'Ingrese una dirección de correo electrónico válida';
    } else if (item.hasError('pattern')) {
      return 'Ingrese solo letras';
    }
  }
  public closeForm() {
    this.uiService.closeDialog();
  }
  public createUser() {}
}
