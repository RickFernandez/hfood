import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Output() filterApplied = new EventEmitter<string>();

  applyFilter(filter: string | null): void {
    if (filter) {
      this.filterApplied.emit(filter);
    }
  }
}
