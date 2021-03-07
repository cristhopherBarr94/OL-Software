import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PeriodicElement, ELEMENT_DATA } from 'src/app/_mocks/users';
@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
})
export class RolesComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'first_name',
    'last_name',
    'identification',
    'role',
    'state',
    'phone',
    'email',
    'action',
  ];
  public dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  public searchForm: FormGroup;
  public hide: boolean;
  public password: string;
  public showLoading: boolean;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private formBuilder: FormBuilder) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.initforms();
  }

  initforms() {
    this.searchForm = this.formBuilder.group({
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

  public searchUser() {
    if (this.searchForm.valid) {
      // TODO http request to get access key
      this.showLoading = true;
      setTimeout(() => {
        this.showLoading = false;
      }, 2000);
    } else {
      (<any>Object).values(this.searchForm.controls).forEach((control) => {
        control.markAsTouched();
      });
    }
  }

  public clearForm() {
    this.searchForm.reset();
    this.searchForm.markAsUntouched();
  }
}
