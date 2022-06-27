import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ExpenseService } from './expense.service';
import { environment } from 'src/environments/environment';
import { Balance } from '../Model/Balance';
import { Id } from '../Model/Id';
import { Expense } from '../Model/Expense';

describe('ExpenseService', () => {
  let service: ExpenseService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ExpenseService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should get the balance', () => {
    const id: Id = { id: 1 };
    const expectedResponse: Balance = [
      {
        amount: -15.51,
        userId: id
      }
    ];

    const responseObject = [
      {
        amount: -15.51,
        userId: id
      }
    ];

    service.getBalance().subscribe(res => {
      expect(res).toEqual(expectedResponse);
    });

    const req = httpMock.expectOne(environment.apiURL + '/expenses/balance');
    req.flush(responseObject);
  });

  it('should get the expenses', () => {
    const expenseId: Id = { id: 4 };
    const userId = { id: 2 };
    const expectedResponse: Expense[] = [
      {
        id: expenseId,
        amount: 300.0,
        description: 'cumple',
        date: new Date('2022-08-01T15:45:03.000+00:00'),
        user: {
          id: userId,
          name: 'pablo'
        },
        team: {
          id: 1
        }
      }
    ];

    const responseObject = [
      {
        id: expenseId,
        amount: 300.0,
        description: 'cumple',
        date: new Date('2022-08-01T15:45:03.000+00:00'),
        user: {
          id: userId,
          name: 'pablo'
        },
        team: {
          id: 1
        }
      }
    ];

    service.getExpenses().subscribe(res => {
      expect(res).toEqual(expectedResponse);
    });

    const req = httpMock.expectOne(environment.apiURL + '/expenses/');
    req.flush(responseObject);
  });
});
