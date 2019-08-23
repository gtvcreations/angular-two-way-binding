import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmiComponent } from './emi/emi.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
    {path: 'emi-calculator', component: EmiComponent},
    {path: 'list-products', component: ProductsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}

export const routingComponents = [EmiComponent, ProductsComponent];