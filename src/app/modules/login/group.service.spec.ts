import { TestBed } from '@angular/core/testing';
import { GroupService } from './group.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {environment} from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


class HttpClientMock {
  get = jasmine.createSpy();
}

describe('Group Service', () => {

  let service: GroupService;
  let httpClient: HttpClientMock;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        GroupService,
        {
          provide: HttpClient,
          useClass: HttpClientMock
        }
      ]
    });
    service = TestBed.get(GroupService);
    httpClient = TestBed.get(HttpClient);
  });

  it('should be created', () => {
     expect(service).toBeDefined();
  });


  it('should call http get service', () => {
    httpClient.get.and.returnValue({
      toPromise() {}
    });
    service.getGroups();

    expect(httpClient.get).toHaveBeenCalledWith(environment.endpoint.groups);
  });

});
