import { EventForm } from '@/types/globals'
import { EventInput } from '@fullcalendar/core/index.js'
import { create } from 'zustand'

interface CalendarState {
  events: EventInput[]

  addEvent: (event: EventForm) => void
  updateEvent: (event: EventForm) => void
  deleteEvent: (id: string) => void
}

export const useCalendarStore = create<CalendarState>((set) => ({
  events: [],
  idToDelete: null,
  addEvent: (event) =>
    set((state) => ({
      events: [
        ...state.events,
        {
          id: event.id ?? new Date().getTime().toString(),
          title: event.title,
          start: event.startTime ? `${event.startDate}T${event.startTime}` : event.startDate,
          end: event.endDate ? (event.endTime ? `${event.endDate}T${event.endTime}` : event.endDate) : undefined,
          allDay: !event.startTime && !event.endTime,
          extendedProps: {
            description: event.description,
            priority: event.priority,
            target: event.target,
            createdBy: event.createdBy
          }
        }
      ]
    })),
  updateEvent: (updatedEvent) =>
    set((state) => ({
      events: state.events.map(e => e.id === updatedEvent.id ? {
        id: updatedEvent.id,
        title: updatedEvent.title,
        start: updatedEvent.startTime ? `${updatedEvent.startDate}T${updatedEvent.startTime}` : updatedEvent.startDate,
        end: updatedEvent.endDate ? (updatedEvent.endTime ? `${updatedEvent.endDate}T${updatedEvent.endTime}` : updatedEvent.endDate) : undefined,
        allDay: !updatedEvent.startTime && !updatedEvent.endTime,
        extendedProps: {
          description: updatedEvent.description,
          priority: updatedEvent.priority,
          target: updatedEvent.target,
          createdBy: updatedEvent.createdBy
        }
      } : e)
    })),
  deleteEvent: (id) => set((state) => ({ events: state.events.filter(e => e.id !== id) })),
}))