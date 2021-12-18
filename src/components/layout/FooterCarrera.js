import React from 'react';
import {
  BsFacebook,
  BsInstagram,
  BsGithub,
  BsTwitter,
  BsYoutube,
  BsLinkedin,
  BsWhatsapp,
} from 'react-icons/bs';

const FooterCarrera = () => (
  <footer class="bg-black pt-10 sm:mt-10 pt-10">
    <div class="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
      <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
        <div class="text-xs uppercase text-gray-400 font-medium mb-6">U International</div>

        <a
          href="#docentes"
          class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
        >
          Nuestros Docentes
        </a>
        <a
          href="#planacademico"
          class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
        >
          Plan Académico
        </a>
        <a
          href="#requisitos"
          class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
        >
          Requisitos
        </a>
      </div>

      <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
        <div class="text-xs uppercase text-gray-400 font-medium mb-6">Contacto</div>

        <p class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
          Manuel de Velasco Martínez No. 101 – B, Colonia Solidaridad. Rincón de Romos, Ags
        </p>
        <p class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
          Teléfono: 465 111 2117
        </p>
        <p class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
          WhatsApp: 4493127372
        </p>
        <p class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
          Email: informes@iinternacional.edu.mx
        </p>
      </div>

      {/* <div class="md:flex-auto md:flex-row-reverse mt-2 flex-column flex bg-indigo-300"> */}
      {/* <div class="md:flex-auto md:flex-row-reverse p-10 flex-column p-5 w-1/2 sm:w-4/12 md:w-3/12 bg-indigo-300">
        <div className="flex items-center text-2xl bg-indigo-500">
          <img src="https://res.cloudinary.com/dslc2vjcz/image/upload/c_scale,h_100,w_100/v1639607884/logo_versiones-03_Blanco_1_cd3rg4.svg" />
        </div>
      </div> */}
    </div>

    <div class="pt-2">
      <div
        class="flex pb-5 px-3 m-auto pt-5 
          border-t border-gray-500 text-gray-400 text-sm 
          flex-col md:flex-row max-w-6xl"
      >
        <div class="mt-2 content-center">
          <img
            src="https://res.cloudinary.com/dslc2vjcz/image/upload/v1639607884/logo_versiones-03_Blanco_1_cd3rg4.svg"
            style={{ height: 125 }}
          />
          Copyright © 2021 - U International Privacidad, cookies y condiciones legales | Navegación
        </div>

        <div class="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
          <div class="w-6 mx-1 mr-5">
            <a href="https://www.facebook.com/uinternacionalags/" target="_blank">
              <BsFacebook size={25} />
            </a>
          </div>
          <div class="w-6 mx-1 mr-5">
            <a href="https://www.instagram.com/uinternacionalags/" target="_blank">
              <BsInstagram size={25} />
            </a>
          </div>
          <div class="w-6 mx-1 mr-5">
            <a href="https://wa.me/524493127372" target="_blank">
              <BsWhatsapp size={25} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default FooterCarrera;
