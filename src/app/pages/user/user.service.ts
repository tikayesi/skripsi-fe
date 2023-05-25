import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserDetail } from './model/user.model';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private readonly http: HttpClient) { }

  public register(params: User): Observable<any>{
    return this.http.post<any>('/api/auth/register', params);
  }

  public getUserList(): Observable<User[]>{
    return this.http.get<User[]>('/api/users');
  }

  public getUserById(id: string): Observable<UserDetail>{
    return this.http.get<UserDetail>('/api/users/' + id);
  }

  public updateUser(params: UserDetail): Observable<any>{
    console.log("SERVICE PARAMS: ", params);
    
    return this.http.put<any>('/api/users', params);
  }

  public deleteUser(id: string): Observable<any>{
    return this.http.delete<any>('/api/users/' + id)
  }

  public getUserDetailList(): Observable<UserDetail[]>{
    return this.http.get<UserDetail[]>('/api/users');
  }


}
