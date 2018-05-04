import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  ngOnInit() {
    this.dropdownList = [
      { 'id': 1, 'name': 'Java' },
      { 'id': 2, 'name': 'Angular' },
      { 'id': 3, 'name': 'PHP' },
      { 'id': 4, 'name': 'WordPress' },
      { 'id': 5, 'name': 'Node.js' },
      { 'id': 6, 'name': 'Android' },
      { 'id': 7, 'name': 'IOS' },
      { 'id': 8, 'name': 'Magento' },
      { 'id': 9, 'name': 'Codeigniter' },
      { 'id': 10, 'name': 'Python' }
    ];
    this.selectedItems = [1, 2, 3, 5];
    this.dropdownSettings = {
      singleSelection: false,
      text: 'Select languages',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: 'myclass custom-class',
      maxHeight: '100px',
      allowClear: false
    };
  }
}
