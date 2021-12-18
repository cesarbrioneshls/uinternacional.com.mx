import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import StepWizard from 'react-step-wizard';
import StepOne from './StepOne';

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
    <div class="grid grid-cols-3 gap-4 w-3/4 m-auto">
      <div class="border-t-4 border-purple-500 pt-4">
        <p class="uppercase text-purple-500 font-bold">Step 1</p>

        <p class="font-semibold">Job details</p>
      </div>
      <div class="border-t-4 border-purple-500 pt-4">
        <p class="uppercase text-purple-500 font-bold">Step 2</p>

        <p class="font-semibold">Application form</p>
      </div>
      <div class="border-t-4 border-gray-200 pt-4">
        <p class="uppercase text-gray-400 font-bold">Step 3</p>

        <p class="font-semibold">Preview</p>
      </div>
    </div>
  );
};

export default Test;
