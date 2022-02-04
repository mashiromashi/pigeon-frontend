import {
  Alert,
  Box,
  Button,
  Chip,
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import PageHeader from "components/PageHeader";
import React, { useState } from "react";
import ContentWrapper from "hoc/ContentWrapper";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@emotion/react";
import { Controller, useForm } from "react-hook-form";
import { Categories } from "constant/Categories";
import MainLayout from "dashboard/layout/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { createProductService } from "applications/slice/productSlice";
import { storage } from "util/storage";

const CreateProduct = () => {
  const classes = useStyles();
  const theme = useTheme();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    resetField,
    reset,
  } = useForm();
  const [subCategory, setSubCategory] = useState(null);
  const [secondSubCategory, setSecondSubCategory] = useState(true);
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const { loading, success, error } = product;

  const mainCategoryChangeHandler = (e) => {
    resetField("subCategory");
    resetField("secondCategory");
    const subCat = Categories.find((cat) => cat.name === e.target.value);
    if (subCat.subCategory) {
      setSubCategory(subCat);
    } else {
      setSubCategory(null);
    }
  };

  //sub category change handler
  const subCategoryChangeHandler = (e) => {
    const value = e.target.value;
    if (value.length > 0) {
      const check = value.filter(
        (val) => val === "Wide Neck Bottle" || val === "Slim Neck Bottle"
      );
      if (check.length > 0) {
        setSecondSubCategory(false);
      } else {
        resetField("secondCategory");
        setSecondSubCategory(true);
      }
    } else {
      resetField("secondCategory");
      setSecondSubCategory(true);
    }
  };

  //create product submit handler
  const createProductSubmitHandler = (data) => {
    const { productName, fbLink, mainCategory, subCategory, secondCategory } =
      data;
    const loginUser = storage.getUserEntity();
    const reader = new FileReader();
    reader.readAsDataURL(data.productImage[0]);
    reader.onload = () => {
      dispatch(
        createProductService({
          adminUserId: loginUser.adminUserId,
          image: reader.result,
          productName,
          fbLink,
          mainCategory,
          subCategory,
          secondCategory,
          reset,
        })
      );
    };
  };

  return (
    <MainLayout>
      <ContentWrapper>
        <PageHeader
          title="Create Products"
          content="View and Manage Product Here"
        />
        <form
          className={classes.formContainer}
          onSubmit={handleSubmit(createProductSubmitHandler)}
        >
          {success && (
            <Alert variant="filled" severity="success">
              Product is Successfully Created!
            </Alert>
          )}
          {error && (
            <Alert variant="filled" severity="error">
              Something went wrong.Please try again later!
            </Alert>
          )}
          <Grid container direction="row" alignItems="center" spacing={3}>
            {/* image name */}
            <Grid item xs={12} md={6}>
              <TextField
                margin="normal"
                autoFocus
                type="file"
                fullWidth
                {...register("productImage", {
                  required: "Please Select Product Image!",
                })}
                error={errors.productImage ? true : false}
                helperText={errors.productImage && errors.productImage?.message}
                id="productImage"
                name="productImage"
              />
            </Grid>
            {/* product name */}
            <Grid item xs={12} md={6}>
              <TextField
                margin="normal"
                fullWidth
                {...register("productName", {
                  required: "Please Enter Product Name!",
                })}
                error={errors.productName ? true : false}
                helperText={errors.productName && errors.productName?.message}
                id="productName"
                label="Product Name"
                name="productName"
              />
            </Grid>
            {/* facebook link */}
            <Grid item xs={12} md={6}>
              <TextField
                margin="normal"
                fullWidth
                {...register("fbLink", {
                  required: "Please Enter Facebook Link!",
                })}
                error={errors.fbLink ? true : false}
                helperText={errors.fbLink && errors.fbLink?.message}
                id="fbLink"
                label="Facebook Link"
                name="fbLink"
              />
            </Grid>
            {/* Main Category */}
            <Grid item xs={12} md={6}>
              <Controller
                control={control}
                name="mainCategory"
                rules={{ required: "Please Select Main Category" }}
                render={({ field }) => {
                  return (
                    <TextField
                      id="mainCategory"
                      select
                      fullWidth
                      margin="normal"
                      label="Main Category"
                      value={field.value ? field.value : ""}
                      onChange={(e) => {
                        field.onChange(e);
                        mainCategoryChangeHandler(e);
                      }}
                      error={errors.mainCategory ? true : false}
                      helperText={
                        errors.mainCategory && errors.mainCategory?.message
                      }
                    >
                      {Categories.map((category) => (
                        <MenuItem key={category.id} value={category.name}>
                          {category.name}
                        </MenuItem>
                      ))}
                    </TextField>
                  );
                }}
              />
            </Grid>
            {/* Sub Category */}
            <Grid item xs={12} md={6}>
              <Controller
                control={control}
                name="subCategory"
                render={({ field }) => {
                  return (
                    <FormControl fullWidth margin="normal">
                      <InputLabel id="subCategory">Sub Categories</InputLabel>
                      <Select
                        disabled={subCategory ? false : true}
                        labelId="subCategory"
                        id="demo-multiple-chip"
                        multiple
                        value={field.value ? field.value : []}
                        onChange={(e) => {
                          field.onChange(e);
                          subCategoryChangeHandler(e);
                        }}
                        input={
                          <OutlinedInput
                            id="select-multiple-chip"
                            label="Sub Categories"
                          />
                        }
                        renderValue={(selected) => (
                          <Box
                            sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}
                          >
                            {selected.map((value) => (
                              <Chip key={value} label={value} />
                            ))}
                          </Box>
                        )}
                        MenuProps={{
                          PaperProps: {
                            style: {
                              maxHeight: 48 * 4.5 + 8,
                              width: 250,
                            },
                          },
                        }}
                      >
                        {subCategory &&
                          subCategory.subCategory.map((sub, index) => (
                            <MenuItem key={index + 1} value={sub.name}>
                              {sub.name}
                            </MenuItem>
                          ))}
                      </Select>
                    </FormControl>
                  );
                }}
              />
            </Grid>
            {/* second category */}
            <Grid item xs={12} md={6}>
              <Controller
                control={control}
                name="secondCategory"
                render={({ field }) => {
                  return (
                    <FormControl fullWidth margin="normal">
                      <InputLabel id="secondCategory">
                        Second Sub Categories
                      </InputLabel>
                      <Select
                        disabled={secondSubCategory}
                        labelId="secondCategory"
                        id="demo-multiple-chip"
                        multiple
                        value={field.value ? field.value : []}
                        onChange={(e) => field.onChange(e)}
                        input={
                          <OutlinedInput
                            id="select-multiple-chip"
                            label="Second Sub Categories"
                          />
                        }
                        renderValue={(selected) => (
                          <Box
                            sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}
                          >
                            {selected.map((value) => (
                              <Chip key={value} label={value} />
                            ))}
                          </Box>
                        )}
                        MenuProps={{
                          PaperProps: {
                            style: {
                              maxHeight: 48 * 4.5 + 8,
                              width: 250,
                            },
                          },
                        }}
                      >
                        <MenuItem value="Glass">Glass</MenuItem>
                        <MenuItem value="PP (Polypropylene)">
                          PP (Polypropylene)
                        </MenuItem>
                        <MenuItem value="PP (Polypropylene) Disney">
                          PP (Polypropylene) Disney
                        </MenuItem>
                        <MenuItem value="PPSU (Polyphenylsulfone)">
                          PPSU (Polyphenylsulfone)
                        </MenuItem>
                        <MenuItem value="Wide Neck Nipples">
                          Wide Neck Nipples
                        </MenuItem>
                      </Select>
                    </FormControl>
                  );
                }}
              />
            </Grid>
          </Grid>
          {/* button */}
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={{
                  backgroundColor: theme.palette.primary.main,
                }}
                sx={{ mt: 3, mb: 2 }}
              >
                {loading ? (
                  <CircularProgress size={30} style={{ color: "white" }} />
                ) : (
                  "Submit"
                )}
              </Button>
            </Grid>
          </Grid>
        </form>
      </ContentWrapper>
    </MainLayout>
  );
};

const useStyles = makeStyles(() => ({
  formContainer: {
    marginLeft: "2em",
    marginRight: "2em",
  },
}));

export default CreateProduct;
