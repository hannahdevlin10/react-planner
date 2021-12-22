import React, { createContext, useState } from 'react';

export const PlannerContext = createContext(null);

export const PlannerProvider = ({ children }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

    const toggleModal = (open = !modalOpen) => setModalOpen(open);

    return (
        <PlannerContext.Provider value={{ toggleModal, modalOpen, selectedDate, setSelectedDate }}>
            {children}
        </PlannerContext.Provider>
    )
}