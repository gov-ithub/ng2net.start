import { Component, OnInit } from '@angular/core';
import { ContentService, HttpClient } from '../../../../services';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {

  private htmlContents: any[] = [];
  private filterQuery: string = '';

  constructor(private contentService: ContentService, private http: HttpClient) { }

  ngOnInit() {
    this.search();
  }

  search(){
    this.contentService.listHtmlContents(this.filterQuery).subscribe(result => this.htmlContents = result);
  }

}
