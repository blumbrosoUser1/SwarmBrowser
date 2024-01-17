import {Component, OnInit} from '@angular/core';
import {SwarmService} from "../../services/swarm.service";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit{
  dataSource: any;
  displayedColumns: string[] = [ 'name', 'id', 'image',  'replicas', 'ports', 'stack',];
  constructor(private swarmService: SwarmService) {
  }
  ngOnInit(): void {
    this.swarmService.getServices().subscribe(data => {
      this.sortByName(data);
      this.dataSource = data;
      console.log('data', data);
    });
  }

  private sortByName(data: any) {
    data.sort((a : any , b : any) =>
      a.Spec.Name < b.Spec.Name ? -1 : 1);
  }
}
