import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent implements OnInit{

  items: MenuItem[] | undefined;

  constructor(
    private readonly router: Router
  ){}

  ngOnInit() {
    this.items = [
        {
          label: 'Clients',
          command: () => {
            this.redirect();
          }
        }
    ];
  }

  redirect(): void {
    this.router.navigateByUrl('clients');
  }

}
