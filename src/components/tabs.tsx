'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useRouter } from 'next/navigation'

export default function CenteredTabs() {
  const router = useRouter();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        return router.push('/categories');
      case 1:
        return router.push('/transactions');
      case 2:
        return router.push('/reports');
    }
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Categories" />
        <Tab label="Transactions" />
        <Tab label="Reports" />
      </Tabs>
    </Box>
  );
}