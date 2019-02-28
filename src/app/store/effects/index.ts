import {AppEffects} from './app.effects';
import {Type} from '@angular/core';

export * from './app.effects';
export * from './router.effect';

export const rootEffects: Type<any>[] = [
  AppEffects
];
