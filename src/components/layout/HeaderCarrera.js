import { Link } from 'gatsby';
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';
import CustomModal from '../CustomModal';
import './Header.css';

const HeaderCarrera = () => (
  <header className="top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <Link to="/">
          <div>
            <img
              src="https://res.cloudinary.com/dslc2vjcz/image/upload/v1639774658/logos-alberto-13_yddois.svg"
              class="img-responsive"
            />
          </div>
        </Link>
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#docentes">
          Nuestros Docentes
        </AnchorLink>
        <AnchorLink className="px-4" href="#planacademico">
          Plan Académico
        </AnchorLink>
        <AnchorLink className="px-4" href="#requisitos">
          Requisitos
        </AnchorLink>
      </div>
      <div className="hidden md:block">
        <button
          className="bg-indigo-500
          hover:bg-indigo-600
          rounded
          p-3
          text-white"
          onClick={() => {
            console.log('pressed!');
          }}
        >
          ¡Inscríbete Ahora!
        </button>
      </div>
    </div>
  </header>
);

export default HeaderCarrera;
