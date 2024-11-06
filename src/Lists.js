import React from 'react';
import styles from './Lists.css'
import { useState } from 'react';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

// export default function ButtonUsage() {
//   return <Button variant="contained">Hello world</Button>;
// }



const rows = [
  { id: 1, name: 'シミュレーション1', proccess: '計算済み', favorite: true },
  { id: 2, name: 'シミュレーション2', proccess: '計算済み', favorite: false },
  { id: 3, name: 'シミュレーション3', proccess: '計算済み', favorite: true },
  { id: 4, name: 'シミュレーション4', proccess: '計算済み', favorite: false },
  { id: 5, name: 'シミュレーション5', proccess: '計算済み', favorite: true },
  { id: 6, name: 'シミュレーション6', proccess: '中断', favorite: false },
  { id: 7, name: 'シミュレーション7', proccess: 'キャンセル', favorite: true },
  { id: 8, name: 'シミュレーション8', proccess: '計算中', favorite: false },
  { id: 9, name: 'シミュレーション9', proccess: '未計算', favorite: true },
];

const paginationModel = { page: 0, pageSize: 6 };

const Lists = () => {
  const [favorite, setFavorite] = useState(false);
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'シミュレーション名', width: 180 },
    { field: 'proccess', headerName: '処理状況', width: 180 },
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (value, row) => `${row.シミュレーション名 || ''} ${row.firstName || ''}`,
    // },
    {
      field: 'result',
      headerName: '計算結果',
      sortable: false,
      width: 120,
      disableClickEventBubbling: true,
      renderCell: (params) => <Button variant="contained" color="primary">表示</Button>
    },
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
  ];
  return (
    <div className={styles.body}>
      {/* <Button
        sx={{ m: 1 }}
        size='large'
        variant="contained"
        onClick={() => {
          alert('clicked');
        }}
      >新規作成</Button> */}
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

export default Lists;