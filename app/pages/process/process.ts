import {Component} from '@angular/core';
import {NavBarDirective} from '../../../www/assets/directives/navbar/navbar';
import {TranslateService, TranslatePipe} from 'ng2-translate/ng2-translate';

@Component({
  templateUrl: 'build/pages/process/process.html',
  directives: [NavBarDirective],
  pipes: [TranslatePipe]
})

export class ProcessPage {

  thisPage: string;
  selectedItem = false;

  constructor(translate: TranslateService) {  
    this.thisPage = "pages.process";

  }

  selected(selected) {
    this.selectedItem = selected;
  }

}
