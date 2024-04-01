import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-job',
  templateUrl: './filter-job.component.html',
  styleUrl: './filter-job.component.scss'
})
export class FilterJobComponent {
  nameDoamin: string | null = null
  nameLocation: string | null = null

  @Output('filterChange') filterChange: EventEmitter<any> = new EventEmitter<any>()

  filter() {
    this.filterChange.emit({ nameDoamin: this.nameDoamin, nameLocation: this.nameLocation });
    this.nameDoamin = null
    this.nameLocation = null
  }
}
