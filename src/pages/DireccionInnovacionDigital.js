import React from 'react';
import Slider from 'react-slick';
import CardDocente from '../components/CardDocente';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import SvgCharts from '../svg/SvgCharts';
import Collapsible from 'react-collapsible';
import LayoutCarrera from '../components/layout/LayoutCarrera';

function DireccionInnovacionDigital({ title }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <LayoutCarrera>
      <div>
        <div class="md:flex">
          <div class="md:w-6/12 text-white bg-indigo-800 p-8 sm:rounded-tr-lg md:rounded-tr-none md:rounded-bl-lg rounded-tl-lg flex items-center">
            <div>
              <h1 class="text-4xl mb-5 font-bold">
                Doctorado En {''}
                <span class="text-indigo-300">
                  {''} Doctorado en Dirección e Innovación Digital En Los Sistemas De Salud
                </span>
              </h1>
              <h2 class="text-md mb-12">
                Formar Doctores en Dirección e Innovación Digital en los Sistemas de Salud con la
                fundamentación teórica y metodológica para abordar y generar propuestas de mejora
                continua en los procesos directivos, diseñar y poner en práctica políticas, planes,
                modelos, metodologías y estrategias que contribuyan al desarrollo eficaz y eficiente
                de los sistemas de salud; capaces de innovar y afrontar los retos generados por la
                transformación digital.
              </h2>
              <div class="flex">
                <div class="mr-8">
                  <p class="text-2xl font-bold">RVOE</p>
                  <p class="text-sm">20211669</p>
                </div>
                <div class="mr-8">
                  <p class="text-2xl font-bold">Duración</p>
                  <p class="text-sm">1 Año y 8 meses</p>
                </div>
                <div>
                  <p class="text-2xl font-bold">Modalidad</p>
                  <p class="text-sm">En línea</p>
                </div>
              </div>
            </div>
          </div>
          <div class="md:w-6/12 relative">
            <div class="w-full h-full opacity-60 absolute sm:rounded-bl-lg md:rounded-bl-none md:rounded-tr-lg rounded-br-lg"></div>
            <img
              class="h-full w-full object-cover sm:rounded-bl-lg md:rounded-bl-none md:rounded-tr-lg rounded-br-lg"
              src="https://res.cloudinary.com/dslc2vjcz/image/upload/v1639749536/PP_Dir_e_inno_hospitales_zyf7j7.png"
              alt="Banner"
            />
          </div>
        </div>
      </div>
      <section id="docentes" className="py-10 lg:py-10">
        <div className="container mx-auto text-center mb-10">
          <h3 className="text-3xl lg:text-4xl font-semibold">Nuestros Docentes</h3>
        </div>
        <div className="container mx-auto">
          <div>
            <Slider {...settings}>
              <div className="flex flex-col md:flex-row md:-mx-3">
                <CardDocente />
              </div>
              <div>
                <CardDocente />
              </div>
              <div>
                <CardDocente />
              </div>
              <div>
                <CardDocente />
              </div>
            </Slider>
          </div>
        </div>
      </section>

      <div>
        <section class=" text-gray-200 bg-black">
          <div class="max-w-6xl mx-auto px-5 py-24 ">
            <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
              <h1
                class=" title-font mb-2 text-4xl font-extrabold leading-10 tracking-tight text-left sm:text-5xl sm:leading-none md:text-6xl"
                id="planacademico"
              >
                Plan Académico
              </h1>
            </div>
            <div class="flex flex-wrap -m-4">
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="border border-gray-300 p-6 rounded-lg">
                  <h2 class="text-lg  font-medium title-font mb-2">Cuatrimestre I</h2>
                  <p class="leading-relaxed text-base">• Políticas públicas</p>
                  <p class="leading-relaxed text-base">• Dirección</p>
                  <p class="leading-relaxed text-base">• Las TIC en la gestión directiva</p>
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="border border-gray-300 p-6 rounded-lg">
                  <h2 class="text-lg  font-medium title-font mb-2">Cuatrimestre II</h2>

                  <p class="leading-relaxed text-base"> • Gestión económica</p>
                  <p class="leading-relaxed text-base">• Liderazgo y comunicación</p>
                  <p class="leading-relaxed text-base">
                    {' '}
                    • Transformación digital en las instituciones
                  </p>
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="border border-gray-300 p-6 rounded-lg">
                  <h2 class="text-lg  font-medium title-font mb-2">Cuatrimestre III</h2>
                  <p class="leading-relaxed text-base">• Dirección organizacional</p>
                  <p class="leading-relaxed text-base"> • Dirección estratégica</p>
                  <p class="leading-relaxed text-base">
                    {' '}
                    • Tecnologías de la transformación digital
                  </p>
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="border border-gray-300 p-6 rounded-lg">
                  <h2 class="text-lg  font-medium title-font mb-2">Cuatrimestre IV</h2>
                  <p class="leading-relaxed text-base"> • Dirección de la calidad</p>

                  <p class="leading-relaxed text-base">• Estrategia de marketing</p>
                  <p class="leading-relaxed text-base"> • Dirección de la innovación</p>
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="border border-gray-300 p-6 rounded-lg">
                  <h2 class="text-lg  font-medium title-font mb-2">Cuatrimestre V</h2>
                  <p class="leading-relaxed text-base"> • Certificación y acreditación</p>
                  <p class="leading-relaxed text-base"> • Relaciones públicas</p>
                  <p class="leading-relaxed text-base"> • Seminario de titulación</p>
                  {/* <p class="leading-relaxed text-base"> • Seminario de tesis III</p> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="container mx-auto text-center">
        <h3 className="text-3xl lg:text-4xl font-semibold py-10 lg:py-10" id="requisitos">
          Requisitos
        </h3>
      </div>
      <SplitSection
        primarySlot={
          <div className="lg:pr-16 xl:pr-16">
            <h3 className="text-3xl font-semibold leading-tight">Para Alumnos Mexicanos</h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              • Acta de nacimiento <br />• Certificado total de estudios de Maestría <br />
              • CURP
              <br />• Identificación oficial
              <br /> • Comprobante de domicilio <br />
            </p>
          </div>
        }
        secondarySlot={
          <div className="lg:pl-32 xl:pl-48">
            <h3 className="text-3xl font-semibold leading-tight">Para Alumnos Extranjeros</h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              • Acta de nacimiento con el apostille de la Haya
              <br />• Certificado total de estudios de Maestría con el apostille de la Haya
              <br />• Identificación oficial con el apostille de la Haya
              <br /> • Comprobante de domicilio
              <br />
            </p>
          </div>
        }
      />

      <SplitSection
        primarySlot={
          <div className="lg:pr-16 xl:pr-16">
            <h3 className="text-3xl font-semibold leading-tight">Perfil de ingreso</h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              El aspirante al Doctorado en Competencias Docentes para la Transformación Digital debe
              poseer:
            </p>
            <p className="mt-8 text-xl font-light leading-relaxed">
              • Experiencia laboral en Instituciones de salud <br /> • Grado de Maestría
            </p>
          </div>
        }
      />
    </LayoutCarrera>
  );
}

export default DireccionInnovacionDigital;
