import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'Back to Dashboard',         icon:'nc-bank',       class: 'leftSide' },

    { path: '/dashboard',     title: 'Manage Numbers',         icon:'nc-bank',       class: 'rightSide' },
    { path: '/#',         title: 'Customer Management',             icon:'nc-diamond',    class: 'rightSide' },
    { path: '/#',          title: 'Reports',              icon:'nc-pin-3',      class: 'rightSide' },
    { path: '/#', title: 'Inbox',     icon:'nc-bell-55',    class: 'rightSide' },
    // { path: '/user',          title: 'User Profile',      icon:'nc-single-02',  class: '' },
    { path: '/order',         title: 'Orders',        icon:'nc-tile-56',    class: 'rightSide' },
    // { path: '/typography',    title: 'Typography',        icon:'nc-caps-small', class: '' },
    // { path: '/upgrade',       title: 'Upgrade to PRO',    icon:'nc-spaceship',  class: 'active-pro' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
