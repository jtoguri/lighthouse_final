import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import IconTabs from '../IconTabs/Index';
export default function MaterialUIPickers() {
  const [fromDate, setFromDate] = React.useState(
   null
  );
  const [toDate, setToDate] = React.useState(
    null
  );
  const handleFromDateChange = (newValue) => {
    setFromDate(newValue);
  };
  const handleToDateChange = (newValue) => {
    setToDate(newValue);
  };
  return (
    <>
    
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        <div style={{margin:0}}>
        <DesktopDatePicker
          label="From Date"
          inputFormat="MM/dd/yyyy"
          value={fromDate}
          onChange={handleFromDateChange}
          renderInput={(params) => <TextField {...params} />}
        />

        <DesktopDatePicker
          label="To Date"
          inputFormat="MM/dd/yyyy"
          value={toDate}
          onChange={handleToDateChange}
          renderInput={(params) => <TextField {...params} />}
        />
        
        </div>
        
      </Stack>
      
    </LocalizationProvider>
    
</>
  );
}
