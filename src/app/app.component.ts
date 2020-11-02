import { Component } from '@angular/core';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'marvel-comics';

  loadingService: LoadingService;

  constructor(private _loadingService: LoadingService) {
    this.loadingService = this._loadingService;
  }
}
