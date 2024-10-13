import { Injectable } from '@angular/core';
import DOMPurify from 'dompurify';

@Injectable({
  providedIn: 'root'
})
export class SanitizerService {
  constructor() { }

  sanitize(html: string): string {
    return DOMPurify.sanitize(html);
  }
}
