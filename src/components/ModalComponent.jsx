import { Button, Modal } from 'flowbite-react'
import React from 'react'

const ModalComponent = ({isModalOpen,closeModal,confirmRemoveFromCart}) => {
  return (
    <Modal show={isModalOpen} onClose={closeModal} popup>
      <Modal.Body>
        <div className="text-center mt-5 mb-5">
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Are you sure you want to delete this product?
          </h3>
          <div className="flex justify-center gap-4">
            <Button className='bg-red-600 px-2' onClick={confirmRemoveFromCart}>
              Yes
            </Button>
            <Button className='border border-black text-black px-2' onClick={closeModal}>
              No
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default ModalComponent