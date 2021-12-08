import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const customPasswordValidatorFactory = (): ValidatorFn => {

    const customPasswordValidatorFn = (control: AbstractControl): ValidationErrors | null => {
        const password = control.value
        if (!(password.length >= 6 && password.length <= 16)) {
            // return { 'passwordError': `length should be between 6 and 16, current length is ${password.length}` }
            return { 'passwordLengthError': true }
        }

        let hasUppercase = false
        for (let index = 0; index < password.length; index++) {
            const char = password[index];
            if (char >= 'A' && char <= 'Z') {
                hasUppercase = true
                break
            }
        }

        if (!hasUppercase)
            // return { 'passwordError': `at least one uppercase shoud be present` }
            return { 'passwordUppercaseError': true }


        return null
    }

    return customPasswordValidatorFn
}