import {
  Alert,
  Button,
  CircularProgress,
  Grid,
  TextField,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import PageHeader from "components/PageHeader";
import ContentWrapper from "hoc/ContentWrapper";
import React from "react";
import { useForm } from "react-hook-form";
import { useTheme } from "@emotion/react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import MainLayout from "dashboard/layout/MainLayout";
import { convertToRaw } from "draft-js";
import draftToMarkdown from "draftjs-to-markdown";
import { storage } from "util/storage";
import { useDispatch, useSelector } from "react-redux";
import { createArticelService } from "applications/slice/articleSlice";

const CreateArticle = () => {
  const classes = useStyles();
  const theme = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const article = useSelector((state) => state.article);
  const { loading, success, error } = article;
  const [editorEmpty, setEditorEmpty] = React.useState(false);
  const [editor, setEditor] = React.useState(() => EditorState.createEmpty());

  //Article submit handler
  const articleSubmitHandler = (data) => {
    if (convertToRaw(editor.getCurrentContent()).blocks[0].text === "") {
      setEditorEmpty(true);
    } else {
      setEditorEmpty(false);
      const loginUser = storage.getUserEntity();
      const reader = new FileReader();
      reader.readAsDataURL(data.articleImage[0]);
      reader.onload = () => {
        dispatch(
          createArticelService({
            title: data.articleTitle,
            content: draftToMarkdown(convertToRaw(editor.getCurrentContent())),
            adminId: loginUser.adminUserId,
            image: reader.result,
          })
        );
      };
    }
  };

  return (
    <MainLayout>
      <ContentWrapper>
        <PageHeader
          title="Create Article"
          content="View and Manage Article Here"
        />

        <form
          className={classes.formContainer}
          onSubmit={handleSubmit(articleSubmitHandler)}
        >
          {editorEmpty && (
            <Alert variant="filled" severity="error">
              Please Enter Article Content!
            </Alert>
          )}
          {success && (
            <Alert variant="filled" severity="success">
              Article is Successfully Created!
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
                type="file"
                fullWidth
                {...register("articleImage", {
                  required: "Please Select Article Image!",
                })}
                error={errors.articleImage ? true : false}
                helperText={errors.articleImage && errors.articleImage?.message}
                id="articleImage"
                name="articleImage"
              />
            </Grid>
            {/* title */}
            <Grid item xs={12} md={6}>
              <TextField
                margin="normal"
                fullWidth
                {...register("articleTitle", {
                  required: "Please Enter Article Title!",
                })}
                error={errors.articleTitle ? true : false}
                helperText={errors.articleTitle && errors.articleTitle?.message}
                id="articleTitle"
                label="Title"
                name="articleTitle"
              />
            </Grid>
            {/* content */}
            <Grid item xs={12}>
              <Editor
                editorState={editor}
                onEditorStateChange={(value) => setEditor(value)}
                editorStyle={{
                  height: 400,
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
                wrapperStyle={{ border: "0.5px solid #94a3b8" }}
                toolbar={{
                  options: [
                    "inline",
                    "blockType",
                    "fontSize",
                    "list",
                    "textAlign",
                  ],
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

export default CreateArticle;
