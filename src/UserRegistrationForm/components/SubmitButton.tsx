import React from "react";
import Button from "../../Form/ui/Button";

interface Props {
  isSubmitting: boolean;
}

const SubmitButton: React.FC<Props> = ({ isSubmitting }) => (
  <Button type="submit" variant="blue" fullWidth disabled={isSubmitting}>
    {isSubmitting ? "Registering..." : "Register"}
  </Button>
);

export default SubmitButton;
