import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function CustomImageList() {
  return (
    <ImageList
      sx={{
        width: 1400,
        height: 750,
        // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
        transform: 'translateZ(0)',
      }}
      rowHeight={400}
      gap={1}
    >
      {itemData.map((item) => {
        const cols = item.featured ? 2 : 1;
        const rows = item.featured ? 2 : 1;

        return (
          <ImageListItem key={item.img} cols={cols} rows={rows}>
            <img
              {...srcset(item.img, 250, 200, rows, cols)}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
              title={item.title}
              position="top"
              actionIcon={
                <IconButton
                  sx={{ color: 'goldenrod' }}
                  aria-label={`star ${item.title}`}
                >
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://i.ytimg.com/vi/MrYPXUzTE5w/maxresdefault.jpg',
    title: 'LONG GOWN DESIGN',
    author: '@bkristastucchio',
    featured: true,
  },
  {
    img: 'https://anayadesignerstudio.com/wp-content/uploads/2022/02/Heavy-Work-Banarasi-Gown.webp',
    title: 'NEW ANARKALI SUIT',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://anayadesignerstudio.com/wp-content/uploads/2022/03/Long-Salwar-Suit-For-Eid-Function-555x833.jpg',
    title: 'LONG SALWAR SUIT',
    author: '@helloimnik',
  },
  {
    img: 'https://anayadesignerstudio.com/wp-content/uploads/2021/11/Latest-party-wear-Dresses-images-2022.jpg',
    title: 'PARTY WEAR DRESS',
    author: '@nolanissac',
  },
  {
    img: 'https://anayadesignerstudio.com/wp-content/uploads/2021/07/Peach-gown-with-Jacket-indian-Style-2021-555x833.jpg',
    title: 'PEACH GOWN WITH JACKET',
    author: '@hjrc33',
  },
  {
    img: 'https://images.pexels.com/photos/1229414/pexels-photo-1229414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'RED GOWN DRESS',
    author: '@arwinneil',
    featured: true,
  },
];
