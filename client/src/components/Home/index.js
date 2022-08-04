import * as React from 'react';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import BasicDatePicker from '../BasicDatePicker';
import IconTabs from '../IconTabs/Index';
import Slider from "../Slider/Slider"
 
export default function Home() {
  const [value, setValue] = React.useState(0);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <>
    
      <div className="search" sx={{ gap: 2 }}  >
      <Box sx={{ p: 2 }}>
      box
    </Box>
        <Box className='location' component="form" noValidate autoComplete="off">
          <FormControl 
          sx={{ width: '25ch' }}>
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
      {/* <h2>Section for different types of rentals</h2> */}
      With over 4000 users worldwide, find the right trailer for your needs.
      <h1> 
        
      </h1>
      <Slider/>
      
    </>
  );
};
