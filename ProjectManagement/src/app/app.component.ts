import { Component } from '@angular/core';
import { ProjectService } from './project.service';
import { Project } from './model/Project';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  project : Project;
  result : string; 
 projectArr : Project[];
 flag : boolean; 
  

  constructor(private service: ProjectService)
  {
    this.project=new Project();
    this.result="";
    this.projectArr=[];
    this.flag=false;
  }

  
  insertProject(data : any )
  {
    this.project.id=data.id;
    this.project.proName=data.proName;
    this.project.proQuot=data.proQuot;
    this.result= this.service.insertProject(this.project);
   
  }
  updateProject(data : any )
  {
    this.project.id=data.id;
    this.project.proName=data.proName;
    this.project.proQuot=data.proQuot;
    this.result= this.service.updateProject(this.project);
  }
  deleteProject(data : any )
  {
    this.result= this.service.deleteProject(data.id);
  }

  findProject(data : any )
  {
    this.project=this.service.findProject(data.id);
    this.result=this.project.id+" "+this.project.proName+" "+this.project.proQuot;
  }

  findAllProject()
  {
    this.projectArr =this.service.findAllProject();
    this.flag=true;
  }
  // sum : number;
  // sub : number;
  // constructor(private calc : CalculatorService)
  // {
  //   this.sum=calc.getAddition(10,20);
  //   this.sub=calc.getSubtraction(100,50);
  // }

}



