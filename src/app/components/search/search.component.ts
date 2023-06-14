import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

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

  async onSearch() {
    if (this.searchTerm) {
      this._router.navigateByUrl('/search/' + this.searchTerm);
    }
  }

}
