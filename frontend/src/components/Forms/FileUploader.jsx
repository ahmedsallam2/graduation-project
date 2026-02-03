import React, { useState } from "react";
import { uploadToS3 } from "../../services/uploadFileService"

//MUI components
import {
    Button,
    LinearProgress,
    Alert,
    Box
} from "@mui/material";

export default function FileUploader({ setValue, trigger, uploadState, setUploadState, userId = 125 }) {
    const [progress, setProgress] = useState(0);

    // will remove later
    // const simulateUpload = (file) => {
    //     setUploadState("uploading");
    //     setProgress(0);

    //     const interval = setInterval(() => {
    //         setProgress((p) => {
    //             if (p >= 100) {
    //                 clearInterval(interval);
    //                 setUploadState("success");
    //                 return 100;
    //             }
    //             return p + 5;
    //         });
    //         console.log(file.name);
    //     }, 200);
    // };

    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        // Reset states before new upload
        setUploadState("idle");
        setProgress(0);

        try {
            setUploadState("uploading");
            const result = await uploadToS3(file, userId)
            setValue("dataFile", {
                file,
                s3Key: result.key,
                uploadId: result.uploadId
            }, { shouldValidate: true });
            const isValid = await trigger("dataFile");
            if (!isValid) {
                setUploadState("error");
                return;
            }
            setUploadState("success");
        }
        catch (err) {
            console.log("Upload Error:", err);
            setUploadState("error");
            return;
        }
        setUploadState("idle")

    }


    return (
        <Box width="100%" sx={{ display: 'flex', direction: "row", gap: 2, alignItems: 'center', mt: 2 }}>
            <Button
                variant="contained"
                component="label"
                color={
                    uploadState === "success"
                        ? "success"
                        : uploadState === "error"
                            ? "error"
                            : "primary"
                }
                disabled={uploadState === "uploading"}
            >
                {uploadState === "idle" && "Upload Data"}
                {uploadState === "uploading" && "Uploading..."}
                {uploadState === "success" && "Uploaded ✓"}
                {uploadState === "error" && "Failed ✗"}

                <input
                    type="file"
                    hidden
                    onChange={handleFileUpload}
                />
            </Button>

            {uploadState === "uploading" && (
                <LinearProgress
                    variant="determinate"
                    value={progress}
                    sx={{ borderRadius: 1, height: 8 }}
                />
            )}

            {uploadState === "success" && (
                <Alert severity="success">File uploaded successfully.</Alert>
            )}

            {uploadState === "error" && (
                <Alert severity="error">Upload failed. Please try again.</Alert>
            )}
        </Box>
    );
}
