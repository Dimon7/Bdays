import { Injectable } from '@angular/core';

interface IStorage{
  get(key: string): string;
  set<T>(key: string, value: string): void;
}

@Injectable({
  providedIn: 'root'
})
export class StorageService implements IStorage{

  constructor() { }

  get<T>(key: string): T {
    return JSON.parse(localStorage.getItem(key));
  }

  set<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
