import PageHeader from 'components/PageHeader';
import MainLayout from 'dashboard/layout/MainLayout';
import ContentWrapper from 'hoc/ContentWrapper';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import MuiDataTable from 'mui-datatables';
import { IconButton, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteDialog from 'components/dialog/DeleteDialog';

const Articles = () => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [, setUpdateModal] = useState(false);
  //delete Modal
  const deletArticleModal = () => {
    setDeleteModal(true);
  };
  //update Modal
  const updateArticleModal = () => {
    setUpdateModal(true);
  };

  const deleteArticleClickHandler = () => {
    setDeleteModal(false);
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <DeleteDialog
          open={deleteModal}
          handleClose={deletArticleModal}
          agreeClickHandler={deleteArticleClickHandler}
          type="Article"
          cancelClose={() => setDeleteModal(false)}
        />,
        document.getElementById('dialog')
      )}

      <MainLayout>
        <ContentWrapper>
          <PageHeader title="Articles" content="View and Manage Article Here" />
          <div style={{ marginLeft: '1em', marginRight: '1em' }}>
            <MuiDataTable
              title="Articles"
              columns={[
                {
                  label: 'Image',
                  name: 'image',
                  options: { filter: false },
                },
                { label: 'Title', name: 'title' },
                { label: 'Content', name: 'content' },
                { label: 'Created', name: 'createdAt' },
                {
                  label: 'Action',
                  name: '',
                  options: {
                    filter: false,
                    sort: false,
                    empty: true,
                    customBodyRenderLite: (dataIndex) => {
                      return (
                        <div style={{ width: 150 }}>
                          <Tooltip title="Edit Article">
                            <IconButton
                              onClick={updateArticleModal}
                              color="primary"
                              aria-label="edit article"
                              component="span"
                            >
                              <EditIcon style={{ color: 'blue' }} />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Delete Article">
                            <IconButton
                              onClick={deletArticleModal}
                              color="primary"
                              aria-label="delete article"
                              component="span"
                            >
                              <DeleteIcon style={{ color: 'red' }} />
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
                  image: 'Image',
                  title: 'Title',
                  content: 'content',
                  createdAt: 'created',
                },
              ]}
              options={{
                serverSide: false,
                responsive: 'standard',
                selectableRows: 'none',
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

export default Articles;
