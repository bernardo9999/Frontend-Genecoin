import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DefaultComponent } from "./layout/default/default.component";
import { FullwidthComponent } from "./layout/fullwidth/fullwidth.component";
import { FullwidthModule } from "./layout/fullwidth/fullwidth.module";
import { HomeComponent } from "./modules/home/home.component";
import { SearchComponent } from "./modules/search/search.component";
import { UploadComponent } from "./modules/upload/upload.component";

const routes: Routes = [
  {
    path: "",
    component: FullwidthComponent,
    children: [
      {
        path: "",
        component: HomeComponent,
      },
    ],
  },
  {
    path: "",
    component: DefaultComponent,
    children: [
      {
        path: "search",
        component: SearchComponent,
      },
      {
        path: "upload",
        component: UploadComponent,
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
