import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FactsService {
    _facts: String[];

  constructor() {
    this._facts = new Array<String>();
    this._facts.push('24 - Hour Service Is the Number One Chatbot Benefit');
    this._facts.push('In the productivity category, chatbots outperform apps in all aspects of functionality and is more cost-effective.');
    this._facts.push('Chatbots will not entirely replace humans. Rather they will become the first-level support that filters a customer request and save you time.');
    this._facts.push('Per year there are a reported 265 Billion Customer Requests. Businesses spent nearly $1.3 trillion to service these requests. Using Chatbots can help you save upto 30% of this.');
    this._facts.push('Data from Google Trends shows over the last five years, search volume around chatbots grew 19x as individuals and businesses began to realize their value.');
    this._facts.push('The biggest benefits of using a chatbot: 64% – the top benefit is the ability to get 24-hour service, 55% -getting instant responses to inquiries, 55% – getting answers to simple questions.');
    this._facts.push('In a survey by LivePerson, 38% of people surveyed felt positive about their chatbots experiences, while only 11% felt negative.');
    this._facts.push('Chatbots Are Equally Popular Among Millennials and Baby Boomers.');
  }

  get facts() {
    return this._facts;
  }
}
