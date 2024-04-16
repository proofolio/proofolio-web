import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import { Container, Typography, Box } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RestoreIcon from "@mui/icons-material/Restore";

const DUMMY_BLOGS = [
  {
    blogId: 1,
    publishedDate: "2024.Feb.05",
    blogTitle: "my first blog",
    thumbnail: "https://picsum.photos/id/1/200/300",
    heartNum: 2,
    blogContent: "<html>",
    comment: {
      commentId: "number",
      createdDate: "string",
      commentMessage: "<html>",
    },
  },
  {
    blogId: 2,
    publishedDate: "2024.Feb.05",
    blogTitle: "my 2nd blog",
    thumbnail: "https://picsum.photos/id/2/200/300",
    heartNum: 2,
    blogContent: "<html>",
    comment: {
      commentId: "number",
      createdDate: "string",
      commentMessage: "<html>",
    },
  },
  {
    blogId: 3,
    publishedDate: "2024.Feb.05",
    blogTitle: "my 3rd blog",
    thumbnail: "https://picsum.photos/id/3/200/300",
    heartNum: 3,
    blogContent: "<html>",
    comment: {
      commentId: "number",
      createdDate: "string",
      commentMessage: "<html>",
    },
  },
  {
    blogId: 4,
    publishedDate: "2024.Feb.05",
    blogTitle: "my 4th blog",
    thumbnail: "https://picsum.photos/id/4/200/300",
    heartNum: 0,
    blogContent: "<html>",
    comment: {
      commentId: "number",
      createdDate: "string",
      commentMessage: "<html>",
    },
  },
  {
    blogId: 5,
    publishedDate: "2024.Feb.05",
    blogTitle: "my 5th blog",
    thumbnail: "https://picsum.photos/id/5/200/300",
    heartNum: 2,
    blogContent: "<html>",
    comment: {
      commentId: "number",
      createdDate: "string",
      commentMessage: "<html>",
    },
  },
  {
    blogId: 6,
    publishedDate: "2024.Feb.05",
    blogTitle: "my 6th blog",
    thumbnail: "https://picsum.photos/id/6/200/300",
    heartNum: 2,
    blogContent: "<html>",
    comment: {
      commentId: "number",
      createdDate: "string",
      commentMessage: "<html>",
    },
  },
  {
    blogId: 7,
    publishedDate: "2024.Feb.05",
    blogTitle: "my 7th blog",
    thumbnail: "https://picsum.photos/id/7/200/300",
    heartNum: 2,
    blogContent: "<html>",
    comment: {
      commentId: "number",
      createdDate: "string",
      commentMessage: "<html>",
    },
  },
];

function BlogBrief() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <div>BlogBrief</div>
      <Container>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h5" sx={{ width: "400px" }}>
            {" "}
            the most {value.toUpperCase()} of my blog :{" "}
          </Typography>
          <BottomNavigation value={value} onChange={handleChange}>
            <BottomNavigationAction
              label="Recents"
              value="recents"
              icon={<RestoreIcon />}
            />
            <BottomNavigationAction
              label="Favorites"
              value="favorites"
              icon={<FavoriteIcon />}
            />
          </BottomNavigation>
        </Box>
        <ImageList
          variant="masonry"
          cols={3}
          gap={15}
          sx={{
            width: "100%",
            height: 300,
            overflowX: "auto",
            display: "flex",
          }}
        >
          {DUMMY_BLOGS.map((blog) => (
            <ImageListItem key={blog.blogId}>
              <img
                srcSet={`${blog.thumbnail}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${blog.thumbnail}?w=248&fit=crop&auto=format`}
                alt={blog.blogTitle}
                loading="lazy"
                style={{ width: "300px" }}
              />
              <ImageListItemBar
                title={blog.blogTitle}
                subtitle={blog.publishedDate}
                actionIcon={
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about ${blog.blogTitle}`}
                  >
                    <FavoriteBorderIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </>
  );
}

export default BlogBrief;
