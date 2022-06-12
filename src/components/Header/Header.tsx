import { AppBar, Container } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="sticky">
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "50px",
        }}
      >
        <span>Home</span>
        <span>Countries</span>
      </Container>
    </AppBar>
  );
};

export default Header;
