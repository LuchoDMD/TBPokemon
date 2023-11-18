import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators {
  static securePassword(control: AbstractControl): ValidationErrors | null 
  {
    const password: string = control.value;

    // Verificar si la contraseña cumple con los requisitos
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasThreeNumbers = /\d.*\d.*\d/.test(password);

    if (!hasSpecialChar || !hasUpperCase || !hasThreeNumbers) {
      return { invalidPassword: true };
    }

    return null;
  }

  static matchPassword(
    primaryControlName: string,
    confirmControlName: string
  ): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const primaryControl = control.get(primaryControlName);
      const confirmControl = control.get(confirmControlName);

      // Verificar si las contraseñas coinciden
      if (
        primaryControl && confirmControl &&
        primaryControl.value !== confirmControl.value
      ) {
        return { passwordsNotMatch: true };
      }

      return null;
    };
  }
}

