import React, { createContext, useState } from 'react';

export const PlannerContext = createContext(null);

export const PlannerProvider = ({ children }) => {
    const [events, setEvents] = ([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [activeModal, setActiveModal] = useState(null);

    const toggleModal = (open = !modalOpen) => setModalOpen(open);

    return (
        <PlannerContext.Provider
            value={{
                events,
                setEvents,
                toggleModal,
                modalOpen,
                selectedDate,
                setSelectedDate,
                activeModal,
                setActiveModal
            }}>
            {children}
        </PlannerContext.Provider>
    )
}