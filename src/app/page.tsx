"use client"

import CalendarComponent from '@/components/calendar-component'
import AddDialog from '@/components/add-dialog'
import DeleteDialog from '@/components/delete-dialog'
import ViewDialog from '@/components/view-dialog';
import EditDialog from '@/components/edit-dialog';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  px-20">
      <CalendarComponent  />
      <DeleteDialog  />
      <AddDialog />
      <ViewDialog />
      <EditDialog />
    </main >
  );
}
