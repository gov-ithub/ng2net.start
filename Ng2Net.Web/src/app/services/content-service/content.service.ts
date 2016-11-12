import { Injectable } from '@angular/core';
import { HttpClient } from '../httpClient/httpClient';

@Injectable()
export class ContentService {
  
  constructor(private http: HttpClient) { }

  listHtmlContents(pageNo: number = 0, pageSize: number = 0)
  {
    let obs = this.http.get(`/api/content/list?page=${pageNo}&pageSize=${pageSize}`)
    .map(result => result.json()).share();
    return obs;
  }
}
