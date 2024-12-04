import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-language',
    templateUrl: './language.component.html',
    styleUrls: ['./language.component.scss'],
    standalone: true,
    imports: [FormsModule]
})
export class LanguageComponent {

  public languages = [
    {
      name: 'ENG',
      code: 'en',
    },
    {
      name: 'FRE',
      code: 'fr',
    },
    {
      name: 'SPA',
      code: 'sp',
    },
    {
      name: 'DUT',
      code: 'du',
    },
  ];

  constructor(private translate: TranslateService){}

  getLanguage(event: Event){
    this.translate.use((event.target as HTMLInputElement).value)
  }
}
