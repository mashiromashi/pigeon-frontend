import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createArticle,
  deleteArticle,
  getArticles,
  updateArticles,
} from "services/services";

export const createArticelService = createAsyncThunk(
  "articles/createArticelService",
  async (param, { rejectWithValue }) => {
    const { title, content, adminId, image } = param;
    try {
      return await createArticle(title, content, adminId, image);
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const getArticlesService = createAsyncThunk(
  "articles/getArticlesService",
  async (_, { rejectWithValue }) => {
    try {
      return await getArticles();
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const updateArticelService = createAsyncThunk(
  "articles/updateArticelService",
  async (param, { rejectWithValue }) => {
    const { title, content, articleId, image } = param;
    try {
      getArticlesService();
      return await updateArticles(articleId, title, content, image);
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteArticelService = createAsyncThunk(
  "articles/deleteArticelService",
  async (articleId, { rejectWithValue }) => {
    try {
      getArticlesService();
      return await deleteArticle(articleId);
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const initialState = {
  loading: false,
  success: false,
  error: false,
  articles: [],
  getLoading: false,
  getError: false,
  updateLoading: false,
  updateSuccess: false,
  updateError: false,
  deleteLoading: false,
  deleteSuccess: false,
  deleteError: false,
};

const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // create article
    builder.addCase(createArticelService.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createArticelService.fulfilled, (state) => {
      state.loading = false;
      state.success = true;
      state.error = false;
    });
    builder.addCase(createArticelService.rejected, (state) => {
      state.loading = false;
      state.error = true;
      state.success = false;
    });
    // get all articles
    builder.addCase(getArticlesService.pending, (state) => {
      state.getLoading = true;
    });
    builder.addCase(getArticlesService.fulfilled, (state, { payload }) => {
      state.getLoading = false;
      state.articles = payload;
      state.getError = false;
    });
    builder.addCase(getArticlesService.rejected, (state) => {
      state.getLoading = false;
      state.getError = true;
    });
    // update articles
    builder.addCase(updateArticelService.pending, (state) => {
      state.updateLoading = true;
    });
    builder.addCase(updateArticelService.fulfilled, (state) => {
      state.updateLoading = false;
      state.updateSuccess = true;
      state.updateError = false;
    });
    builder.addCase(updateArticelService.rejected, (state) => {
      state.updateLoading = false;
      state.updateSuccess = false;
      state.updateError = true;
    });
    //delete articles
    builder.addCase(deleteArticelService.pending, (state) => {
      state.deleteLoading = true;
    });
    builder.addCase(deleteArticelService.fulfilled, (state) => {
      state.deleteLoading = false;
      state.deleteSuccess = true;
      state.deleteError = false;
    });
    builder.addCase(deleteArticelService.rejected, (state) => {
      state.deleteLoading = false;
      state.deleteSuccess = false;
      state.deleteError = true;
    });
  },
});

export default articleSlice.reducer;
