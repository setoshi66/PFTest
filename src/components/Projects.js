import React from 'react';
import styles from './Projects.module.css'
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const rows = [
  { id: 1, name: '水再生センター1', createDate: '2024-09-01', favorite: true },
  { id: 2, name: '水再生センター2', createDate: '2024-09-01', favorite: false },
  { id: 3, name: '水再生センター3', createDate: '2024-09-01', favorite: true },
  { id: 4, name: '水再生センター4', createDate: '2024-09-01', favorite: false },
  { id: 5, name: '水再生センター5', createDate: '2024-09-01', favorite: true }
];

const paginationModel = { page: 0, pageSize: 6 };

const Projects = () => {
  const [favorite, setFavorite] = useState(false);
  console.log(favorite);
  const columns = [
    {
      field: 'favorite',
      headerName: 'お気に入り',
      sortable: false,
      width: 120,
      disableClickEventBubbling: true,
      renderCell: (params) =>
        params.favorite ?
          <IconButton
            color="primary"
            onClick={
              () => {
                alert(params.favorite + " お気に入りから削除しました");
                setFavorite(false);
                alert(params.favorite);
              }
            }
          >
            <BookmarkIcon variant="contained" color="primary" />
          </IconButton>
          :
          <IconButton
            color="primary"
            onClick={() => {
              alert(params.favorite + " お気に入りに追加しました");
              setFavorite(true);
              alert(params.favorite);
            }}
          >
            <BookmarkBorderIcon variant="contained" color="primary" />
          </IconButton>
    },
    { field: 'name', headerName: '名前', width: 180 },
    { field: 'createDate', headerName: '作成', width: 180 },
  ];
  return (
    <div className={styles.body}>
      <Paper sx={{ height: 500, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[6, 10]}
          checkboxSelection
          sx={{ border: 0 }}
        />
      </Paper>
    </div>
  );
}

export default Projects;