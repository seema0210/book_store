import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Grid,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Chip,
  Button,
  IconButton
} from "@mui/material";
import {
  Edit as EditIcon,
  Delete as DeleteIcon
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { getAllBookData } from "../api/HandleAPI";

const Dashboard = () => {
  
  const [allData, setAllData] = useState([])

  useEffect(()=>{
    getAllBookData().then((data)=>setAllData(data))
  }, [])
  console.log('allData', allData);
  

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      <AppBar position="static">
         <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Book Management Dashboard
          </Typography>

          <Button
            component={Link}
            to="/add-book"
            color="inherit"
            variant="outlined"
            sx={{ borderColor: "white" }}
          >
            Add Book
          </Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ py: 3 }} maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2 }}>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Title</TableCell>
                      <TableCell>Author</TableCell>
                      <TableCell>Genre</TableCell>
                      <TableCell>Year</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {allData?.map((b) => (
                      <TableRow key={b._id} hover>
                        <TableCell>{b.title}</TableCell>
                        <TableCell>{b.author}</TableCell>
                        <TableCell>{b.genre}</TableCell>
                        <TableCell>{b.year}</TableCell>
                        <TableCell>
                          <Chip
                            label={b.status}
                            size="small"
                            color={b.status === "Available" ? "success" : "warning"}
                          />
                        </TableCell>
                        <TableCell>
                         <IconButton
                            color="primary"
                            component={Link}
                            to={`/update-book/${b._id}`}
                            aria-label="edit"
                          >
                            <EditIcon />
                          </IconButton>

                          <IconButton
                            color="error"
                            // onClick={() => handleDeleteClick(book)}
                            aria-label="delete"
                          >
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Dashboard;

