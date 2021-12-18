import { Link } from 'gatsby';
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';
import CustomModal from '../CustomModal';
import './Header.css';

const Header = () => (
  <header className="top-0 bg-white shadow sticky sticky">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div>
          <img
            src="https://res.cloudinary.com/dslc2vjcz/image/upload/v1639774658/logos-alberto-13_yddois.svg"
            class="img-responsive"
          />
        </div>
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#nosotros">
          Nosotros
        </AnchorLink>
        <AnchorLink className="px-4" href="#planacademico">
          Plan Académico
        </AnchorLink>
        <AnchorLink className="px-4" href="#nuestroequipo">
          Nuestro Equipo
        </AnchorLink>
        <AnchorLink className="px-4" href="#nosotros">
          Campus Virtual
        </AnchorLink>
        <p className="px-4" href="#"></p>
        {/* <AnchorLink className="px-4"></AnchorLink> */}
      </div>
      <div className="hidden md:block">
        <Link
          activeStyle={{
            color: 'red',
            fontWeight: 700,
          }}
          to="/Formulario"
        >
          <button
            className="bg-primary
          hover:bg-primary-darker
          rounded
          p-3
          text-white"
            onClick={() => {
              console.log('pressed!');
            }}
          >
            ¡Inscríbete Ahora!
          </button>
        </Link>
      </div>
    </div>
  </header>
);

export default Header;
