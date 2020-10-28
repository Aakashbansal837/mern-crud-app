import { Button } from "@material-ui/core";
import React from "react";

const Header = () => {
  return (
    <div>
      <Button variant="contained" color="primary" href="/">
        View
      </Button>
      <Button variant="contained" color="primary" href="/create">
        Create
      </Button>
      <Button variant="contained" color="primary" href="/update">
        Update
      </Button>
    </div>
  );
};

export default Header;
