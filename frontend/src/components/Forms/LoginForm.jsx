import React from 'react'
import { useEffect } from "react"
import { useForm } from 'react-hook-form'
import { useAuth } from "../../contexts/useAuth"
import { useNavigate } from "react-router-dom"

// MUI
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

export default function LoginForm() {
    const form = useForm()
    const { register, handleSubmit, formState: { errors } } = form
    const { login } = useAuth()
    const navigate = useNavigate()

    // If user is already logged in, redirect to home
    useEffect(() => {
        if (localStorage.getItem("user")) {
            navigate("/chat")
        }
    }, [navigate])


    // On form submit
    function onSubmit(data) {
        login(data)
        console.log("Form Data (login):", data)
        navigate("/chat")
    }

    // On form error
    function onError(errors) {
        console.log("Validation Errors:", errors)
        alert("Please fix the errors in the form.")
    }

    const styleField = {
        flex: 1,
        "& .MuiOutlinedInput-root": {
            borderRadius: 2,
            fontSize: "0.95rem",
            "& textarea": {
                resize: "vertical",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "primary.main",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "primary.main",
                borderWidth: "2px",
            },
        },

    }

    return (
        <form onSubmit={handleSubmit(onSubmit, onError)} style={{ width: "100%" }} >
            <TextField
                label="Email"
                variant="outlined"
                {...register("email", { required: "Email is required" })}
                error={!!errors.email}
                helperText={errors.email?.message}
                fullWidth
                margin="normal"
                sx={styleField}
            />

            <TextField
                label="Password"
                type="password"
                variant="outlined"
                {...register("password", { required: "Password is required" })}
                error={!!errors.password}
                helperText={errors.password?.message}
                fullWidth
                margin="normal"
                sx={styleField}
            />

            <Button type="submit" fullWidth variant="contained" sx={{ fontSize: '1.2em' }}>
                Login
            </Button>
        </form>
    )
}
