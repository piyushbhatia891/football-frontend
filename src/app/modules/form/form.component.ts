import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Standing } from 'src/app/models/standing';
import { FootballApiService } from 'src/app/services/football-api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form:FormGroup;
  loading:boolean=false;
  submitted:boolean=false;
  error:String;
  standings: Observable<Standing[]>;
  constructor(private footballApiService:FootballApiService) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      country:new FormControl('',[Validators.required]),
      league:new FormControl('',[Validators.required]),
      team:new FormControl('',[Validators.required]),
    });
  }

  onSubmit(form:FormGroup){
    this.loading=true;
    this.submitted=true;
    if(form.valid){
    this.footballApiService.getStandings(form.value.country,form.value.league,form.value.team)
    .subscribe(data=>{
      this.loading=false;
      this.standings=data;
      this.error='';
    },error=>{
      this.standings=null;
      this.error=error.error;
    });
    }

  }

}
