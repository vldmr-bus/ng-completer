import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { MatListModule } from "@angular/material/list";
import { MatInputModule } from "@angular/material/input";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CollapseModule } from "ngx-bootstrap/collapse";

import { AppComponent } from "./app-cmp";
import { MaterialCmp } from "./material-cmp";
import { NativeCmp } from "./native-cmp";
import { routing } from "./app.routing";
import { NgCompleterModule } from "../src/ng-completer";
import { CompleterCmpMd } from "./completer-cmp-md";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, CompleterCmpMd, NativeCmp, MaterialCmp],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgCompleterModule,
    MatInputModule,
    MatListModule,
    FormsModule,
    HttpClientModule,
    routing,
    CollapseModule
  ]
})
export class AppModule { }
