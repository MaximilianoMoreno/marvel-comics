import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private defaultLoadingMessage = 'Loading';

  loadingMessage: string;

  private overlayActive: boolean;

  constructor() {
    this.loadingMessage = '';

    this.overlayActive = true;
  }

  getLoadingMessage(): string {
    return this.loadingMessage;
  }

  activateOverlay(message?: string) {
    // If the user supplies a loading message, then use it, otherwise
    // show the default text string
    //
    this.loadingMessage = message || this.defaultLoadingMessage;

    this.overlayActive = true;
  }

  deactivateOverlay() {
    // Reset the loading message if there is any artifact residual
    //
    this.loadingMessage = '';

    // Deactivate the overlay itself
    //
    this.overlayActive = false;
  }

  isOverlayActive(): boolean {
    return this.overlayActive;
  }
}
