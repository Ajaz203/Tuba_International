import { Component } from '@angular/core';
import { footerNewTopic } from '../../../data/data/footer';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-new-topic',
    templateUrl: './new-topic.component.html',
    styleUrls: ['./new-topic.component.scss'],
    standalone: true,
    imports: [RouterLink]
})
export class NewTopicComponent {

  public footerNewTopic = footerNewTopic;

}
