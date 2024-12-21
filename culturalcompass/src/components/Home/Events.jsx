"use client"
import React, { useState, useEffect } from "react";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";

// Sample event data (could be fetched from an API or a local file)
const items = [
  {
    id: 1,
    title: "Indrajatra",
    date: "2024-05-31",
    location: "Kathmandu, Nepal",
    image: "/indrajatra.png",
    link: "https://www.facebook.com/events/indrajatra/1048412078600640/",
  },
  {
    id: 2,
    title: "Khadga Jatra",
    date: "2024-05-31",
    location: "Kathmandu, Nepal",
    image: "/pashupati.png",
    link: "https://www.facebook.com/events/indrajatra/1048412078600640/",
  },
  // Add more events as necessary...
];

const Events = () => {
  const [allEvents, setAllEvents] = useState(items);
  const [filteredEvents, setFilteredEvents] = useState(items);
  const [showModal, setShowModal] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: "", start: "", id: 0 });

  const handleDateClick = (arg) => {
    const selectedDate = arg.dateStr;
    setFilteredEvents(allEvents.filter((event) => event.date === selectedDate));
  };

  useEffect(() => {
    // If no date is selected, show all events.
    setFilteredEvents(allEvents);
  }, [allEvents]);

  return (
    <div className="w-full h-full px-28 py-12 ">
      <div className="w-full md:h-16 h-14 border-l-8 border-[#4cb9f2] flex justify-start items-center px-6 mb-12">
        <h1 className="md:text-4xl text-2xl text-black font-bold">Upcoming Events</h1>
      </div>

      {/* Calendar Section */}
      <div className="mb-12 w-full max-w-xl mx-auto">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          events={allEvents.map((event) => ({
            title: event.title,
            date: event.date,
            description: event.location,
          }))}
          nowIndicator={true}
          dateClick={handleDateClick} // Filter events when a date is clicked
          dayClassNames={(arg) => {
            // Apply hover effect with Tailwind CSS classes for date cells
            return [
              "hover:bg-blue-200", // Highlight the date on hover
              "cursor-pointer", // Pointer cursor to indicate interactivity
            ];
          }}
          height="400px" // Set a fixed height for the calendar
          style={{ maxWidth: "100%" }} // Ensure it doesn't exceed the container width
        />
      </div>

      {/* Event Grid Section */}
      <div className="grid grid-cols-1 gap-x-2 gap-y-8">
        {filteredEvents.map((item) => (
          <div key={item.id} className="flex justify-center items-center">
            <div className="w-[22rem] h-[18rem] bg-white flex flex-col rounded-xl overflow-hidden shadow-lg relative gap-8">
              <div className="w-full h-[8rem] bg-blue-400">
                <img src={item.image} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="w-[8rem] h-8 bg-red-500 p-2 rounded-lg flex justify-center items-center absolute top-28 right-4">
                <span className="flex items-center gap-2">
                  <SlCalender color="white" />
                  <h1 className="text-white text-[14px]">{item.date}</h1>
                </span>
              </div>
              <div className="flex flex-col p-4 justify-center gap-4">
                <span className="flex gap-2 items-center">
                  <IoLocationOutline size={20} color="red" />
                  <p className="px-2 py-1 border rounded-md text-black/80 text-xl font-semibold">
                    {item.location}
                  </p>
                </span>
                <span className="flex gap-2 items-center">
                  <FaLocationCrosshairs size={20} color="blue" />
                  <h1 className="text-black/80 text-lg font-semibold px-2">{item.title}</h1>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;