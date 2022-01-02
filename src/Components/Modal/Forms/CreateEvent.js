import React, { useContext, useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { eventAdded } from "../../../Redux/events/eventsSlice";

import { Button, FormControl, FormLabel, TextField } from '@mui/material';
import { PlannerContext } from '../../../Context/mainContext';

import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

export default function CreateEvent () {
    const dispatch = useDispatch();
    const { toggleModal, selectedDate, setSelectedDate, activeModal } = useContext(PlannerContext);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [date, setDate] = useState(null);
    const [error, setError] = useState(null);

    // useEffect(() => {
    //   if (selectedDate && activeModal === 'Create') {
    //     setDate(selectedDate);
    //   } 
    // }, []);

    const handleChangeTitle = (e) => setTitle(e.target.value);
    const handleChangeDesc = (e) => setDesc(e.target.value);

    const handleChangeDate = (newValue) => {
      let x = Date.parse(newValue);
      setDate(x);
    };

    const eventsAmount = useSelector((state) => state.events.length);

    const handleSubmit = () => {
      if (title && desc && date) {
        dispatch(
          eventAdded({
            id: eventsAmount + 1,
            title,
            desc,
            date
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
      setSelectedDate(null);
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

                   <span style={{ margin: '10px 0px', display: 'flex', flexDirection: 'column'  }}>
                      <FormLabel color="secondary">
                        Date
                      </FormLabel>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                          id="eventDate"
                          inputFormat="dd/MM/yyyy"
                          value={date}
                          disableOpenPicker
                          onChange={handleChangeDate}
                          renderInput={(params) => <TextField style={{ width: '600px' }} {...params} />}
                        />
                      </LocalizationProvider>
                   </span>
                </FormControl>

            </div>
            <div>
              {error && error}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingRight: 3 }}>
                <Button onClick={handleCancel} variant="contained" color="secondary">
                    Cancel
                </Button>
                <Button onClick={handleSubmit} disabled={!title || !desc || !date} variant="contained" color="warning">
                    Submit
                </Button>
            </div>
        </div>
    )
}