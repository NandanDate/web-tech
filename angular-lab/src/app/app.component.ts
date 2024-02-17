import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Your Angular App</title>
    <!-- Bootstrap CSS from CDN -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
  </head>
  <body>
  
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <a class="btn btn-outline-dark me-2" routerLink="/Doctor" routerLinkActive="active">Doctor page</a>
      </div>
      <div class="col">
        <a class="btn btn-outline-dark me-2" routerLink="/Patient" routerLinkActive="active">Patient page</a>
      </div>
      <div class="col">
        <a class="btn btn-outline-dark me-2" routerLink="/printpatient" routerLinkActive="active">Patient Information</a>
      </div>
    </div>
  </div>
  
  <div class="container mt-3">
    <router-outlet></router-outlet>
  </div>
  
  <!-- Bootstrap JavaScript (Optional) -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  </body>
  </html>
  
  

  
  
  
  
  `
  
})
export class AppComponent {
  title = 'p2';
}
