import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useDialogStore } from '@/stores/dialog-store'

function ViewDialog() {
  const { showViewDialog, closeViewDialog, tempEvent } = useDialogStore()

  if (!tempEvent) { closeViewDialog(); return null }

  return (
    <Transition.Root show={showViewDialog} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeViewDialog}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div>
                  <div className="mt-3 text-center sm:mt-5">
                    <div className="mt-2 space-y-2 text-left">
                      <p><strong>Title:</strong> {tempEvent.title}</p>
                      <p><strong>Author:</strong> {tempEvent.createdBy.name}</p>
                      <p><strong>Description:</strong> {tempEvent.description}</p>
                      <p><strong>Priority:</strong> {tempEvent.priority}</p>
                      <p><strong>Target:</strong> {tempEvent.target}</p>
                      <p><strong>Start:</strong> {tempEvent.startDate} {tempEvent.startTime}</p>
                      <p><strong>End:</strong> {tempEvent.endDate} {tempEvent.endTime}</p>
                    </div>

                    <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                      <button
                        type="button"
                        className={`mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-span-2 sm:mt-0`}
                        onClick={closeViewDialog}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default ViewDialog