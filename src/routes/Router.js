import { lazy } from "react";
import AuthRoutes from "./AuthRoutes";

//Lazy loading and code splitting

//dashboards
const Classic = lazy(() => import("../views/dashboards/Classic"));

// Categories
const Categories = lazy(() => import("../views/categories/Index"));
const AddCategory = lazy(() => import("../views/categories/AddCategory"));



const auths = [].concat(AuthRoutes);

var AppRoutes = [
  {
    // navlabel: true,
    name: "Dashboard",
    icon: "home",
    state: "dashboard",
    path: "/dashboard"
  },
  {
    collapse: true,
    name: "Categories",
    icon: "heart",
    state: "categories",
    path: "/categories",
    component: Categories,
    child:[
      {
        state: "addcategories",
        path: "/categories/add",
        name: "Add New",
        component: AddCategory,
      },
    ]
  },

  {
    collapse: true,
    path: "/acl",
    name: "Acl",
    state: "acl",
    icon: "shield",
    child: [
      {
        path: "/acl/permissions",
        name: "Permissions",
        mini: "B",
        icon: "mdi mdi-adjust",
        component: Classic,
      },
      
    ],
  },
  
  // {
  //   path: "/authentication/login",
  //   name: "Authentication",
  //   state: "openAuthentication",
  //   icon: "alert-triangle",
  //   child: auths,
  //   collapse: true,
  // },
  
  {
    path: "/",
    pathTo: "/dashboards/classic",
    name: "Dashboard",
    redirect: true,
  },
];
export default AppRoutes;
