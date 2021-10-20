import { Component, OnInit } from '@angular/core';
import { Repository } from 'src/app/class/repository';
import { User } from 'src/app/class/user';
import { ApiRequestService } from 'src/app/services/api-request.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  user!: User;
  repository!: Repository | any;

  constructor(private gitService: ApiRequestService) {
    this.repository = new Repository('', '', '', '',)

  }
  findThisUser(whatToSearch: any) {
    this.gitService.getUser(whatToSearch).then((success) => {
      this.user = this.gitService.user
    })
    this.gitService.getRepositories(whatToSearch).then((success) => {
      this.repository = this.gitService.repository;
    },
      (error) => {
        console.log(error)
      }
    )
  }

  ngOnInit(): void {
    this.findThisUser('tevin-otieno')
  }

}
