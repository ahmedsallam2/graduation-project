import * as React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import FileUploader from '../Forms/FileUploader';
import { useDatabase } from '../../contexts/useDatabase';

// MUI components
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



export default function AddFileDialog({ open, onClose }) {

    const { addDatabase } = useDatabase();
    const [uploadState, setUploadState] = useState("idle");


    const form = useForm({
        defaultValues: {
            nameFile: "",
            dataFile: null
        }
    });
    const { register, handleSubmit, reset, formState: { errors }, setValue, trigger } = form

    const handleCloseDialog = () => {
        reset();                 // reset form fields
        setUploadState("idle");  // reset upload state
        onClose();               // close dialog
    };


    const sendFile = (event) => {
        console.log("File Data:", event)
        addDatabase({
            id: Date.now(),
            dbName: event.nameFile,
            s3Key: event.dataFile.s3Key,
            uploadId: event.dataFile.uploadId,
            // other properties can be added here
        });
        handleCloseDialog();
    };
    const onError = (errors) => {
        console.log("Validation Errors:", errors)
    }
    return (
        <>
            <Dialog
                open={open}
                onClose={handleCloseDialog}
                maxWidth="sm"
                fullWidth
                PaperProps={{
                    sx: {
                        borderRadius: 3,
                        p: 1.5,
                    }
                }}
            >
                <form onSubmit={handleSubmit(sendFile, onError)}>

                    <DialogTitle
                        sx={{
                            fontWeight: "bold",
                            color: "primary.main",
                            pb: 0.5
                        }}
                    >
                        Add File
                    </DialogTitle>

                    <DialogContent
                        sx={{
                            mt: 1,
                            display: "flex",
                            flexDirection: "column",
                            gap: 3,
                        }}
                    >
                        <TextField
                            autoFocus
                            label="File Name"
                            variant="standard"
                            fullWidth
                            {...register("nameFile", { required: "File Name is Required" })}
                            error={!!errors.nameFile}
                            helperText={errors.nameFile?.message}
                        />

                        <FileUploader
                            uploadState={uploadState}
                            setUploadState={setUploadState}
                            setValue={setValue}
                            trigger={trigger}
                            errors={errors.dataFile}
                        />
                        <input
                            type="hidden"
                            {...register("dataFile", { required: "File to be uploaded is Required" })}
                        />
                        {errors.dataFile && (
                            <DialogContentText sx={{ color: 'error.main', fontSize: '0.75rem', mt: -2 }}>
                                {errors.dataFile.message}
                            </DialogContentText>
                        )}
                    </DialogContent>

                    <DialogActions sx={{ px: 3, pb: 2 }}>
                        <Button
                            onClick={() => {
                                handleCloseDialog();
                            }}
                            color="inherit"
                        >
                            Cancel
                        </Button>

                        <Button
                            type="submit"
                            disabled={uploadState !== "success"}
                            variant="contained"
                            sx={{
                                px: 4,
                                py: 0.8,
                                textTransform: "none",
                                fontWeight: "bold"
                            }}
                        >
                            Add
                        </Button>
                    </DialogActions>

                </form>
            </Dialog>

        </>
    );
}