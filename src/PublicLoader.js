import loadable from "@loadable/component";

export const Login = loadable(() => import("dashboard/Login"));
export const LandingPage = loadable(() => import('views/LandingPage'))
export const Products = loadable(() => import("dashboard/product/Products"));
export const CreateProducts = loadable(() =>
  import("dashboard/product/CreateProduct")
);
export const Articles = loadable(() => import("dashboard/article/Articles"));
export const CreateArticles = loadable(() =>
  import("dashboard/article/CreateArticle")
);
export const Dashboard = loadable(() => import("dashboard/Dashboard"));
