import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input() placeholder!: string;
  @Input() searchType!: string;

  searchTerm: string = "";

  constructor(private _route: ActivatedRoute, private _router: Router) {}

  ngOnInit(): void {
    this._route.params.subscribe(param => {
      if (param['searchTerm']) {
        console.log(param['searchTerm']);
        
        this.searchTerm = param['searchTerm'];
      }
    });
  }

  onSearchFood() {
    this.searchTerm ? this._router.navigateByUrl('/search/' + this.searchTerm) : this._router.navigateByUrl('/');
  }

  onSearchLocation() {
    
  }

}
