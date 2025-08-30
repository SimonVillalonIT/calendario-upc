"use client"

import CalendarComponent from '@/components/calendar-component'
import AddDialog from '@/components/add-dialog'
import DeleteDialog from '@/components/delete-dialog'
import useCalendar from '@/hooks/calendar-hook'
import { createClient } from '@/lib/supabase/client'
import { useEffect } from 'react'



export default function Home() {
  const supabase = createClient()
  
  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      console.log(user)
    }
    getUser()
  }, [])
  const { addEvent, allEvents, events, handleChange, handleCloseModal, handleDateClick, handleDelete, handleDeleteModal, handleSubmit, newEvent, setNewEvent, setShowDeleteModal, setShowModal, showDeleteModal, showModal } = useCalendar()
  return (
    <>
      <nav className="flex justify-between mb-12 border-b border-violet-100 p-4">
        <h1 className="font-bold text-2xl text-gray-700">Calendar</h1>
      </nav>
      <pre>{}</pre>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <CalendarComponent addEvent={addEvent} allEvents={allEvents} events={events} handleDateClick={handleDateClick} handleDeleteModal={handleDeleteModal} />
        <DeleteDialog newEvent={newEvent} handleCloseModal={handleCloseModal} handleDelete={handleDelete} setShowDeleteModal={setShowDeleteModal} showDeleteModal={showDeleteModal} />
        <AddDialog handleChange={handleChange} handleCloseModal={handleCloseModal} handleSubmit={handleSubmit} newEvent={newEvent} setNewEvent={setNewEvent} setShowModal={setShowModal} showModal={showModal} />
      </main >
    </>
  );
}
