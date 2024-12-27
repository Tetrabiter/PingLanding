import { Component } from '@angular/core';
import { featherFacebook , featherTwitter , featherInstagram} from '@ng-icons/feather-icons';
import { NgIcon, provideIcons } from '@ng-icons/core';


@Component({
  selector: 'app-footer',
  imports: [NgIcon],
  viewProviders: [provideIcons({ featherFacebook , featherTwitter , featherInstagram})],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
