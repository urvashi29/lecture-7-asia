import React from 'react';
import { useDispatch } from 'react-redux';
import { onDeleteEmployee } from '../../actions';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';

const Display = ({ employee }) => {
    //console.log(employee);

    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(onDeleteEmployee(id));
    }

    const employeeList = employee.length ? (employee.map(emp => {
        return (
            <React.Fragment key={emp.id}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="..."
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {emp.email}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Click below to delete record
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={() => handleDelete(emp.id)}>Delete</Button>
                    </CardActions>
                </Card>
            </React.Fragment>
        )
    })) : (<p></p>)

    return (
        <>
            {employeeList}
        </>
    )

};

export default Display;


