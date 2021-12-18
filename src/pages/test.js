import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Test = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div class="md:p-12 bg-indigo-100 flex flex-row flex-wrap">
          <form class="md:w-1/2-screen m-0 p-5 bg-white w-full tw-h-full shadow md:rounded-lg">
            <div class="text-2xl text-indigo-900">
              RSVP <small class="pl-2 text-gray-500">Let Us Know You're Coming</small>
            </div>

            <div class="flex-col flex py-3">
              <label class="pb-2 text-gray-700 font-semibold">Nombre</label>
              <input
                type="text"
                class="p-2 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200"
                placeholder="Juan"
              />
            </div>

            <div class="flex-col flex py-3">
              <label class="pb-2 text-gray-700 font-semibold">Tu correo</label>
              <input
                type="text"
                class="p-2 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200"
                placeholder="s7r4u55@mail.com"
              />
            </div>

            {/* <div class="flex-col flex py-3">
              <label class="pb-2 text-gray-700 font-semibold">How Many </label>
              <input
                type="text"
                class="p-2 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200"
                placeholder="2"
              />
            </div> */}

            <div class="flex-col flex py-3">
              <label class="pb-2 text-gray-700 font-semibold">
                Your Invite Code <small>Blank if you have not recieved one</small>
              </label>
              <input
                type="text"
                class="p-2 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200"
                placeholder="(449)-912-32-01"
              />

              {/* <div class="mt-5 p-3 bg-green-600 text-white">We Have Recieved Your Submission.</div> */}
            </div>

            <div class="mt-2">
              <button class="p-3 bg-indigo-400 text-white w-full hover:bg-indigo-300">
                Enviar el formulario!
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Test;
