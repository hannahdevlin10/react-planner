import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: '1',
        title: `Dave's Birthday 🎂`,
        desc: `This is Dave's birthday - remember to buy present!`,
        date: `1645493000000`
    },
    {
        id: '2',
        title: `Trip to Paris 🇫🇷`,
        desc: `Going on a trip to Paris with Dave`,
        date: `1655493000000`
    }
];

const eventsSlice = createSlice({
    name: "events",
    initialState,
    reducers: {
        eventAdded(state, action) {
            state.push(action.payload);
        },
        eventDeleted(state, action) {
            const { id } = action.payload;
            const existingEvent = state.find((event) => event.id === id);
            if (existingEvent) {
                return state.filter((event) => event.id !== id);
            }
        },
        eventUpdated(state, action) {
            const { id, title, desc, date } = action.payload;
            const existingEvent = state.find((event) => event.id === id);
            if (existingEvent) {
                existingEvent.title = title;
                existingEvent.desc = desc;
                existingEvent.date = date;
            }
        }
    },
});

export const { eventAdded, eventDeleted, eventUpdated } = eventsSlice.actions;
export default eventsSlice.reducer;