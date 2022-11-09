import React, { useState } from "react"
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './Display.css';
import { TextField } from "@mui/material";

function searchFor(term) {
    return (x) => {
        return x.strCategory.toLowerCase().includes(term.toLowerCase()) || !term;
    }
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "teal",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: "20px"
}));


const Display = ({ recipes }) => {
    const [term, setTerm] = useState('');

    const handleChange = (e) => {
        setTerm(e.target.value);
    }

    return (
        <div style={{ textAlign: 'center' }}>

            <TextField
                name="recipe"
                type="text"
                value={term}
                onChange={handleChange}
                placeholder="Search..."
                id="recipe"
                style={{ marginTop: "20px" }}
            />

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                {recipes.length ? (recipes.filter(searchFor(term)).map(item => {
                    return (
                        <React.Fragment>
                            <Grid item xs={2} sm={4} md={4} key={item.idCategory}>
                                <Item>
                                    <p>
                                        {item.strCategory}
                                    </p>
                                    <img src={item.strCategoryThumb} alt="itemstrCategory" className="recipe-image" />
                                    <p>{item.strCategoryDescription.slice(0, 20)}</p>
                                </Item>
                            </Grid>
                        </React.Fragment>
                    )
                })) : (<p>No Post Yet</p>)}
            </Grid>
        </div>
    )
}

export default Display