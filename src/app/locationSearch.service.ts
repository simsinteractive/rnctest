import {
  HttpClient
} from '@angular/common/http';
import {
  Injectable
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LocationSearchService {
  // url = 'https://cors.io/?https://www.rentalcars.com/FTSAutocomplete.do';
  url = 'https://www.rentalcars.com/FTSAutocomplete.do';

  constructor(private http: HttpClient) {}

  /*
    Fetches data from service
*/
  getData(rows: number, searchTerm: string) {
    return this.http.get(this.url + '?solrIndex=fts_en&solrRows=' + rows + '&solrTerm=' + searchTerm);
  }

}
