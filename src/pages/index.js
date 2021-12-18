import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CardDocente from '../components/CardDocente';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import CardCurso from '../components/layout/CardCurso';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';
import coursesData from '../data/courses-data';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'gatsby';
import './test.css';

import { FaHandshake } from 'react-icons/fa';
import { BiTimer } from 'react-icons/bi';
import { GiThreeFriends, GiStairsGoal } from 'react-icons/gi';

import Slider from 'react-slick';

import {
  BsFacebook,
  BsInstagram,
  BsGithub,
  BsTwitter,
  BsYoutube,
  BsLinkedin,
} from 'react-icons/bs';

const settings = {
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
};

const Index = () => (
  <Layout>
    <section className="pt-5 md:pt-5">
      <div className="mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            La Universidad de los profesionales digitales
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            Nuestra oferta educativa tiene como eje transversal los retos de la transformación
            digital. Nuestro objetivo es desarrollar competencias transdisciplinares y tecnológicas
            para el quehacer profesional
          </p>
          <p className="mt-8 md:mt-12">
            <Button size="lg" href="#testimonials">
              Contáctanos
            </Button>
          </p>
        </div>
        <div className="pl-10 content-center pt-5 ">
          <img
            src="https://res.cloudinary.com/dslc2vjcz/image/upload/v1639604735/Imagen_principal_pgsds1.png"
            class="h-full w-full object-cover rounded object-left	"
          ></img>
        </div>
      </div>
    </section>

    <div className="container mx-auto text-center pt-20">
      <h2 className="text-3xl lg:text-4xl font-semibold">¡Conócenos!</h2>
    </div>
    <SplitSection
      id="nosotros"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Misión</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Enriquecemos el talento humano con las competencias necesarias para desarrollarse
            profesionalmente en un entorno de transformación digital
          </p>
        </div>
      }
      secondarySlot={
        <img src="https://res.cloudinary.com/dslc2vjcz/image/upload/v1639784212/1529061_aptns7.png" />
      }
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">Visión </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Ser la mejor Universidad en línea de Latinoamérica
          </p>
        </div>
      }
      secondarySlot={
        <img src="https://res.cloudinary.com/dslc2vjcz/image/upload/v1639784216/vision_tnoq48.png" />
      }
    />
    <section id="stats" className="py-20 lg:pt-10">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">Nuestros Valores</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-min sm:w-1/3">
            <div>
              <div className="flex flex-col sm:flex-col justify-between items-center mx-auto py-4 px-8">
                <p className="text-2xl lg:text-2xl font-semibold text-primary text-center">
                  Persistencia
                </p>
                <GiStairsGoal size={120} className="" color="#808080" />
              </div>
            </div>
          </div>
          <div className="w-min sm:w-1/3">
            <div className="flex flex-col sm:flex-col justify-between items-center mx-auto py-4 px-8">
              <p className="text-2xl lg:text-2xl font-semibold text-primary text-center">
                Integridad
              </p>
              <FaHandshake size={120} className="" color="#808080" />
            </div>
          </div>
          <div className="w-min sm:w-1/3">
            <div className="flex flex-col sm:flex-col justify-between items-center mx-auto py-4 px-8">
              <p className="text-2xl lg:text-2xl font-semibold text-primary text-center">
                Eficacia
              </p>
              <BiTimer size={120} className="" color="#808080" />
            </div>
          </div>
          <div className="w-min sm:w-1/3">
            <div className="flex flex-col sm:flex-col justify-between items-center mx-auto py-4 px-8">
              <p className="text-2xl lg:text-2xl font-semibold text-primary text-center">
                Resilencia
              </p>
              <GiThreeFriends size={120} className="" color="#808080" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <div>
      <section>
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
                <img
                  src="https://res.cloudinary.com/dslc2vjcz/image/upload/v1639759186/PP_Doctorado_docentes_mpxriv.png"
                  alt="tailwind logo"
                  class="rounded-xl"
                />
                <p class="text-center pt-3 font-bold">
                  Doctorado En Competencias Docentes Para La Transformación Digital
                </p>
                <Link
                  activeStyle={{
                    color: 'red',
                    fontWeight: 700,
                  }}
                  to="/CompetenciasTransformacionDigital"
                >
                  <div class="w-full md:w-full bg-white flex flex-col space-y-2 p-3">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Conoce más ...
                    </button>
                  </div>
                </Link>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-300 p-6 rounded-lg">
                <img
                  src="https://res.cloudinary.com/dslc2vjcz/image/upload/v1639605308/PP_Doctorado_tecnolog%C3%ADas_tesvqk.png"
                  alt="tailwind logo"
                  class="rounded-xl"
                />
                <p class="text-center pt-3 font-bold">
                  Doctorado En Tecnologías De La Transformación Digital
                </p>
                <div class="w-full md:w-full bg-white flex flex-col space-y-2 p-3">
                  <Link
                    activeStyle={{
                      color: 'red',
                      fontWeight: 700,
                    }}
                    to="/TecnologiaTransformacionDigital"
                  >
                    <div class="w-full md:w-full bg-white flex flex-col space-y-2 p-3">
                      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Conoce más ...
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-300 p-6 rounded-lg">
                <img
                  src="https://res.cloudinary.com/dslc2vjcz/image/upload/v1639749536/PP_Dir_e_inno_hospitales_zyf7j7.png"
                  alt="tailwind logo"
                  class="rounded-xl"
                />
                <p class="text-center pt-3 font-bold">
                  Doctorado Dirección e Innovación Digital En Los Sistemas De Salud
                </p>
                <div class="w-full md:w-full bg-white flex flex-col space-y-2 p-3">
                  <Link
                    activeStyle={{
                      color: 'red',
                      fontWeight: 700,
                    }}
                    to="/DireccionInnovacionDigital"
                  >
                    <div class="w-full md:w-full bg-white flex flex-col space-y-2 p-3">
                      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Conoce más ...
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-300 p-6 rounded-lg">
                <img
                  src="https://res.cloudinary.com/dslc2vjcz/image/upload/v1639760537/PP_Mtria_docentes_oddiek.png"
                  alt="tailwind logo"
                  class="rounded-xl"
                />
                <p class="text-center pt-3 font-bold">
                  Maestría En Compotencias Docentes Para La Transformación Digital
                </p>
                <div class="w-full md:w-full bg-white flex flex-col space-y-2 p-3">
                  <Link
                    activeStyle={{
                      color: 'red',
                      fontWeight: 700,
                    }}
                    to="/MCompetenciasTransformacionDigital"
                  >
                    <div class="w-full md:w-full bg-white flex flex-col space-y-2 p-3">
                      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Conoce más ...
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-300 p-6 rounded-lg">
                <img
                  src="https://res.cloudinary.com/dslc2vjcz/image/upload/v1639762193/PP_Pedagog%C3%ADa_vus6xw.png"
                  alt="tailwind logo"
                  class="rounded-xl"
                />
                <p class="text-center pt-3 font-bold">
                  <br />
                  Licenciatura En Pedagogía
                </p>
                <div class="w-full md:w-full bg-white flex flex-col space-y-2 p-3">
                  <Link
                    activeStyle={{
                      color: 'red',
                      fontWeight: 700,
                    }}
                    to="/LicenciaturaPedagogia"
                  >
                    <div class="w-full md:w-full bg-white flex flex-col space-y-2 p-3">
                      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Conoce más ...
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <section id="nuestroequipo" className="py-10 lg:py-10">
      <div className="container mx-auto text-center mb-10">
        <h3 className="text-3xl lg:text-4xl font-semibold">Nuestro Equipo</h3>
      </div>
      <div className="container mx-auto">
        <div style={{ zIndex: 0 }}>
          <Slider {...settings}>
            <div>
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

    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Desarróllate como un profesional digital</h3>
      <p className="mt-8">
        <Link
          activeStyle={{
            color: 'red',
            fontWeight: 700,
          }}
          to="/Formulario"
        >
          <Button size="xl">Inscríbete ahora</Button>
        </Link>
      </p>
    </section>
    <section href="#footer"></section>
  </Layout>
);

export default Index;
