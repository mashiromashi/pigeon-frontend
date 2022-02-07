export const layoutName = {
  dashboard: {
    name: "Dashboard",
    route: "/dashboard",
  },
  article: {
    name: "Articles Management",
    lists: [
      {
        label: "Articles",
        route: "/dashboard/articles",
      },
      { label: "Create Article", route: "/dashboard/articles/create-article" },
    ],
  },
  product: {
    name: "Products Management",
    lists: [
      {
        label: "Products",
        route: "/products",
      },
      { label: "Create Product", route: "/dashboard/products/create-product" },
    ],
  },
};
