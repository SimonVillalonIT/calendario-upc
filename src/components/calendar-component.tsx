import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin, { DropArg } from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import { EventSourceInput } from '@fullcalendar/core/index.js'

function CalendarComponent({ events, allEvents, handleDateClick, addEvent, handleDeleteModal }: {
  events: {title: string, id: string}[],
  allEvents: { title: string, start: string | Date, allDay: boolean, id: number }[],
  handleDateClick: (arg: { date: Date, allDay: boolean }) => void,
  addEvent: (data: DropArg) => void,
  handleDeleteModal: (data: { event: { id: string } }) => void,
}) {    

  return (
    <div className="grid grid-cols-10">
          <div className="col-span-8">
            <FullCalendar
              plugins={[
                dayGridPlugin,
                interactionPlugin,
                timeGridPlugin
              ]}
              headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'resourceTimelineWook, dayGridMonth,timeGridWeek'
              }}
              events={allEvents as EventSourceInput}
              nowIndicator={true}
              editable={true}
              droppable={true}
              selectable={true}
              selectMirror={true}
              dateClick={handleDateClick}
              drop={(data) => addEvent(data)}
              eventClick={(data) => handleDeleteModal(data)}
            />
          </div>
          <div id="draggable-el" className="ml-8 w-full border-2 p-2 rounded-md mt-16 lg:h-1/2 bg-violet-50">
            <h1 className="font-bold text-lg text-center">Drag Event</h1>
            {events.map(event => (
              <div
                className="fc-event border-2 p-1 m-2 w-full rounded-md ml-auto text-center bg-white"
                title={event.title}
                key={event.id}
              >
                {event.title}
              </div>
            ))}
          </div>
        </div>


  )
}

export default CalendarComponent