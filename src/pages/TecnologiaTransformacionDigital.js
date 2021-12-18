import React from 'react';
import Slider from 'react-slick';
import CardDocente from '../components/CardDocente';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import SvgCharts from '../svg/SvgCharts';
import Collapsible from 'react-collapsible';
import LayoutCarrera from '../components/layout/LayoutCarrera';

function TecnologiaTransformacionDigital() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <LayoutCarrera>
      <div class="">
        <div class="md:flex">
          <div class="md:w-6/12 text-white bg-indigo-800 p-8 sm:rounded-tr-lg md:rounded-tr-none md:rounded-bl-lg rounded-tl-lg flex items-center">
            <div>
              <h1 class="text-4xl mb-5 font-bold">
                Doctorado En {''}
                <span class="text-indigo-300">{''}Tecnologías De La Transformación Digital</span>
              </h1>
              <h2 class="text-md mb-12">
                Formar Doctores en Tecnologías de la Transformación digital capaces de afrontar las
                necesidades generadas por la cuarta revolución industrial con una profunda
                orientación en inteligencia artificial, big data, ciberseguridad, tecnologías
                móviles, internet de las cosas e ingeniería para el procesamiento masivo de datos;
                así como desarrollar proyectos de investigación innovadores enfocados a solucionar
                situaciones reales de transformación digital en las empresas actuales y futuras
              </h2>
              <div class="flex">
                <div class="mr-8">
                  <p class="text-2xl font-bold">RVOE</p>
                  <p class="text-sm">20211665</p>
                </div>
                <div class="mr-8">
                  <p class="text-2xl font-bold">Duración</p>
                  <p class="text-sm">2 Años</p>
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
              src="https://res.cloudinary.com/dslc2vjcz/image/upload/v1639605308/PP_Doctorado_tecnolog%C3%ADas_tesvqk.png"
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
                  <p class="leading-relaxed text-base">• Innovación y transformación digital</p>
                  <p class="leading-relaxed text-base">• Estadística</p>
                  <p class="leading-relaxed text-base">
                    • Ingeniería para el procesamiento masivo de datos
                  </p>
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="border border-gray-300 p-6 rounded-lg">
                  <h2 class="text-lg  font-medium title-font mb-2">Cuatrimestre II</h2>
                  <p class="leading-relaxed text-base">• Inteligencia artificial</p>
                  <p class="leading-relaxed text-base">• Big data</p>
                  <p class="leading-relaxed text-base">
                    • Aplicaciones móviles para el internet de las cosas
                  </p>
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="border border-gray-300 p-6 rounded-lg">
                  <h2 class="text-lg  font-medium title-font mb-2">Cuatrimestre III</h2>
                  <p class="leading-relaxed text-base"> • Internet de las cosas</p>
                  <p class="leading-relaxed text-base"> • Ciberseguridad</p>
                  <p class="leading-relaxed text-base">• Ideación de innovación</p>
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="border border-gray-300 p-6 rounded-lg">
                  <h2 class="text-lg  font-medium title-font mb-2">Cuatrimestre IV</h2>
                  <p class="leading-relaxed text-base"> • Seminario de tesis I</p>
                  <p class="leading-relaxed text-base"> • Tópicos tecnológicos</p>
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="border border-gray-300 p-6 rounded-lg">
                  <h2 class="text-lg  font-medium title-font mb-2">Cuatrimestre V</h2>
                  <p class="leading-relaxed text-base">• Seminario de tesis II</p>
                  <p class="leading-relaxed text-base">• Redacción de artículos científicos</p>
                  <p class="leading-relaxed text-base"> • Seminario de tesis III</p>
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="border border-gray-300 p-6 rounded-lg">
                  <h2 class="text-lg  font-medium title-font mb-2">Cuatrimestre VI</h2>
                  <p class="leading-relaxed text-base"> • Seminario de tesis III</p>
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
            </p>
          </div>
        }
      />

      <SplitSection
        primarySlot={
          <div className="lg:pr-16 xl:pr-16">
            <h3 className="text-3xl font-semibold leading-tight">Perfil de ingreso</h3>
            <p className="mt-8 text-xl font-light leading-relaxed">• Grado de maestría</p>
          </div>
        }
      />
    </LayoutCarrera>
  );
}

export default TecnologiaTransformacionDigital;
