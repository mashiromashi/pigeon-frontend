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
        route: "/articles",
      },
      { label: "Create Article", route: "/articles/create-article" },
    ],
  },
  product: {
    name: "Products Management",
    lists: [
      {
        label: "Products",
        route: "/products",
      },
      { label: "Create Product", route: "/products/create-product" },
    ],
  },
};
