import { Observable, Frame } from '@nativescript/core';

export class OnboardingViewModel extends Observable {
    private _slides: Array<any>;
    private _currentIndex: number = 0;

    constructor() {
        super();
        this._slides = [
            {
                image: '~/assets/onboarding1.png',
                title: 'Welcome to Tutor AI',
                description: 'Your personal AI-powered study assistant'
            },
            {
                image: '~/assets/onboarding2.png',
                title: 'Smart Learning',
                description: 'Get instant answers to your questions and personalized study recommendations'
            },
            {
                image: '~/assets/onboarding3.png',
                title: 'Track Progress',
                description: 'Monitor your learning journey and achieve your goals'
            }
        ];
    }

    get slides(): Array<any> {
        return this._slides;
    }

    get isLastSlide(): boolean {
        return this._currentIndex === this._slides.length - 1;
    }

    onNextTap() {
        if (this.isLastSlide) {
            Frame.topmost().navigate({
                moduleName: 'components/auth/auth-page',
                clearHistory: true
            });
        } else {
            this._currentIndex++;
            this.notifyPropertyChange('isLastSlide', this.isLastSlide);
        }
    }

    onSkipTap() {
        Frame.topmost().navigate({
            moduleName: 'components/auth/auth-page',
            clearHistory: true
        });
    }
}