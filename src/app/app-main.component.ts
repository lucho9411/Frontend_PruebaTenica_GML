import { Component, AfterViewInit, OnDestroy, Renderer2, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppComponent } from './app.component';

@Component({
  selector: 'app-app-main',
  templateUrl: './app-main.component.html',
  styleUrl: './app-main.component.scss'
})
export class AppMainComponent {

  public menuInactiveDesktop: boolean;

  public menuActiveMobile: boolean;

  public overlayMenuActive: boolean;

  public staticMenuInactive: boolean = false;

  public profileActive: boolean;

  public topMenuActive: boolean;

  public topMenuLeaving: boolean;

  public theme: string;

  documentClickListener: () => void;

  menuClick: boolean;

  topMenuButtonClick: boolean;

  configActive: boolean;

  configClick: boolean;

  subscription: Subscription;
  
  constructor(public renderer: Renderer2, public app: AppComponent) { }

  ngAfterViewInit() {
      // hides the overlay menu and top menu if outside is clicked
      this.documentClickListener = this.renderer.listen('body', 'click', (event) => {
          if (!this.isDesktop()) {
              if (!this.menuClick) {
                  this.menuActiveMobile = false;
              }

              if (!this.topMenuButtonClick) {
                  this.hideTopMenu();
              }
          }
          else {
              if (!this.menuClick && this.isOverlay()) {
                  this.menuInactiveDesktop = true;
              }
              if (!this.menuClick){
                  this.overlayMenuActive = false;
              }
          }

          if (this.configActive && !this.configClick) {
              this.configActive = false;
          }

          this.configClick = false;
          this.menuClick = false;
          this.topMenuButtonClick = false;
      });
  }

  toggleMenu(event: Event) {
      this.menuClick = true;

      if (this.isDesktop()) {
          if (this.app.menuMode === 'overlay') {
              if(this.menuActiveMobile === true) {
                  this.overlayMenuActive = true;
              }

              this.overlayMenuActive = !this.overlayMenuActive;
              this.menuActiveMobile = false;
          }
          else if (this.app.menuMode === 'static') {
              this.staticMenuInactive = !this.staticMenuInactive;
          }
      }
      else {
          this.menuActiveMobile = !this.menuActiveMobile;
          this.topMenuActive = false;
      }

      event.preventDefault();
  }

  hideTopMenu() {
    this.topMenuLeaving = true;
    setTimeout(() => {
        this.topMenuActive = false;
        this.topMenuLeaving = false;
    }, 1);
  }

  isDesktop() {
    return window.innerWidth > 1024;
  }

  isMobile(){
      return window.innerWidth < 1024;
  }

  isStatic() {
    return this.app.menuMode === 'static';
  }

  isOverlay() {
      return this.app.menuMode === 'overlay';
  }


}
