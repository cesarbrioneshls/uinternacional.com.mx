import React from 'react';
import {
  BsFacebook,
  BsInstagram,
  BsGithub,
  BsTwitter,
  BsYoutube,
  BsLinkedin,
} from 'react-icons/bs';

const Footer = () => (
  <footer className="mx-auto py-16 px-3 mt-48 text-white" style={{ backgroundColor: '#219bde' }}>
    <div>
      <BsLinkedin size={50} />
    </div>
    <div className="flex -mx-3 m-5 ml-5 ">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Titulaciones destacadas</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://codebushi.com" className="text-white">
              Curso de Digital Product Managers
            </a>
          </li>
          <li>
            <a href="https://codebushi.com" className="text-white">
              FP – Desarrollo de aplicaciones web
            </a>
          </li>
          <li>
            <a href="https://codebushi.com" className="text-white">
              Curso de SEO
            </a>
          </li>
          <li>
            <a href="https://codebushi.com" className="text-white">
              FP – Desarrollo de aplicaciones multiplataforma
            </a>
          </li>
        </ul>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">SobreU International</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://codebushi.com" className="text-white">
              Contacto
            </a>
          </li>
          <li>
            <a href="https://codebushi.com" className="text-white">
              Método Reto
            </a>
          </li>
          <li>
            <a href="https://codebushi.com" className="text-white">
              Profesiones con futuro
            </a>
          </li>
          <li>
            <a href="https://codebushi.com" className="text-white">
              Formación continua
            </a>
          </li>
        </ul>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Comunidad</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://codebushi.com" className="text-white">
              Eventos OpenU International
            </a>
          </li>
          <li>
            <a href="https://codebushi.com" className="text-white">
              Opiniones de alumnos
            </a>
          </li>
          <li>
            <a href="https://codebushi.com" className="text-white">
              Teletrabajo
            </a>
          </li>
          <li>
            <a href="https://codebushi.com" className="text-white">
              Digital Workers
            </a>
          </li>
        </ul>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">En el blog</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://codebushi.com" className="text-white">
              Soft skills
            </a>
          </li>
          <li>
            <a href="https://codebushi.com" className="text-white">
              Transformacion digital
            </a>
          </li>
          <li>
            <a href="https://codebushi.com" className="text-white">
              Scrum Master
            </a>
          </li>
          <li>
            <a href="https://codebushi.com" className="text-white">
              OKRs
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div style={{ borderTop: ' 3px solid #bbb' }}></div>
    <div class="flex flex-row -mx-3 m-5 ml-5 mt-10">
      <div class="mr-10">
        <BsFacebook size={25} />
      </div>
      <div class="mr-10">
        <BsInstagram size={25} />
      </div>
      <div class="mr-10">
        <BsGithub size={25} />
      </div>
      <div class="mr-10">
        <BsTwitter size={25} />
      </div>
      <div class="mr-10">
        <BsYoutube size={25} />
      </div>
      <div class="mr-10">
        <BsLinkedin size={25} />
      </div>
    </div>
    <div class="flex flex-row -mx-3 m-5 ml-5 mt-10">
      <div class="mr-3">
        <p>Copyright © 2021U International</p>
      </div>
      <div class="mr-3">
        <p>Privacidad, cookies y condiciones legales</p>
      </div>
      <div class="mr-3">
        <p>Navegación</p>
      </div>
    </div>
  </footer>
);

export default Footer;
