import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function TitlebarImageList() {
  return (
    <ImageList sx={{ width: 1400, height: 750 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://fcity.in/images/products/23578372/60be4_512.jpg',
    title: 'SAREE STYLES!',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://anayadesignerstudio.com/wp-content/uploads/2022/05/All-Time-Popular-Simple-Half-Saree-Design-For-Women-2022.jpg',
    title: 'HALF SAREE DESIGN',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://anayadesignerstudio.com/wp-content/uploads/2022/05/Pink-And-Green-Color-Combination-Pattu-Half-Saree-For-Women-555x833.jpg',
    title: 'PATTU LANGA VONI SETS',
    author: '@helloimnik',
  },
  {
    img: 'https://anayadesignerstudio.com/wp-content/uploads/2022/02/Half-Saree-Model-For-Wedding-555x833.webp',
    title: 'PATTU HALF SAREE',
    author: '@nolanissac',
    cols: 2,
  },
  {
    img: 'https://anayadesignerstudio.com/wp-content/uploads/2022/04/Maharashtrian-Bride-Nauvari-Saree-Look-For-Wedding-2022-555x833.jpg',
    title: 'MAHARASHTRIAN NAUVARI',
    author: '@hjrc33',
    cols: 2,
  },
  {
    img: 'https://anayadesignerstudio.com/wp-content/uploads/2022/05/Traditional-Silk-Saree-For-Wedding-Guest-2022.jpg',
    title: 'TRADITIONAL SILK SAREE',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
];
