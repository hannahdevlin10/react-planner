import React, { useContext, useState } from 'react';
import { Button, FormControl, FormLabel, TextField } from '@mui/material';
import { PlannerContext } from '../../../Context/mainContext';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

export default function CreateEvent () {
    const { toggleModal, setEvents } = useContext(PlannerContext);
    const [value, setValue] = useState(new Date('2014-08-18T21:11:54'));

    const handleChange = (newValue) => {
      setValue(newValue);
    };

    return (
        <div>
            <div style={{ paddingBottom: '15px', width: '100%', marginTop: 5 }}>
                <FormControl>
                    <span style={{ margin: '10px 0px', display: 'flex', flexDirection: 'column' }}>
                      <FormLabel color="secondary">
                        Event Title
                      </FormLabel>
                      <TextField
                        style={{ width: '600px' }}
                        id="outlined-basic"
                        variant="outlined"
                        />
                    </span>
                   
                   <span style={{ margin: '10px 0px', display: 'flex', flexDirection: 'column'  }}>
                      <FormLabel color="secondary">
                        Event Description
                      </FormLabel>
                      <TextField
                        style={{ width: '600px' }}
                        id="outlined-basic"
                        required
                        multiline
                        variant="outlined" />
                   </span>

                   <span style={{ margin: '10px 0px', display: 'flex', flexDirection: 'column'  }}>
                      <FormLabel color="secondary">
                        Start Date
                      </FormLabel>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DesktopDatePicker
                          inputFormat="MM/dd/yyyy"
                          value={value}
                          onChange={handleChange}
                          renderInput={(params) => <TextField style={{ width: '600px' }} {...params} />}
                        />
                      </LocalizationProvider>
                   </span>

                   <span style={{ margin: '10px 0px', display: 'flex', flexDirection: 'column'  }}>
                      <FormLabel color="secondary">
                        End Date
                      </FormLabel>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DesktopDatePicker
                          inputFormat="MM/dd/yyyy"
                          value={value}
                          onChange={handleChange}
                          renderInput={(params) => <TextField style={{ width: '600px' }} {...params} />}
                        />
                      </LocalizationProvider>
                   </span>
                    
                </FormControl>
                
                
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingRight: 3 }}>
                <Button onClick={() => toggleModal(false)} variant="contained" color="secondary">
                    Cancel
                </Button>
                <Button onClick={() => toggleModal(false)} variant="contained" color="warning">
                    Submit
                </Button>
            </div>
        </div>
    )
}