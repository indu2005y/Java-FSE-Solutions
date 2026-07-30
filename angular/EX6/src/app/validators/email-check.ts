import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, delay } from 'rxjs/operators';

export function simulateEmailCheck(
  control: AbstractControl
): Observable<any> {

  const email = control.value;

  return of(email).pipe(

    delay(800),

    map(value => {

      if (value === 'test@gmail.com') {
        return {
          emailTaken: true
        };
      }

      return null;

    })

  );

}