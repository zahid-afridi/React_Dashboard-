import React from 'react'
import Referralcode from 'src/views/referralcode/Referralcode'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function index() {
    const notify = () => toast("Text has been copied to clipboard!");
  
return (
    <>
        <Referralcode onCopyToClipboard={notify}></Referralcode>
        <ToastContainer autoClose={3000} theme="dark" />
    </>
  )
}
