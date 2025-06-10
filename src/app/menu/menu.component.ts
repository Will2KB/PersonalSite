import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgClass],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
	isOpenMenu: boolean = false;

	constructor(private router:Router){}
	
	openMenu(): void {
		this.isOpenMenu = true;
	}

	closeMenu(): void {
		this.isOpenMenu = false;
	}
	
	navigateTo(page:string):void{
		this.router.navigateByUrl(page);
		this.closeMenu();
	}
}
