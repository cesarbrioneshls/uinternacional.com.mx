import React from 'react';
import {
  BsFacebook,
  BsInstagram,
  BsGithub,
  BsTwitter,
  BsYoutube,
  BsLinkedin,
} from 'react-icons/bs';

const CardDocente = ({ className, children }) => (
  <div>
    <div class="flex flex-col items-center justify-center bg-white rounded-lg border-1">
      <div class="inline-flex shadow-xl border border-gray-200 rounded-full overflow-hidden h-40 w-40">
        <img
          src="https://res.cloudinary.com/dslc2vjcz/image/upload/v1638497255/a21cffce-17fb-4a09-a86c-6ddb1c94d84b_upblr6.jpg"
          alt=""
          class="h-full w-full"
        />
      </div>

      <h2 class="mt-4 font-bold text-xl">Dra. Omaira Parada Gelves</h2>
      <h6 class="mt-2 text-sm font-medium">Doctora en Ingeniería Telemática</h6>
      <div class="sm:w-3/5 p-2 w-3/2">
        <p class="text-xs text-gray-600 text-center mt-3">
          Doctora en Ingeniería Telemática por la Universidad Politécnica de Madrid, actualmente es
          Directora de E-learning Development. Ha desarrollado modelos educativos en línea exitosos.
          Se distingue por ser una mujer proactiva, emprendedora, visionaria y responsable,
          apasionada por la investigación y la educación.
        </p>
      </div>

      <ul class="flex flex-row mt-4 space-x-2">
        <li>
          <a
            href=""
            class="flex items-center justify-center h-8 w-8 rounded-full text-gray-800 border-gray-800"
          >
            <BsInstagram size={25} />
          </a>
        </li>
        <li>
          <a
            href=""
            class="flex items-center justify-center h-8 w-8 rounded-full text-gray-800 border-gray-800"
          >
            <BsLinkedin size={25} />
          </a>
        </li>
        <li>
          <a
            href=""
            class="flex items-center justify-center h-8 w-8 rounded-full text-gray-800 border-gray-800"
          >
            <BsFacebook size={25} />
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default CardDocente;
