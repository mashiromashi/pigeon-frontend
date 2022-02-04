import PageHeader from "components/PageHeader";
import ReactDOM from "react-dom";
import MainLayout from "dashboard/layout/MainLayout";
import ContentWrapper from "hoc/ContentWrapper";
import React, { useState } from "react";
import MuiDataTable from "mui-datatables";
import { IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteDialog from "components/dialog/DeleteDialog";
import UpdateProductDialog from "components/dialog/UpdateProductDialog";

const Products = () => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);

  const deleteProductModal = () => {
    setDeleteModal(true);
  };
  const updateProductModal = () => {
    setUpdateModal(true);
  };

  const deleteProductClickHandler = () => {
    setDeleteModal(false);
  };
  const updateProductClickHandler = () => {
    setUpdateModal(false);
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <DeleteDialog
          open={deleteModal}
          handleClose={deleteProductModal}
          agreeClickHandler={deleteProductClickHandler}
          type="Product"
          cancelClose={() => setDeleteModal(false)}
        />,
        document.getElementById("dialog")
      )}
      {ReactDOM.createPortal(
        <UpdateProductDialog
          open={updateModal}
          cancelClose={() => setUpdateModal(false)}
          agreeClickHandler={updateProductClickHandler}
          handleClose={updateProductModal}
        />,
        document.getElementById("dialog")
      )}
      <MainLayout>
        <ContentWrapper>
          <PageHeader title="Products" content="View and Manage Product Here" />
          <div style={{ marginLeft: "1em", marginRight: "1em" }}>
            <MuiDataTable
              columns={[
                {
                  label: "Image",
                  name: "image",
                  options: { filter: false },
                },
                { label: "Product Name", name: "title" },
                { label: "Facebook Link", name: "fbLink" },
                { label: "Main Category", name: "main" },
                { label: "Sub Category", name: "sub" },
                { label: "Second Category", name: "second" },
                { label: "Created", name: "createdAt" },
                {
                  label: "Action",
                  name: "",
                  options: {
                    filter: false,
                    sort: false,
                    empty: true,
                    customBodyRenderLite: (dataIndex) => {
                      return (
                        <div style={{ width: 150 }}>
                          <Tooltip title="Edit Article">
                            <IconButton
                              onClick={updateProductModal}
                              color="primary"
                              aria-label="edit article"
                              component="span"
                            >
                              <EditIcon style={{ color: "blue" }} />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Delete Article">
                            <IconButton
                              onClick={deleteProductModal}
                              color="primary"
                              aria-label="delete article"
                              component="span"
                            >
                              <DeleteIcon style={{ color: "red" }} />
                            </IconButton>
                          </Tooltip>
                        </div>
                      );
                    },
                  },
                },
              ]}
              data={[
                {
                  image: "Image",
                  title: "Title",
                  fbLink: "Fblink",
                  main: "Main",
                  sub: "Sub",
                  second: "Second",
                  createdAt: "Created",
                },
              ]}
              options={{
                serverSide: false,
                responsive: "standard",
                selectableRows: "none",
                viewColumns: false,
                download: false,
                print: false,
                filter: true,
                sort: true,
              }}
            />
          </div>
        </ContentWrapper>
      </MainLayout>
    </React.Fragment>
  );
};

export default Products;
