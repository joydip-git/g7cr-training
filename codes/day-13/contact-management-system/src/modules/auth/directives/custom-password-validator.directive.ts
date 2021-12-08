import { Directive, Input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";
import { customPasswordValidatorFactory } from "../validators/passwordvalidator";

@Directive({
    selector: '[appCustomPasswordValidator]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: CustomPasswordValidatorDirective,
            multi: true
        }
    ]
})
export class CustomPasswordValidatorDirective implements Validator {

    //@Input() appCustomPasswordValidator: number = 0;
    constructor() {
        console.log('directive created')
    }
    validate(control: AbstractControl): ValidationErrors | null {
        const validatorLogicFn = customPasswordValidatorFactory()
        return validatorLogicFn(control)
    }

}