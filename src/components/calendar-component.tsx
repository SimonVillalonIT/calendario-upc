import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import { EventClickArg, EventSourceInput } from '@fullcalendar/core/index.js'
import esLocale from '@fullcalendar/core/locales/es'
import { useCalendarStore } from '@/stores/calendar-store'
import { useDialogStore } from '@/stores/dialog-store'
import useUser from '@/hooks/user-hook'

function CalendarComponent() {
  const {user} = useUser()
  const { events, addEvent } = useCalendarStore()
  const { openAddDialog, openViewDialog, setTempEvent } = useDialogStore()

  function handleDateClick(info: DateClickArg) {

    if (!user) return 

    const date = info.date
    const startDate = date.toISOString().slice(0, 10)        
    const startTime = date.toTimeString().slice(0, 5)       

    setTempEvent({ startDate, startTime })

    openAddDialog()
  }

 function eventClick(info: EventClickArg) {
  const event = info.event

  const temp = {
    id: event.id,
    title: event.title,
    description: event.extendedProps?.description || '',
    priority: event.extendedProps?.priority || '',
    target: event.extendedProps?.target || '',
    createdBy: event.extendedProps?.createdBy || '',
    startDate: event.start ? event.start.toISOString().slice(0, 10) : '',
    startTime: event.start ? event.start.toTimeString().slice(0, 5) : '',
    endDate: event.end ? event.end.toISOString().slice(0, 10) : '',
    endTime: event.end ? event.end.toTimeString().slice(0, 5) : '',
    canEdit: event.extendedProps?.canEdit || false
  }

  setTempEvent(temp)
  openViewDialog()
}
 

  return (
    <div className="w-full">
      <FullCalendar
        locale={esLocale}
        plugins={[
          dayGridPlugin,
          interactionPlugin,
          timeGridPlugin
        ]}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek'
        }}
        events={events as EventSourceInput}
        nowIndicator={true}
        editable={true}
        droppable={true}
        selectable={true}
        selectMirror={true}
        dateClick={handleDateClick}
        drop={(data) => addEvent(data)}
        eventClick={eventClick}
      />
    </div>
  )
}

export default CalendarComponent