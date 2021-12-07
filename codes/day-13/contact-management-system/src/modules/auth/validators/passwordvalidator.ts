import { AbstractControl, AsyncValidatorFn, FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";
//import { from, Observable, of } from "rxjs";

export const passwordValidator = (): ValidatorFn => {
    FormControl
    const validatorLoginFn = (control: AbstractControl): ValidationErrors | null => {
        console.log('in pwd validator')
        const password = <string>control.value
        const res = password.length > 6 && password.length < 12
        if (!res) {
            const error = { 'passwordError': 'length should be between 6 and 12' }
            console.log(error)
            console.log(control)
            return error
        } else {
            return null
        }
    }
    return validatorLoginFn;
}