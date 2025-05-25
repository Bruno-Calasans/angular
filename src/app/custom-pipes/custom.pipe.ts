import { TitleCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom',
})
export class CustomPipe implements PipeTransform {
  private titlePipe = new TitleCasePipe();

  transform(value: boolean, trueText?: string, falseText?: string) {
    let yesTest = trueText || 'Yes';
    let noText = falseText || 'No';

    if (value) return this.titlePipe.transform(yesTest);
    return this.titlePipe.transform(noText);
  }
}
