import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';
import { environment } from 'src/environments/environment';
import { User } from '../Model/User';
import { Id } from '../Model/Id';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should get all the users of the team', () => {
    const userId: Id = { id: 1 };
    const expectedResponse: User[] = [
      {
        id: userId,
        name: 'ruben'
      }
    ];

    const responseObject = [
      {
        id: userId,
        name: 'ruben'
      }
    ];

    service.getUsers().subscribe(res => {
      expect(res).toEqual(expectedResponse);
    });

    const req = httpMock.expectOne(environment.apiURL + '/users/');

    req.flush(responseObject);
  });
});
