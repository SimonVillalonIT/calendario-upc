import { useDialogStore } from '@/stores/dialog-store'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { PencilIcon, TrashIcon } from '@heroicons/react/16/solid'

function OptionsMenu({ className, eventId }: { className?: string, eventId: string }) {

    const {openEditDialog, openDeleteDialog} = useDialogStore()
    return (
        <Menu>
            <MenuButton className={`${className}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-gray-700">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                </svg>
            </MenuButton>
            <MenuItems
                transition
                anchor="bottom end"
                className="w-52 z-50 origin-top-right rounded-xl border border-gray-900/10 bg-white p-1 text-sm/6 text-gray-900 transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
            >
                <MenuItem>
                    <button onClick={e => {openEditDialog(eventId)}} className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-gray-100">
                        <PencilIcon width={14} height={14} />
                        Edit
                    </button>
                </MenuItem>
                <MenuItem>
                    <button onClick={(e => {openDeleteDialog(eventId)})} className="text-red-700 group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-gray-100">
                        <TrashIcon width={14} height={14} />
                        Delete
                    </button>
                </MenuItem>
            </MenuItems>
        </Menu>
    )
}

export default OptionsMenu