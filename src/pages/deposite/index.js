import { Box, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import Depositeform from 'src/views/Deposite/Depositeform';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Index() {
  const [submitform, setSubmitform] = useState(false);
  const [sumbtshow, setSumbtshow] = useState(true);

  const handleFormSubmit = () => {
    // Add your logic here to handle the form submit action
    setSubmitform(true);
    setSumbtshow(false);
  };

  const notify = () => toast("Text has been copied to clipboard!");

  const showForm = () => {
    setSubmitform(false);
    setSumbtshow(true);
  };

  return (
    <>
      {submitform && (
        <Box
          display='flex'
          justifyContent='center'
          flexDirection='column'
          alignItems='center'
          gap={10}
          mt={{ xs: 20, md: 20 }}
          ml={{ xs: 3, md: 65 }}
          width={{ xs: 350, md: 450, lg: 450 }}
          height={{ xs: 300, md: 350, lg: 350 }}
          sx={{
            borderRadius: "50px",
            background: "#e0e0e0",
            boxShadow: "31px 31px 62px #bebebe, -31px -31px 62px #ffffff",
          }}
        >
          <Typography variant='p' fontWeight='bold' fontSize={{ xs: 20, md: 23 }}>
            Your request has been submitted
          </Typography>
          <Button variant="contained" onClick={showForm}>
            OK
          </Button>
        </Box>
      )}

      {sumbtshow && <Depositeform onSubmit={handleFormSubmit} onCopyToClipboard={notify} />}
      <ToastContainer autoClose={3000} theme="dark" />
    </>
  );
}
