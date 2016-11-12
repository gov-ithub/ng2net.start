import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../../../services';

@Component({
  selector: 'app-html-list',
  templateUrl: './html-list.component.html',
  styleUrls: ['./html-list.component.css']
})
export class HtmlListComponent implements OnInit {

  private htmlContents: any[] = [];

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.contentService.listHtmlContents().subscribe(result => this.htmlContents = result);
  }

}
