import { Button, Modal } from 'flowbite-react'
import React from 'react'

const customTheme ={
    "root": {
      "base": "fixed inset-x-0 top-0 z-50 h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full",
      "show": {
        "on": "flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80",
        "off": "hidden"
      },
      "sizes": {
        "sm": "max-w-sm",
        "md": "max-w-md",
        "lg": "max-w-lg",
        "xl": "max-w-xl",
        "2xl": "max-w-2xl",
        "3xl": "max-w-3xl",
        "4xl": "max-w-4xl",
        "5xl": "max-w-5xl",
        "6xl": "max-w-6xl",
        "7xl": "max-w-7xl"
      },
    },
    "content": {
      "base": "relative h-full w-full p-4 md:h-auto",
      "inner": "relative flex max-h-[90dvh] flex-col rounded-lg bg-white shadow dark:bg-gray-700"
    },
    "header": {
      "base": "flex items-start justify-between rounded-t border-b p-5 dark:border-gray-600",
      "popup": "border-b-0 p-2",
      "title": "text-xl font-medium text-gray-900 dark:text-white",
      "close": {
        "base": "ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",
        "icon": "h-5 w-5"
      }
    },
}

const ModalComponent = ({isModalOpen,closeModal,confirmRemoveFromCart}) => {
  return (
    <Modal show={isModalOpen} size='sm' onClose={closeModal} popup>
      <Modal.Header/>
      <Modal.Body>
        <div className="text-center mt-5 mb-5">
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Are you sure you want to delete this product?
          </h3>
          <div className="flex justify-center gap-4">
            <Button className='bg-red-600 px-4 text-lg' onClick={confirmRemoveFromCart}>
              Yes
            </Button>
            <Button className='border border-black text-black px-4' onClick={closeModal}>
              No
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default ModalComponent