"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import Modal from '@/components/ui/modal';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/navbar';
import { FooterSection } from '@/components/footer';

type Event = {
    id: number;
    title: string;
    date: string;
    description: string;
    address: string;
    venue: string;
    mapUrl: string; 
};

const events: Event[] = [
    {
        id: 1,
        title: 'Hackathon Atria',
        date: '2024-11-07',
        description: 'An inter-collegiate 24-hour hackathon.',
        address: 'Atria Institute of Technology, Bangalore',
        venue: 'Main Auditorium',
        mapUrl: 'https://maps.google.com/?q=Atria+Institute+of+Technology',
    },
    {
        id: 2,
        title: 'React Meetup',
        date: '2024-12-01',
        description: 'A gathering of React enthusiasts discussing the latest in React.',
        address: 'Tech Park, Mumbai',
        venue: 'Conference Hall B',
        mapUrl: 'https://maps.google.com/?q=Tech+Park+Mumbai',
    },
    {
        id: 3,
        title: 'JavaScript Bootcamp',
        date: '2024-12-10',
        description: 'An intensive bootcamp covering modern JavaScript frameworks and libraries.',
        address: 'CodeWorks Institute, Delhi',
        venue: 'Training Room 101',
        mapUrl: 'https://maps.google.com/?q=CodeWorks+Institute+Delhi',
    },
];

const EventPage: React.FC = () => {
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

    const handleEventClick = (event: Event) => {
        setSelectedEvent(event);
    };

    const handleCloseModal = () => {
        setSelectedEvent(null);
    };

    return (
        <>
            <Navbar />
            <div className="container mx-auto p-4">
                <h1 className="text-4xl font-bold mb-8 text-center">Upcoming Events</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event) => (
                        <motion.div
                            key={event.id}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="cursor-pointer"
                            onClick={() => handleEventClick(event)}
                        >
                            <Card className="p-6 border rounded-xl shadow-lg transition-all duration-200 hover:shadow-2xl bg-background">
                                <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
                                <p className=" text-primary text-lg mb-4">{event.date}</p>
                                <p className=" text-primary">{event.description.slice(0, 80)}...</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {selectedEvent && (
                    <Modal
                        open={Boolean(selectedEvent)}
                        onClose={handleCloseModal}
                        className="p-6 bg-background rounded-xl shadow-lg max-w-xl mx-auto border-2"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 30 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h2 className="text-3xl font-bold mb-4">{selectedEvent.title}</h2>
                            <p className="text-primary text-lg mb-2">{selectedEvent.date}</p>
                            <p className="text-primary mb-6">{selectedEvent.description}</p>
                            <p className="text-lg font-medium">Venue: {selectedEvent.venue}</p>
                            <p className="text-lg">Address: {selectedEvent.address}</p>
                            <div className="mt-4">
                                <a
                                    href={selectedEvent.mapUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 underline"
                                >
                                    View on Map
                                </a>
                            </div>
                            <Button className="mt-6 px-4 py-2 rounded-full text-white bg-blue-600 hover:bg-blue-700" onClick={handleCloseModal}>
                                Close
                            </Button>
                        </motion.div>
                    </Modal>
                )}
            </div>
            <FooterSection />
        </>
    );
};

export default EventPage;
