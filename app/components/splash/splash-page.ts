import { NavigatedData, Page } from '@nativescript/core';
import { SplashViewModel } from './splash-view-model';

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new SplashViewModel();
}