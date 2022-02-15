import React from "react";
import { toast } from "react-toastify";

const useToast = () => {
    const successToast = (text: string) => {
        toast.success(`Success! - ${text}`, {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 3000, // 3s
            hideProgressBar: false,
            closeOnClick: true,
        });
    };

    const errorToast = (text: string) => {
        toast.error(`Error! - ${text}`, {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 3000, // 3s
            hideProgressBar: false,
            closeOnClick: true,
        });
    };

    return {
        successToast,
        errorToast,
    };
};

export default useToast;