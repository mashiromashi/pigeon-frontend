import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createProduct } from "services/services";

export const createProductService = createAsyncThunk(
  "products/createProductService",
  async (param, { rejectWithValue }) => {
    const {
      adminUserId,
      image,
      productName,
      fbLink,
      mainCategory,
      subCategory,
      secondCategory,
      reset
    } = param;

    try {
      const result = await createProduct(
        image,
        productName,
        fbLink,
        mainCategory,
        subCategory,
        secondCategory,
        adminUserId
      );
      reset();
      return result
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const initialState = {
  loading: false,
  success: false,
  error: false,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createProductService.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createProductService.fulfilled, (state) => {
      state.loading = false;
      state.success = true;
      state.error = false;
    });
    builder.addCase(createProductService.rejected, (state) => {
      state.loading = false;
      state.error = true;
      state.success = false;
    });
  },
});

export default productSlice.reducer;
