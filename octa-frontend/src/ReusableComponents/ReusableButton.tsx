import * as React from 'react';
import Button from '@mui/material/Button';

interface ReusableButtonProps {
  onClick: () => void;
  disabled?: boolean;    
  label: string;
}

const ReusableButton: React.FC<ReusableButtonProps> = ({ onClick, disabled = false, label }) => {
  return (
    <Button
      type="button"
      fullWidth
      variant="contained"
      color="primary"
      disabled={disabled}
      onClick={onClick}
      sx={{ mt: 3 }}
    >
      {label}
    </Button>
  );
};

export default ReusableButton;
