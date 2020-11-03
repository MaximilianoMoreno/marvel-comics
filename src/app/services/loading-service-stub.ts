export const LoadingServiceStub = {
  getLoadingMessage(): string {
    return 'test';
  },

  activateOverlay(message?: string): void {},

  deactivateOverlay(): void {},

  isOverlayActive(): boolean {
    return true;
  },
};
