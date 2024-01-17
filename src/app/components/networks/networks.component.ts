import {Component, OnInit} from '@angular/core';
import {SwarmService} from "../../services/swarm.service";

@Component({
  selector: 'app-networks',
  templateUrl: './networks.component.html',
  styleUrls: ['./networks.component.css']
})
export class NetworksComponent implements OnInit {
  dataSource: any;
  displayedColumns: string[] = [ 'name', 'id', 'driver'];
  constructor(private swarmService: SwarmService) {
  }
  ngOnInit(): void {
    this.swarmService.getNetworks().subscribe(data => {
      this.dataSource = data;
      console.log('data', data);
    });
  }
}
