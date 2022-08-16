import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-previewpage',
  templateUrl: './previewpage.page.html',
  styleUrls: ['./previewpage.page.scss'],
})
export class PreviewpagePage implements OnInit {
  private data: any;
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      this.data = JSON.parse(params.data);
      console.log(this.data);
    });
  }

  ngOnInit() {}
}
