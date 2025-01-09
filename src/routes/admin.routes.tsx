import { ReactNode } from "react";
import AdminDashboard from "../components/layout/admin/AdminDashboard";
import CreateAdmin from "../components/layout/admin/CreateAdmin";
import CreateFaculty from "../components/layout/admin/CreateFaculty";
import CreateStudent from "../components/layout/admin/CreateStudent";
import { NavLink } from "react-router-dom";

type TRoute = {
  path: string;
  element: ReactNode;
};

type TSidebarItem = {
  key: string;
  label:ReactNode;
  children?: TSidebarItem[],
  
}


export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
    ],
  },
];
// export const adminRoutes = adminPaths.reduce((acc: TRoute[], item) => {
//   if (item.path && item.element) {
//     acc.push({
//       path: item.path,
//       element: item.element,
//     });
//   }
//   if (item.children) {
//     item.children.forEach((child) => {
//       acc.push({
//         path: child.path,
//         element: child.element,
//       });
//     });
//   }
//   return acc;
// }, []);

export const sidebarItems =  adminPaths.reduce((acc:TSidebarItem[], item) => {
  if (item.path && item.element) {
    acc.push({
      key: item.name,
      label: <NavLink to={`/admin/${item?.path}`}>{item.name}</NavLink>,
    });
  }
  if(item.children){
      acc.push({
          key: item.name,
          label: item.name,
          children: item.children.map(child => ({
              key: child.name,
              label: <NavLink to={`/admin/${child?.path}`}>{child.name}</NavLink>,
            }))
          })
  }
  return acc
}, []);


