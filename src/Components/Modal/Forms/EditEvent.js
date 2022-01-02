import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { eventUpdated } from "../../../Redux/events/eventsSlice";
import { Button, FormControl, FormLabel, TextField } from '@mui/material';
import { PlannerContext } from '../../../Context/mainContext';
// import { DesktopDatePicker, LocalizationProvider } from '@mui/lab';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';

export default function EditEvent () {
    const dispatch = useDispatch();
    const { toggleModal, activeEventID } = useContext(PlannerContext);
    
    const event = useSelector((state) => 
      state.events.find((event) => event.id === activeEventID)
    );

    const [title, setTitle] = useState(event.title);
    const [desc, setDesc] = useState(event.desc);
    const [error, setError] = useState(null);

    const handleChangeTitle = (e) => setTitle(e.target.value);
    const handleChangeDesc = (e) => setDesc(e.target.value);

    // const handleChangeDate = (newValue) => {
    //   console.log('onchange: ', newValue)
    //   setDate(newValue);
    // };

    // useEffect(() => {
    //   console.log('date: ', new Date(date).toLocaleString())
    // }, [date])

    const handleSubmit = () => {
      if (title && desc) {
        dispatch(
            eventUpdated({
            id: activeEventID,
            title,
            desc
          })
        );
        setError(null);
      } else {
        setError("Please fill in all fields")
      }

      toggleModal(false);
      setTitle("");
      setDesc("");
    }

    const handleCancel = () => {
      toggleModal(false);
      setTitle("");
      setDesc("");
    }

    return (
        <div>
            <div style={{ paddingBottom: '15px', width: '100%', marginTop: 5 }}>
                <FormControl>
                    <span style={{ margin: '10px 0px', display: 'flex', flexDirection: 'column' }}>
                      <FormLabel color="secondary">
                        Event Title *
                      </FormLabel>
                      <TextField
                        style={{ width: '600px' }}
                        id="eventTitle"
                        variant="outlined"
                        onChange={handleChangeTitle}
                        value={title}
                        />
                    </span>
                   
                   <span style={{ margin: '10px 0px', display: 'flex', flexDirection: 'column'  }}>
                      <FormLabel color="secondary">
                        Event Description *
                      </FormLabel>
                      <TextField
                        style={{ width: '600px' }}
                        id="eventDesc"
                        multiline
                        value={desc}
                        onChange={handleChangeDesc}
                        variant="outlined" />
                   </span>

                   {/* <span style={{ margin: '10px 0px', display: 'flex', flexDirection: 'column'  }}>
                      <FormLabel color="secondary">
                        Date *
                      </FormLabel>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DesktopDatePicker
                          id="eventDate"
                          inputFormat="dd/mm/yyyy"
                          value={date}
                          disableOpenPicker
                          onChange={handleChangeDate}
                          renderInput={(params) => <TextField style={{ width: '600px' }} {...params} />}
                        />
                      </LocalizationProvider>
                   </span> */}
                   
                </FormControl>

            </div>
            <div>
              {error && error}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button onClick={handleCancel} variant="contained" color="secondary">
                    Cancel
                </Button>
                <Button onClick={handleSubmit} variant="contained" color="warning">
                    Submit
                </Button>
            </div>
        </div>
    )
}