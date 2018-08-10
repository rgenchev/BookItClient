import { Component } from '@angular/core';

import { FavoritesPage } from '../favorites/favorites';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ReservationsPage } from '../reservations/reservations';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FavoritesPage;
  tab3Root = ContactPage;
  tab4Root = ReservationsPage;
  tab5Root = ProfilePage;

  constructor() {

  }
}
