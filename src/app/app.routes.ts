import { Routes } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ProjetsComponent } from './projets/projets.component';
import { CodeComponent } from './code/code.component';
import { ContactComponent } from './contact/contact.component';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes =  [
                        { path: '', redirectTo: 'home', pathMatch: 'full' },
						{ path: 'home', component: HomePageComponent },
                        { path: 'cv', component: CvComponent },
                        { path: 'presentation', component: PresentationComponent },
                        { path: 'code', component: CodeComponent },
                        { path: 'projets', component: ProjetsComponent },
                        { path: 'contact', component: ContactComponent }
                      ];
