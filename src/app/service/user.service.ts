import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export type User = {
  name: string;
  username: string;
  email: string;
  subscription: 'basic' | 'premium';
};

export type Quote = {
  id: number;
  quote: string;
  author: string;
};

type QuoteResponse = {
  quotes: Quote[];
  total: number;
  skip: number;
  limit: number;
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // You can share data
  user: User = {
    name: 'Marcos',
    username: 'marcos_gostosao',
    email: 'marcos@email.com',
    subscription: 'basic',
  };

  API_URL = 'https://dummyjson.com/quotes';

  constructor(private http: HttpClient) {}

  // You can share business logic
  canAccessPremiumContent() {
    return this.user.subscription === 'premium';
  }

  // Request data
  requestQuotes() {
    return this.http.get<QuoteResponse>(this.API_URL);
  }
}
