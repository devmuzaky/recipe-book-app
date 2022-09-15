import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";

import {ShoppingListComponent} from "../shopping-list.component";
import {ShoppingEditComponent} from "../shopping-edit/shopping-edit.component";
import {SharedModule} from "../../shared/shared-module/shared.module";


@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    FormsModule,
    RouterModule.forChild([
      {path: 'shopping-list', component: ShoppingListComponent}
    ]),
    SharedModule
  ]
})
export class ShoppingListModule {
}
