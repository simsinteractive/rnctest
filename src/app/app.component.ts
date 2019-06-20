import {
  Component
} from '@angular/core';
import {
  LocationSearchService
} from './locationSearch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  rows = 6;
  searchTerm = '';
  locationData: any;
  searchEvent;

  constructor(public locationService: LocationSearchService) {}

  /*
    Responds to keyup. Reads input field. Fetches data if field > 1 character
*/
  onKeyup() {
    if (this.searchEvent.length > 1) {
      this.searchTerm = this.searchEvent;
      this.getData();
    } else {
      this.locationData = [];
    }
  }

  /*
    Fetches data from locationService passing rows and term parameters
*/
  getData() {
    this.locationService
      .getData(this.rows, this.searchTerm)
      .subscribe((data) => {
        console.log(data);
        this.locationData = data['results'].docs;
      });
  }
}
