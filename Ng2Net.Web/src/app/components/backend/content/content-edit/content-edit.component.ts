import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ContentService } from '../../../../services';

@Component({
  selector: 'app-content-edit',
  templateUrl: './content-edit.component.html',
  styleUrls: ['./content-edit.component.css']
})
export class ContentEditComponent implements OnInit {

  @Input()
  private htmlContent: any = {};
  private parentComponent: any = {};
  private result: string;

  constructor(private activeModal: NgbActiveModal, private contentService: ContentService ) { }

  ngOnInit() {
    
  }

  save() {
    this.contentService.saveHtmlContent(this.htmlContent).subscribe(result=> { 
      this.htmlContent=result;
      this.result = "Informatiile au fost salvate";
      this.parentComponent.refresh(); });
  }
}
