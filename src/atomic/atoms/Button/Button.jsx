import React from "react";
import { Button } from "semantic-ui-react";

export const Btn = ({ label, ...props }) => {
  return (
    <Button color="olive" {...props}>
      {label}
    </Button>
  );
};
