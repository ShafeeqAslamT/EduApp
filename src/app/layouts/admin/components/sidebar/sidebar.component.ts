import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
})
export class SidebarComponent implements OnInit {
  collapseShow = "hidden";
  constructor() { }

  ngOnInit() { }
  toggleCollapseShow(classes: any) {
    this.collapseShow = classes;
  }
  menus = [
    {
      name: 'Admin', child: [
        { name: 'Dashboard', link: '/admin/dashboard', class: 'fas fa-tv mr-2 text-sm ' },
        { name: 'Users', link: '/admin/users', class: 'fas fa-users mr-2 text-sm ' },
        { name: 'Catalogs', link: '/admin/catalogs', class: 'fas fa-book mr-2 text-sm ' },
      ]
    },
  ]
}
