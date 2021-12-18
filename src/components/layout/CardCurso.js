import React from 'react';
import { Link } from 'gatsby';

const CardCurso = ({ course }) => (
  <div class="w-full px-4 mr-auto ml-auto mt-1">
    <div class="flex flex-col min-w-0 break-words bg-white w-full mb-2 shadow-lg rounded-lg bg-white">
      <img alt="..." src={course.image} class="w-full align-middle rounded-t-lg" />
      <blockquote class=" p-8 mb-3">
        <h4 class="text-sm font-bold text-indigo">{course.title}</h4>
        {/* <p class="text-sm font-light mt-2 text-white">{course.content}</p> */}
      </blockquote>
      <button class="w-full h-12 px-6 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
        <Link to="/carrera" >
          <p>Conoce mas ...</p>
        </Link>
      </button>
    </div>
  </div>
);

export default CardCurso;
