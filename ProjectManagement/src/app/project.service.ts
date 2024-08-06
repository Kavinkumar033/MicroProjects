import { Injectable } from '@angular/core';
import { Project } from './model/Project';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  url : string;
  project : Project;
  projectArr : Project[];

  constructor(private http : HttpClient) {
    this.url="http://localhost:3004/projects";
    this.project=new Project();
    this.projectArr=[];
   }

  insertProject(project : Project)
  {
this.http.post<Project>(this.url, project).subscribe();
return "Project Details Added";
 }

 updateProject(project : Project)
  {
this.http.put(this.url+"/"+project.id, project).subscribe();
return "Project Details Updated";
 }

 deleteProject(id : number)
  {
this.http.delete<Project>(this.url+"/"+id).subscribe();
return "Project Details Deleted";
 }
 findProject(id : number)
  {
this.http.get<Project>(this.url+"/"+id).subscribe(data =>this.project = data);
return this.project;
 }
findAllProject()
{
  this.http.get<Project[]>(this.url).subscribe(data => this.projectArr = data )
  return this.projectArr;
}

}

