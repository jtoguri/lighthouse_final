import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Container } from '@mui/system';


export default function IconTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (

    <Tabs  sx={{
      p: 1,
      border: 1,
      borderColor: (theme) => theme.palette.primary.main,
      
    }}
  value={value}
  onChange={handleChange}
  variant="standard"
  scrollButtons
  allowScrollButtonsMobile
  centered
  aria-label="scrollable force tabs example"
>
  <Tab label="Utility" />
  <Tab label="Car" />
  <Tab label="Cargo" />
  <Tab label="Rv" />
  <Tab label="Off-road" />
  <Tab label="Trucks" />
  <Tab label="Packages" />
</Tabs>

  );
}
