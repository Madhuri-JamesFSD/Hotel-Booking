import React, { useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { Box, FormControl, InputLabel, MenuItem, Model, Select, Typography } from '@mui/material';
import { DateRange, DateRangePicker } from 'react-date-range';

export function BookingModel({ open, handleClose, data }) {
    const [selectedCount, setSelectedCount] = useState(2);
    const getGuests = () => {
        return Number(data?.rooms[0].content.split('')[0])
    };
    
    return (
        <Model open={open} onClose={handleClose}>
            <Box sx={{
                width: '40%',
                height: '50%',
                top: '50%',
                left: '50%',
                bgcolor: 'white',
                margin: 'auto'
                boxShadow: '0 0 10px 0' rgba: '(0,0,0,0.2)',
                borderRadius: '2px',
                p:3
            }}></Box>
            <Typography variant="h6" fontWeight={'bold'} sx={{ margin: '3px 0' }}>
                ${data?.pricePerNight} / night
            </Typography>
            <FormControl fullWidth sx={{ margin: '10px 0' }}>
                <InputLabel>Number of Guests</InputLabel>
                <Select label="Number of Guests" value={selectedCount} onChange={(e)=>setSelectedCount(e.target.value)}>
                    {[...Array(getGuests())].map((guest, index) => (
                        <MenuItem value={index+1}>{index + 1}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            
            <Typography variant="h6" fontWeight={'bold'} color="gray">
                SelectDate
            </Typography>
<DateRange ranges={[selectionRange]} />
       </Model>

   ) 

}