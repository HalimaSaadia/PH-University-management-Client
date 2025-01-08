// export const adminPaths = [
//     {
//       index: true,
//       element: <AdminDashboard />,
//     },
//     {
//       path: "dashboard",
//       element: <AdminDashboard />,
//     },
//     {
//       path:"create-student",
//       element:<CreateStudent />
//     },
//     {
//       path:"create-faculty",
//       element:<CreateFaculty />
//     },
//     {
//       path:"create-admin",
//       element:<CreateAdmin />
//     },
//   ]

const adminPaths2 = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: "ADMIN_DASHBOARD",
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Student",
        path: "create-student",
        element: "CREATE_STUDENT",
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: "CREATE_FACULTY",
      },
      {
        name: "Create Admin",
        path: "create-admin",
        element: "CREATE_ADMIN",
      },
    ],
  },
];

const newArray = adminPaths2.reduce((acc, item) => {
    if (item.path && item.element) {
      acc.push({
        key: item.name,
        label: item.name,
      });
    }
    if(item.children){
        acc.push({
            key: item.name,
            label: item.name,
            children: item.children.map(child => ({
                key: child.name,
                label: child.name,
              }))
            })
    }
    return acc
  }, []);

// const newArray = adminPaths2.reduce((acc, item) => {
//   if (item.path && item.element) {
//     acc.push({
//       path: item.path,
//       element: item.element,
//     });
//   }
//   if(item.children){
//     item.children.forEach(child=> {
//         acc.push({
//             path: child.path,
//             element: child.element,
//           })
//     })
//   }
//   return acc
// }, []);

