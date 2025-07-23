import React from 'react';
import { Alert, AlertTitle } from '@mui/material';

const ErrorMessage = ({ title = 'Error', message, severity = 'error', onClose }) => {
  return (
    <Alert severity={severity} onClose={onClose} sx={{ mb: 2 }}>
      {title && <AlertTitle>{title}</AlertTitle>}
      {message}
    </Alert>
  );
};

export default ErrorMessage;