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

  constructor(private injectedLoadingService: LoadingService) {
    this.loadingService = this.injectedLoadingService;
  }
}
