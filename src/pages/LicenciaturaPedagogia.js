import React from 'react';
import Slider from 'react-slick';
import CardDocente from '../components/CardDocente';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import SvgCharts from '../svg/SvgCharts';
import Collapsible from 'react-collapsible';
import LayoutCarrera from '../components/layout/LayoutCarrera';

function DireccionInnovacionDigitalLicenciaturaPedagogia() {
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
                <span class="text-indigo-300">{''}Licenciatura Pedagogía</span>
              </h1>
              <h2 class="text-md mb-12">
                Formar Licenciados en Pedagogía con un amplio conocimiento en los ámbitos
                pedagógico, educativo y tecnológico, capaces de realizar diagnósticos, evaluaciones
                y propuestas para la solución de problemáticas relacionadas con el aprendizaje en
                los contextos personal, familiar, educativo, social y organizacional; así como de
                satisfacer las necesidades educativas de la sociedad actual y futura y extraer todas
                las posibilidades pedagógicas que ofrecen las nuevas herramientas de la información
                y las comunicaciones
              </h2>
              <div class="flex">
                <div class="mr-8">
                  <p class="text-2xl font-bold">RVOE</p>
                  <p class="text-sm">20211668</p>
                </div>
                <div class="mr-8">
                  <p class="text-2xl font-bold">Duración</p>
                  <p class="text-sm"></p>
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
              src="https://res.cloudinary.com/dslc2vjcz/image/upload/v1639762193/PP_Pedagog%C3%ADa_vus6xw.png"
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
                  <p class="leading-relaxed text-base">• Introducción a la pedagogía</p>
                  <p class="leading-relaxed text-base">• Técnicas de expresión oral y escrita</p>
                  <p class="leading-relaxed text-base">• Psicología del aprendizaje</p>
                  <p class="leading-relaxed text-base">• Sociología de la educación</p>
                  <p class="leading-relaxed text-base">
                    • Historia de la educación y política educativa
                  </p>
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="border border-gray-300 p-6 rounded-lg">
                  <h2 class="text-lg  font-medium title-font mb-2">Cuatrimestre II</h2>
                  <p class="leading-relaxed text-base">• Uso de las TIC</p>
                  <p class="leading-relaxed text-base">• Psicología del desarrollo</p>
                  <p class="leading-relaxed text-base">• Fundamentos de estadística</p>
                  <p class="leading-relaxed text-base">• Orientación educativa y acción tutorial</p>
                  <p class="leading-relaxed text-base">• Teoría de la educación</p>
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="border border-gray-300 p-6 rounded-lg">
                  <h2 class="text-lg  font-medium title-font mb-2">Cuatrimestre III</h2>
                  <p class="leading-relaxed text-base">• DidácticaEducación personalizada</p>
                  <p class="leading-relaxed text-base">• Psicología de la instrucción</p>
                  <p class="leading-relaxed text-base">
                    • Educación y convivencia dentro y fuera del aula
                  </p>
                  <p class="leading-relaxed text-base">• Neuroeducación</p>
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="border border-gray-300 p-6 rounded-lg">
                  <h2 class="text-lg  font-medium title-font mb-2">Cuatrimestre IV</h2>

                  <p class="leading-relaxed text-base">• Técnicas e instrumentos diagnósticos</p>
                  <p class="leading-relaxed text-base">• Técnicas de enseñanza - aprendizaje</p>
                  <p class="leading-relaxed text-base">
                    • Dificultades de aprendizaje y trastornos del desarrollo
                  </p>
                  <p class="leading-relaxed text-base">
                    • Metodologías de enseñanza y asesoramiento a educadores
                  </p>
                  <p class="leading-relaxed text-base">
                    • Metodología de la acción socio-educativa
                  </p>
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="border border-gray-300 p-6 rounded-lg">
                  <h2 class="text-lg  font-medium title-font mb-2">Cuatrimestre V</h2>

                  <p class="leading-relaxed text-base">
                    • Enseñanza y aprendizaje en el contexto familiar, social y escolar
                  </p>
                  <p class="leading-relaxed text-base">• Pedagogía diferencial</p>
                  <p class="leading-relaxed text-base">• Psicología de la educación especial</p>
                  <p class="leading-relaxed text-base">
                    • Exclusión social y políticas para la inclusión
                  </p>
                  <p class="leading-relaxed text-base">• Diseño curricular</p>
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="border border-gray-300 p-6 rounded-lg">
                  <h2 class="text-lg  font-medium title-font mb-2">Cuatrimestre VI</h2>

                  <p class="leading-relaxed text-base">
                    {' '}
                    • Retos educativos en la transformación digital
                  </p>
                  <p class="leading-relaxed text-base">• Ética profesional</p>
                  <p class="leading-relaxed text-base">• Psicología de la educación especial</p>
                  <p class="leading-relaxed text-base">• Inglés I</p>
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="border border-gray-300 p-6 rounded-lg">
                  <h2 class="text-lg  font-medium title-font mb-2">Cuatrimestre VII</h2>

                  <p class="leading-relaxed text-base">• Pedagogía social</p>
                  <p class="leading-relaxed text-base">• Procesos de memoria</p>
                  <p class="leading-relaxed text-base">• Diagnóstico pedagógico</p>
                  <p class="leading-relaxed text-base">
                    • Inteligencias múltiples, creatividad y altas capacidades
                  </p>
                  <p class="leading-relaxed text-base">• Inglés II</p>
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="border border-gray-300 p-6 rounded-lg">
                  <h2 class="text-lg  font-medium title-font mb-2">Cuatrimestre VIII</h2>

                  <p class="leading-relaxed text-base">
                    • Estrategias de enseñanza en entornos virtuales educativos
                  </p>
                  <p class="leading-relaxed text-base">
                    • Planeación estratégica en las organizacioneso
                  </p>
                  <p class="leading-relaxed text-base">• Liderazgo y gestión de equipos</p>
                  <p class="leading-relaxed text-base">• Evaluación de programas educativos</p>

                  <p class="leading-relaxed text-base">
                    • Intervención en necesidades educativas especiales
                  </p>
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="border border-gray-300 p-6 rounded-lg">
                  <h2 class="text-lg  font-medium title-font mb-2">Cuatrimestre XI</h2>

                  <p class="leading-relaxed text-base">• Inglés III</p>
                  <p class="leading-relaxed text-base">• Redes sociales en la educación</p>
                  <p class="leading-relaxed text-base">• Pedagogía en la empresa</p>
                  <p class="leading-relaxed text-base">• Emprendimiento</p>
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
            <p className="mt-8 text-xl font-light leading-relaxed">
              • Bachillerato o Equivalente <br />
            </p>
          </div>
        }
      />
    </LayoutCarrera>
  );
}

export default DireccionInnovacionDigitalLicenciaturaPedagogia;
