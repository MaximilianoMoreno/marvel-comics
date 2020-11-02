import { TestBed } from '@angular/core/testing';

import { LoadingService } from './loading.service';

describe('LoadingService', () => {
  let loadingService: LoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [LoadingService],
    });

    loadingService = TestBed.get(LoadingService);
  });

  it('should create an instance', () => {
    const service = new LoadingService();

    expect(service).toBeTruthy();
  });

  describe('getLoadingMessage()', () => {
    it('should return the loading message', () => {
      // Seed the loading message
      //
      loadingService.loadingMessage = 'Loading Spec Test';

      const loadingMessage = loadingService.getLoadingMessage();

      expect(loadingMessage).toEqual('Loading Spec Test');
    });
  });

  describe('activateOverlay()', () => {
    it('should activate the overlay and set the loading message', () => {
      loadingService.activateOverlay('Activate Loading Overlay Spec Test');

      // Expect a couple of things afterwards
      //
      // Expect that the loading message was set
      //
      expect(loadingService.getLoadingMessage()).toEqual('Activate Loading Overlay Spec Test');

      // Expect the overlay to be active
      //
      expect(loadingService.isOverlayActive()).toBeTruthy();
    });

    it('should activate the overlay and set the default loading message', () => {
      loadingService.activateOverlay();

      // Expect a couple of things afterwards
      //
      // Expect that, since we didn't pass in any string, the default string was used
      //
      expect(loadingService.getLoadingMessage()).toEqual('Loading');

      // Expect that the overlay is active
      //
      expect(loadingService.isOverlayActive()).toBeTruthy();
    });
  });

  describe('deactivateOverlay()', () => {
    it('should deactivate the overlay and clear the loading message', () => {
      loadingService.deactivateOverlay();

      // Expect a couple of things afterwards
      //
      // Expect that the loading message was cleared
      //
      expect(loadingService.getLoadingMessage()).toEqual('');

      // Expect the overlay to be deactivated
      //
      expect(loadingService.isOverlayActive()).toBeFalsy();
    });
  });
});
