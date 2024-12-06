import {Component, inject, OnInit} from '@angular/core';
import {OidcSecurityService} from "angular-auth-oidc-client";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {Client} from "../../model/client";
import {ClientService} from "../../services/client/client.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './home-page.component.html',
  imports: [
    FormsModule
  ],
  standalone: true,
  styleUrl: './home-page.component.css'
})

export class HomePageComponent implements OnInit {
  private readonly oidcSecurityService = inject(OidcSecurityService);
  private readonly router = inject(Router);
  private readonly clientService = inject(ClientService);
  isAuthenticated = false;
  clients: Array<Client> = [];

  ngOnInit(): void {
    this.oidcSecurityService.isAuthenticated$.subscribe(
      ({isAuthenticated}) => {
        this.isAuthenticated = isAuthenticated;
        this.clientService.getClients()
          .pipe()
          .subscribe(client => {
            this.clients = client;
          })
      }
    )
  }
}
