import { Component } from '@angular/core';
import { Menu, NavService } from '../../services/nav.service';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { NgClass, NgTemplateOutlet, TitleCasePipe } from '@angular/common';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    standalone: true,
    imports: [NgClass, NgTemplateOutlet, RouterLink, TitleCasePipe, TranslateModule]
})
export class MenuComponent {

  public menuItems: Menu[] = [];
  public isOpen:boolean = false;

  constructor(public navServices: NavService) {
    this.menuItems = navServices.MENUITEMS;
  }

  openSidebar(){
    this.isOpen = true;
  }

  closeSidebar(){
    this.isOpen = false;
  }

  toggleMenu(item:Menu){
    if(!item.active){
      this.menuItems.forEach((menu) => {
        if(this.menuItems.includes(item)){
          menu.active = false;
        }
        if (!menu.children) {
          return false;
        }
        if(menu.children){
          menu.children.forEach((child) => {
            if(menu.children?.includes(item)){
              child.active = false
            }
            if(child.section){
              child.section.forEach((sectionChild) => {
                if(child.section?.includes(item)){
                  sectionChild.active = false;
                }
              })
            }
            if(child.children){
              child.children.forEach((subChild) => {
                if(child.children?.includes(item)){
                  subChild.active = false;
                }
              })
            }
          })
        }
        return
      })
    }
    item.active =! item.active;
  }
}
