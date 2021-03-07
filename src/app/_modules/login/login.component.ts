import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingComponent } from '../utils/components/loading/loading.component';
import { UiService } from 'src/app/_services/ui.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public userLoginForm: FormGroup;
  public hide: boolean;
  public password: string;
  public showLoading: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private uiService: UiService
  ) {}

  ngOnInit() {
    this.initforms();
  }

  initforms() {
    this.userLoginForm = this.formBuilder.group({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.maxLength(250),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
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

  public getMessageform(item: any, name: string): string {
    if (item.hasError('email')) {
      return 'Ingrese una dirección de correo electrónico válida';
    }
  }

  public loginUser() {
    if (this.userLoginForm.valid) {
      // TODO http request to get access key
      this.uiService.openDialog(LoadingComponent, 'loading-modal', true);
      setTimeout(() => {
        this.uiService.closeDialog();
        this.router.navigate(['home'], { queryParamsHandling: 'preserve' });
      }, 2000);
    } else {
      (<any>Object).values(this.userLoginForm.controls).forEach((control) => {
        control.markAsTouched();
      });
    }
  }
}
