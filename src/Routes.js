import React from "react"
import {Route, Switch} from "react-router-dom"
import Home from "./views/Main"
import AllBlogs from "./views/blogs/AllBlogs"
import Products from "./views/products/Products"
import Brands from "./views/brands/Brands"
import AllClients from "./views/clients/AllClients"
import ViewClient from "./views/clients/ViewClient"
import AllOrders from "./views/orders/AllOrders"
import ViewOrder from "./views/orders/ViewOrder"
import Coupons from "./views/cupons/Coupons"
import Categories from "./views/categories/Categories"
import ViewCoupon from "./views/cupons/ViewCoupon"
import AddVariations from "./views/variations/AddVariations"



 const Routes = ()=> {
   return (
      <Switch>
        <Route from="/" exact render={props=> <Home {...props} />} />
        <Route path="/blogs" exact render={props=> <AllBlogs {...props} />} />
        <Route path="/products" exact render={props=> <Products {...props} />} />
        <Route path="/brands" exact render={props=> <Brands {...props} />} /> 
        <Route path="/clients" exact render={props=> <AllClients {...props} />} /> 
        <Route path="/viewClient" exact render={props=> <ViewClient {...props} />} /> 
        <Route path="/orders" exact render={props=> <AllOrders {...props} />} /> 
        <Route path="/ViewOrder" exact render={props=> <ViewOrder {...props} />} /> 
        <Route path="/coupons" exact render={props=> <Coupons {...props} />} /> 
        <Route path="/viewCoupon" exact render={props=> <ViewCoupon {...props} />} /> 
        <Route path="/categories" exact render={props=> <Categories {...props} />} /> 
        <Route path="/variations" exact render={props=> <AddVariations {...props} />} /> 

      </Switch>
   )
 }
 export default Routes