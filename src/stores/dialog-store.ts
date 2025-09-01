import { EventForm } from '@/types/globals'
import { create } from 'zustand'



interface DialogState {
  showAddDialog: boolean
  showViewDialog: boolean
  showEditDialog: boolean
  showDeleteDialog: boolean
  eventId: string | null
  tempEvent: EventForm,

  openAddDialog: () => void
  closeAddDialog: () => void

  openEditDialog: (id: string) => void
  closeEditDialog: () => void

  openDeleteDialog: (id: string) => void
  closeDeleteDialog: () => void

  openViewDialog: () => void
  closeViewDialog: () => void

  setTempEvent: (event: Partial<EventForm>) => void,
}

export const useDialogStore = create<DialogState>((set) => ({
  showAddDialog: false,
  showEditDialog: false,
  showDeleteDialog: false,
  showViewDialog: false,
  tempEvent: {
    id: '',
    title: '',
    description: '',
    priority: '',
    target: '',
    startDate: '',
    startTime: '',
    endDate: '',
    endTime: '',
    createdBy: { id: '', email: '',name: '', role: 'teacher' }
  },

  setTempEvent: (event) => set((state) => ({ tempEvent: { ...state.tempEvent, ...event } })),
  eventId: null,

  openAddDialog: () => set({ showAddDialog: true }),
  closeAddDialog: () => set({ showAddDialog: false }),

  openEditDialog: (id: string) => set({ showEditDialog: true, eventId: id }),
  closeEditDialog: () => set({ showEditDialog: false, eventId: null }),

  openDeleteDialog: (id: string) => set({ showDeleteDialog: true, eventId: id }),
  closeDeleteDialog: () => set({ showDeleteDialog: false, eventId: null }),

  openViewDialog: () => set({ showViewDialog: true}),
  closeViewDialog: () => set({ showViewDialog: false, eventId: null }),
}))
