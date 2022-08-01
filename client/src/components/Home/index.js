import * as React from 'react';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import BasicDatePicker from '../BasicDatePicker';
import IconTabs from '../IconTabs/Index';

export default function Home() {
  const [value, setValue] = React.useState(0);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="search">

        <Box className='location' component="form" noValidate autoComplete="off">
          <FormControl sx={{ width: '25ch' }}>
            <OutlinedInput placeholder="Location" />
          </FormControl>
          
        </Box>
        <BasicDatePicker/>
        <div>

        </div>

      </div>
      <h1>
        Lets grow together
      </h1>
      <h2>Section for different types of rentals</h2>
      <IconTabs className='IconTabs'/>
    </>
  );
};
