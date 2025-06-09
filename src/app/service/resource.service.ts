import { HttpClient } from '@angular/common/http';
import { Injectable, inject, resource } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { Quote } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class ResourceService {
  private http = inject(HttpClient);
  dataUrl = 'https://dummyjson.com/quotes';

  getAllQuotes() {
    return this.http.get<{ quotes: Quote[] }>(this.dataUrl);
  }

  getAllQuotesAsync() {
    return fetch(this.dataUrl).then(
      (res) => res.json() as Promise<{ quotes: Quote[] }>
    );
  }

  rxResourceData = rxResource({
    loader: (params) => this.getAllQuotes(),
  });

  resourceData = resource({
    loader: (params) => this.getAllQuotesAsync(),
  });
}
