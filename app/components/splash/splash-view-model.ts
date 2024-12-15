import { Observable, Frame } from '@nativescript/core';

export class SplashViewModel extends Observable {
    constructor() {
        super();
        this.initSplash();
    }

    private async initSplash() {
        // Simulate loading time
        await new Promise(resolve => setTimeout(resolve, 2000));
        Frame.topmost().navigate({
            moduleName: 'components/onboarding/onboarding-page',
            clearHistory: true
        });
    }
}