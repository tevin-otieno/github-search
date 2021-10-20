import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Repository } from '../class/repository';
import { User } from '../class/user';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  user: User;
  repository: Repository;

  constructor(private http:HttpClient) { 
    this.user = new User('','','','',0,0,0,'','',new Date(),)
    this.repository = new Repository('','','','',)
  }
  getUser(whatToSearch:any){
    interface GithubApi{
      login:string,
      html_url:string,
      repos_url:string,
      name:string,
      public_repos:number,
      followers:number,
      following:number,
      bio:string,
      avatar_url:string,
      created_at:Date,
    }
    let headers = new HttpHeaders({'Authorization':'token' + environment.apiKey})
    let request = environment.baseUrl + whatToSearch ;
    let params={headers:headers}
    let promise = new Promise((resolve, reject) => {
      this.http.get<GithubApi>(request,params).toPromise().then((response: User) => { this.user = response;
            
            resolve(resolve);
          },
          (error:any) => {
            reject();
          }
        );
    });
    return promise;
  }
  getRepositories(user:any){
    interface GithubApi{
      html_url:string,
      description:string,
      language:string,
      homepage:string
    }
    let headers = new HttpHeaders({'Authorization':'token' + environment.apiKey})
    let params={headers:headers}
    let url = environment.baseUrl  + user + '/repos';
    let promise = new Promise((resolve, reject) => {
      this.http.get<GithubApi>(url,params).toPromise().then((response) => {
        this.repository = response;
        resolve(resolve)
  
      }, (error: any) => {
        reject();
      })
  
    });
    return promise
  }
}
