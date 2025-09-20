import React, { useEffect, useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { getBookById, updateBookData } from "../api/HandleAPI";

const BookFormUpdate = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [book, setBook] = useState({
        title: "",
        author: "",
        genre: "",
        year: "",
        status: "",
    });

    useEffect(() => {
        getBookById(id).then((data) => {
            setBook({
                title: data.title,
                author: data.author,
                genre: data.genre,
                year: data.year,
                status: data.status,
            })
        })
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook({ ...book, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        updateBookData(id, book)
        navigate('/')
    };

    return (
        <Box sx={{ p: 3, maxWidth: 500, mx: "auto" }}>
            <form onSubmit={handleSubmit}>
                <TextField
                    name="title"
                    label="Title"
                    fullWidth
                    margin="normal"
                    value={book.title}
                    onChange={handleChange}
                    required
                />
                <TextField
                    name="author"
                    label="Author"
                    fullWidth
                    margin="normal"
                    value={book.author}
                    onChange={handleChange}
                    required
                />
                <TextField
                    name="genre"
                    label="Genre"
                    fullWidth
                    margin="normal"
                    value={book.genre}
                    onChange={handleChange}
                    required
                />
                <TextField
                    name="year"
                    type="number"
                    label="Published Year"
                    fullWidth
                    margin="normal"
                    value={book.year}
                    onChange={handleChange}
                    required
                />
                <TextField
                    name="status"
                    label="Status (Available/Issued)"
                    fullWidth
                    margin="normal"
                    value={book.status}
                    onChange={handleChange}
                    required
                />
                <Button type="submit" variant="contained" sx={{ mt: 2 }}>
                    Update Book
                </Button>
            </form>
        </Box>
    );
};

export default BookFormUpdate;
