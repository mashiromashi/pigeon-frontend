import { axiosGloabl } from "../axios-global";

//Login
const login = async (username, password) => {
  const response = await axiosGloabl.post("/admin/login", {
    username,
    password,
  });
  return response.data;
};

//Creat Product
const createProduct = async (
  image,
  name,
  fbLink,
  category,
  subCategory,
  secondCategory,
  adminUserId
) => {
  const response = await axiosGloabl.post("/product", {
    product: {
      image,
      name,
      fbLink,
      category,
      subCategory,
      secondCategory,
    },
    adminUserId,
  });
  return response.data;
};

//Create Article
const createArticle = async (title, content, adminId, image) => {
  const response = await axiosGloabl.post("/article", {
    title,
    content,
    adminId,
    image,
  });
  return response.data;
};

//Get Articles
const getArticles = async () => {
  const response = await axiosGloabl.get("/article");
  return response.data
}

//Update Articles
const updateArticles = async (articleId, title, content, image) => {
  const response = await axiosGloabl.post(`/article/update/${articleId}`, {
    title,
    content, image
  })
  return response.data
}
//Delete Articles
const deleteArticle = async (articleId) => {
  const response = await axiosGloabl.post(`/article/delete/${articleId}`)
  return response.data
}



export { login, createProduct, createArticle, getArticles, updateArticles, deleteArticle };
