import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import { ExpenseService } from './expense.service';
import { environment } from 'src/environments/environment';

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

  afterEach(()=>{
    httpMock.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the balance', () => {

    const expectedResponse = [
      {amount: -15.51, name: 'ruben'},
    ]
    

    const responseObject = [
      {
        "amount": -15.51,
        "name": "ruben"
      }
    ]

    service.getBalance().subscribe((res) => {
      expect(res).toEqual(expectedResponse);
    });

    const req = httpMock.expectOne(environment.apiURL + '/expenses/getBalance');

    req.flush(responseObject);
})
});

