import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import ImgList from "./ImgList";
import ImageBlog from "./ImageBlog";
import Divider from "@mui/material/Divider";
import Footer from './Footer';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';


const sections = [
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Trending', url: '#' },
  { title: 'Popular', url: '#' },
  { title: 'Modern', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Wedding', url: '#' },
];

const mainFeaturedPost = {
  title: 'Latest Saree Collections Reviews',
  description:
    "Reviews From Latest Saree Collection in 2022 , informing new Collection and efficiently about what's most interesting in this post's contents.",
  image: 'https://images.unsplash.com/photo-1618901185975-d59f7091bcfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Party Wear Dress',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://anayadesignerstudio.com/wp-content/uploads/2021/11/Latest-party-wear-Dresses-images-2022.jpg',
    imageLabel: 'Image Text',
  },
  {
    title: 'Engagement Lehenga',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://anayadesignerstudio.com/wp-content/uploads/2022/02/Engagement-Lehenga-For-Bride-555x833.webp',
    imageLabel: 'Image Text',
  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2022', url: '#' },
    { title: 'February 2022', url: '#' },
    { title: 'January 2022', url: '#' },
    { title: 'November 2021', url: '#' },
    { title: 'October 2021', url: '#' },
    { title: 'September 2021', url: '#' },
    { title: 'August 2021', url: '#' },
    { title: 'July 2021', url: '#' },
    { title: 'June 2021', url: '#' },
    { title: 'May 2021', url: '#' },
    { title: 'April 2021', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

const theme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections}  />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="From the Recent Reviews" posts={posts} />
            <ImgList />
            
          </Grid>
          <Divider />
          <Grid container spacing={5} sx={{ mt: 3 }}><ImageBlog /></Grid>
        </main>
      </Container>
      <Footer
        title="USEFULL LINKS"
        description="fashion is a source of looking attractive"
      />
    </ThemeProvider>
  );
}
