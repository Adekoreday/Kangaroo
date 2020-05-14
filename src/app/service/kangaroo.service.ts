import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class KangarooService {
  storageHistory: string;
  constructor() {}

  kangaroo(x1: number, v1: number, x2: number, v2: number) {
    if (v1 > v2) {
      const remainder = (x1 - x2) % (v2 - v1);
      if (remainder === 0) {
        return 'YES';
      }
    }
    return 'NO';
  }

  getDate() {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();

    const result = mm + '/' + dd + '/' + yyyy;
    return result;
  }

  saveToStorage(
    fields: string,
    resultStatus: number,
    date: string
  ) {
    let historyStatus = localStorage.getItem('history');
    let history;
    if (historyStatus) {
      history = JSON.parse(localStorage.getItem('history'));
      history.push({ fields, resultStatus, date });
    } else {
      history = [
        {
          fields,
          resultStatus,
          date,
        },
      ];
    }
    localStorage.setItem('history', JSON.stringify(history));
  }
}
