import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { User } from '@styling-app/api-interfaces';
import { UserEnvironment, USER_ENVIRONMENT } from '@styling-app/environment';

const BASE_ENTITY = 'https://angular-material-api.azurewebsites.net/';
const model = 'users';

@Injectable({
  providedIn: 'root'
})
export class StylingService {

  constructor(
    private http: HttpClient,
    @Inject(USER_ENVIRONMENT) private environment: UserEnvironment
  ) {}

  getAll() {
    return this.http.get<User[]>(this.getUrl());
  };
  find(id: string) {
    return this.http.get<User>(this.getUrlById(id));
  };

  create(users: User) {
    return this.http.post<User>(this.getUrl(), users);
  };

  update(users: User) {
    return this.http.patch<User>(this.getUrlById(users.id), users);
  };

  delete({id}: User) {
    return this.http.delete<User>(this.getUrlById(id));
  };

  getUrl() {
    return `${BASE_ENTITY}${model}`
  };

  getUrlById(id: any) {
    return `${this.getUrl()}/${id}`
  };
}
