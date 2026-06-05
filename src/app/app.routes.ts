import { Routes } from '@angular/router';
import { Main } from './main/main';
import { Legal } from './legal/legal';

export const routes: Routes = [
    { path: '', component: Main },
    { path: 'legal', component: Legal },
    { path: '**', redirectTo: ''}
];
