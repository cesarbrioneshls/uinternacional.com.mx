import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { GiThreeFriends, GiStairsGoal } from 'react-icons/gi';
import { FaHandshake } from 'react-icons/fa';
import { BiTimer } from 'react-icons/bi';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CardDocente from '../components/CardDocente';
import Slider from 'react-slick';
import CardCourse from './CardCourse';
import Footer from '../components/layout/Footer';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import SplitSection from '../components/SplitSection';
import LabelText from '../components/LabelText';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'animate.css';
import './TestImg.css';
import './Formulario.css';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';

const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  const [stepOne, setStepOne] = useState(true);
  const [stepTwo, setStepTwo] = useState(false);
  const [stepThree, setStepThree] = useState(false);
  const [stepFour, setStepFour] = useState(false);
  const [stepFive, setStepFive] = useState(false);

  const [userForm, setUserForm] = useState({
    programa_academico: '',
    nombre: '',
    apellido_paterno: '',
    apellido_materno: '',
    fecha_nacimiento: '',
    lugar_nacimiento: '',
    numero_celular: '',
    correo_electronico: '',
    calle: '',
    numero: '',
    colonia: '',
    codigo_postal: '',
    municipio: '',
    estado: '',
    pais: '',
    estudios: '',
    empresa: '',
    puesto: '',
  });

  useEffect(() => {
    if (stepOne === false) {
      setStepTwo(true);
    }
  }, [stepOne]);

  useEffect(() => {
    if (stepOne === false && stepTwo === false) {
      setStepThree(true);
    }
  }, [stepTwo]);

  useEffect(() => {
    if (stepOne === false && stepTwo === false && stepThree === false) {
      setStepFour(true);
    }
  }, [stepThree]);

  useEffect(() => {
    if (stepOne === false && stepTwo === false && stepThree === false && stepFour === false) {
      setStepFive(true);
    }
  }, [stepFour]);

  useEffect(() => {
    console.log('userform', userForm);
  }, [userForm]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <section id="navBar">
        <div>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" style={{ background: 'white', boxShadow: 'none' }}>
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  {/* <MenuIcon /> */}
                </IconButton>
                <div class="p-5">
                  <img
                    src="https://res.cloudinary.com/dslc2vjcz/image/upload/v1639774658/logos-alberto-13_yddois.svg"
                    class="img-responsive"
                  />
                </div>

                <div className="flex mt-4 sm:mt-0">
                  <AnchorLink
                    className="px-4"
                    href="#nosotros"
                    style={{ color: '#121433', fontWeight: 'bold' }}
                  >
                    Nosotros
                  </AnchorLink>
                  <AnchorLink
                    className="px-4"
                    href="#planacademico"
                    style={{ color: '#121433', fontWeight: 'bold' }}
                  >
                    Oferta Educativa
                  </AnchorLink>
                  <AnchorLink
                    className="px-4"
                    href="#nuestroequipo"
                    style={{ color: '#121433', fontWeight: 'bold' }}
                  >
                    Nuestro Equipo
                  </AnchorLink>
                  <AnchorLink
                    className="px-4"
                    href="#nosotros"
                    style={{ color: '#121433', fontWeight: 'bold' }}
                  >
                    Campus Virtual
                  </AnchorLink>
                  <p className="px-4" href="#"></p>
                  {/* <AnchorLink className="px-4"></AnchorLink> */}
                </div>
                <div className="hidden md:block">
                  <a href="#inscribete">
                    <button
                      style={{ backgroundColor: '#a68929' }}
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
                  </a>
                </div>
              </Toolbar>
            </AppBar>
          </Box>
        </div>
      </section>
      <section id="bannerMain">
        <div className="mx-auto text-center mb-10 imgbanner">
          <div className="headerBanner animate__animated animate__fadeIn">
            <div className="logo-box animate__animated animate__fadeInDown">
              <img
                className="logo"
                src="https://res.cloudinary.com/dslc2vjcz/image/upload/v1639607884/logo_versiones-03_Blanco_1_cd3rg4.svg"
              />

              <div class="text-box">
                <h1 class="heading-primary">
                  <span class="heading-primary-main">U Internacional</span>
                  <span class="heading-primary-sub">
                    <span class="blink_me">&gt;</span>
                    La Universidad de los profesionales digitales
                    <span class="blink_me">&lt;</span>
                  </span>
                </h1>
                <a href="#inscribete" class="btn btn-white animate__animated animate__bounce">
                  Inscribete Ahora
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 lg:py-10">
        <div className="container mx-auto text-center">
          <div class="grid xl:grid-flow-col gap-3 grid-flow-row">
            <div
              class="
            col-span-2"
              style={{ padding: 10, fontSize: 24 }}
            >
              <div>
                Nuestra oferta educativa tiene como eje transversal los retos de la transformación
                digital. Nuestro objetivo es desarrollar competencias transdisciplinares y
                tecnológicas para el quehacer profesional
              </div>
            </div>
            <div class="col-span-2" style={{ padding: 10 }}>
              <div>
                <a href="#inscribete">
                  <Button
                    variant={'contained'}
                    color={'primary'}
                    size="large"
                    style={{ width: '100%', backgroundColor: '#a68929' }}
                  >
                    ¡Inscríbite!
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 lg:py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-semibold" style={{ color: '#121433' }}>
            ¡Conócenos!
          </h2>
        </div>
        <SplitSection
          id="nosotros"
          primarySlot={
            <div className="lg:pr-32 xl:pr-48">
              <h3 className="text-3xl font-semibold leading-tight" style={{ color: '#121433' }}>
                Misión
              </h3>
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
              <h3 className="text-3xl font-semibold leading-tight" style={{ color: '#121433' }}>
                Visión{' '}
              </h3>
              <p className="mt-8 text-xl font-light leading-relaxed">
                Ser la mejor Universidad en línea de Latinoamérica
              </p>
            </div>
          }
          secondarySlot={
            <img src="https://res.cloudinary.com/dslc2vjcz/image/upload/v1639784216/vision_tnoq48.png" />
          }
        />
        {/* <div>
          <div className="container mx-auto text-center" style={{ paddingTop: 75 }}>
            <div class="grid xl:grid-flow-col gap-3 grid-flow-row pt-20">
              <div class="col-span-2 ">
                <div style={{ padding: 20 }}>
                  <img
                    src="https://res.cloudinary.com/dslc2vjcz/image/upload/v1639604735/Imagen_principal_pgsds1.png"
                    alt="asdasd"
                    className="imgrua"
                  />
                </div>
              </div>
              <div class="col-span-2">
                <div style={{ padding: 20 }}>
                  <div style={{ paddingBottom: 25, paddingTop: 25 }}>
                    <BasicCard />
                  </div>
                  <BasicCard />
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
      <section id="stats" className="py-20 lg:pt-10">
        <div className="container mx-auto text-center">
          <LabelText style={{ color: '#121433' }}>Nuestros Valores</LabelText>
          <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
            <div className="w-min sm:w-1/3">
              <div>
                <div className="flex flex-col sm:flex-col justify-between items-center mx-auto py-4 px-8">
                  <p
                    className="text-2xl lg:text-2xl font-semibold text-primary text-center"
                    style={{ color: '#a68929' }}
                  >
                    Persistencia
                  </p>
                  <GiStairsGoal size={120} className="" color="#121433" />
                </div>
              </div>
            </div>
            <div className="w-min sm:w-1/3">
              <div className="flex flex-col sm:flex-col justify-between items-center mx-auto py-4 px-8">
                <p
                  className="text-2xl lg:text-2xl font-semibold text-primary text-center"
                  style={{ color: '#a68929' }}
                >
                  Integridad
                </p>
                <FaHandshake size={120} className="" color="#121433" />
              </div>
            </div>
            <div className="w-min sm:w-1/3">
              <div className="flex flex-col sm:flex-col justify-between items-center mx-auto py-4 px-8">
                <p
                  className="text-2xl lg:text-2xl font-semibold text-primary text-center"
                  style={{ color: '#a68929' }}
                >
                  Eficacia
                </p>
                <BiTimer size={120} className="" color="#121433" />
              </div>
            </div>
            <div className="w-min sm:w-1/3">
              <div className="flex flex-col sm:flex-col justify-between items-center mx-auto py-4 px-8">
                <p
                  className="text-2xl lg:text-2xl font-semibold text-primary text-center"
                  style={{ color: '#a68929' }}
                >
                  Resilencia
                </p>
                <GiThreeFriends size={120} className="" color="#121433" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          class="flex flex-wrap w-full mb-20 flex-col items-center text-center"
          style={{ paddingTop: 75 }}
        >
          <h1
            class=" title-font mb-2 text-4xl font-extrabold leading-10 tracking-tight text-left sm:text-4xl sm:leading-none md:text-5xl"
            id="planacademico"
          >
            Oferta Educativa
          </h1>
        </div>

        <div class="grid xl:grid-cols-5 grid-flow-row gap-4 grid-rows-1 grid-cols-2">
          <div class="grid xl:grid-flow-row grid-flow-row">
            <div class="row-span-1">
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://res.cloudinary.com/dslc2vjcz/image/upload/v1639605308/PP_Doctorado_tecnolog%C3%ADas_tesvqk.png"
                    alt="img_doctor1"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h7" component="div">
                      Doctorado en Tecnologías de la Transformación Digital
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <a
                    href="https://pwa-public.s3.us-west-1.amazonaws.com/oferta-educativa/Folleto+-+Doctorado+en+Tecnolog%C3%ADas+de+la+Transformaci%C3%B3n+Digital.pdf"
                    target="_blank"
                    style={{ width: '100%' }}
                  >
                    <Button
                      variant={'contained'}
                      color={'primary'}
                      size="large"
                      style={{ width: '100%', backgroundColor: '#a68929' }}
                    >
                      Conoce Mas
                    </Button>
                  </a>
                </CardActions>
              </Card>
            </div>
          </div>
          <div class="grid xl:grid-flow-row grid-flow-row">
            <div class="row-span-1">
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://res.cloudinary.com/dslc2vjcz/image/upload/v1639749536/PP_Dir_e_inno_hospitales_zyf7j7.png"
                    alt="img_doctor2"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h7" component="div">
                      Doctorado Dirección e Innovación Digital en los Sistemas de Salud
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <a
                    href="https://pwa-public.s3.us-west-1.amazonaws.com/oferta-educativa/Folleto+-+Direcci%C3%B3n+e+Innovaci%C3%B3n+Digital+en+los+Sistemas+de+Salud.pdf"
                    target="_blank"
                    style={{ width: '100%' }}
                  >
                    <Button
                      variant={'contained'}
                      color={'primary'}
                      size="large"
                      style={{ width: '100%', backgroundColor: '#a68929' }}
                    >
                      Conoce Mas
                    </Button>
                  </a>
                </CardActions>
              </Card>
            </div>
          </div>
          <div class="grid xl:grid-flow-row grid-flow-row">
            <div class="row-span-1">
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://res.cloudinary.com/dslc2vjcz/image/upload/v1639762193/PP_Pedagog%C3%ADa_vus6xw.png"
                    alt="img_doctor2"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h7" component="div">
                      <br />
                      Licenciatura en Pedagogía
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <a
                    href="https://pwa-public.s3.us-west-1.amazonaws.com/oferta-educativa/Folleto+-+Licenciatura+en+Pedagog%C3%ADa.pdf"
                    target="_blank"
                    style={{ width: '100%' }}
                  >
                    <Button
                      variant={'contained'}
                      color={'primary'}
                      size="large"
                      style={{ width: '100%', backgroundColor: '#a68929' }}
                    >
                      Conoce Mas
                    </Button>
                  </a>
                </CardActions>
              </Card>
            </div>
          </div>
          <div class="grid xl:grid-flow-row grid-flow-row">
            <div class="row-span-1">
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://res.cloudinary.com/dslc2vjcz/image/upload/v1639759186/PP_Doctorado_docentes_mpxriv.png"
                    alt="img_doctor2"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h7" component="div">
                      Doctorado en Competencias Docentes para la Transformación Digital
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <a
                    href="https://pwa-public.s3.us-west-1.amazonaws.com/oferta-educativa/Folleto+-+Maestr%C3%ADa+en+Competencias+Docentes+para+la+Transformaci%C3%B3n+Digital.pdf"
                    target="_blank"
                    style={{ width: '100%' }}
                  >
                    <Button
                      variant={'contained'}
                      color={'primary'}
                      size="large"
                      style={{ width: '100%', backgroundColor: '#a68929' }}
                    >
                      Conoce Mas
                    </Button>
                  </a>
                </CardActions>
              </Card>
            </div>
          </div>
          <div class="grid xl:grid-flow-row grid-flow-row">
            <div class="row-span-1">
              
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://res.cloudinary.com/dslc2vjcz/image/upload/v1639760537/PP_Mtria_docentes_oddiek.png"
                    alt="img_doctor2"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h7" component="div">
                      Maestría en Compotencias docentes para la transformación digital
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                <a
                    href="https://pwa-public.s3.us-west-1.amazonaws.com/oferta-educativa/Folleto+-+Maestr%C3%ADa+en+Competencias+Docentes+para+la+Transformaci%C3%B3n+Digital.pdf"
                    target="_blank"
                    style={{ width: '100%' }}
                  >
                  <Button
                    variant={'contained'}
                    color={'primary'}
                    size="large"
                    style={{ width: '100%', backgroundColor: '#a68929' }}
                  >
                    Conoce Mas
                  </Button>
                  </a>
                </CardActions>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section id="nuestroequipo">
        <div
          className="container mx-auto text-center"
          style={{ paddingTop: 50, paddingBottom: 50 }}
        >
          <h3 className="text-3xl lg:text-4xl font-semibold">Nuestro Equipo</h3>
        </div>
        <Carousel responsive={responsive}>
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
          <div>
            <CardDocente />
          </div>
          <div>
            <CardDocente />
          </div>
        </Carousel>
      </section>

      <section class="bg-opacity-50" id="inscribete" style={{ paddingTop: 50, paddingBottom: 50 }}>
        <div
          className="container mx-auto text-center"
          style={{ paddingTop: 50, paddingBottom: 50 }}
        >
          <h3 className="text-3xl lg:text-4xl font-semibold" style={{ color: '#121433' }}>
            ¡Inscríbite!
          </h3>
        </div>

        {stepOne && (
          <div class="mx-auto container max-w-2xl md:w-3/4 shadow-md">
            <div class="bg-gray-100 p-4 border-t-2 bg-opacity-5 border-indigo-400 rounded-t">
              <div class="max-w-sm mx-auto md:w-full md:mx-0">
                <div class="inline-flex items-center space-x-4">
                  <img
                    class="w-10 h-10 object-cover rounded-full"
                    alt="avatar"
                    src="https://res.cloudinary.com/dslc2vjcz/image/upload/v1639178303/logo_versiones-10_qsbcdc.svg"
                  />

                  <h1 class="text-gray-600">
                    Bienvenido(a) la Universidad de los profesionales digitales
                  </h1>
                </div>
              </div>
            </div>
            <div class="bg-white space-y-6">
              <hr />
              <div class="md:inline-flex  space-y-4 md:space-y-0  w-full p-4 text-gray-700 items-center">
                <h2 class="md:w-full mx-2">
                  A continuación, te solicitaremos información necesaria para la admisión al
                  programa académico que has seleccionado. Te informamos que los datos personales
                  que proporciones, están protegidos ante el Instituto Federal de Acceso a la
                  Información y Protección de Datos. Una vez finalizado el llenado del formulario de
                  admisión, te enviaremos un correo electrónico en un plazo no mayor a 2 días
                  hábiles con todas las indicaciones para completar tu inscripción
                </h2>
              </div>
              <hr />
              <div class="md:inline-flex w-full space-y-4 md:space-y-0 p-8 text-gray-500 items-center">
                <div class="w-full md:w-full bg-white flex flex-col space-y-2 p-3">
                  <button
                    style={{ backgroundColor: '#a68929' }}
                    style={{ backgroundColor: '#a68929' }}
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => {
                      setStepOne(false);
                    }}
                  >
                    Siguiente
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {stepTwo && (
          <div class="mx-auto container max-w-2xl md:w-3/4 shadow-md">
            <div class="bg-gray-100 p-4 border-t-2 bg-opacity-5 border-indigo-400 rounded-t">
              <div class="max-w-sm mx-auto md:w-full md:mx-0">
                <div class="inline-flex items-center space-x-4">
                  <img
                    class="w-10 h-10 object-cover rounded-full"
                    alt="avatar"
                    src="https://res.cloudinary.com/dslc2vjcz/image/upload/v1639178303/logo_versiones-10_qsbcdc.svg"
                  />

                  <h1 class="text-gray-600">
                    Bienvenido(a) la Universidad de los profesionales digitales
                  </h1>
                </div>
              </div>
            </div>
            <div class="bg-white space-y-6">
              <hr />
              <div class="md:inline-flex  space-y-4 md:space-y-0  w-full p-4 text-gray-500 items-center">
                <h2 class="md:w-1/3 mx-auto max-w-sm">Seleccione El Programa Academico</h2>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <label class="text-sm text-gray-500">Diplomados</label>
                  <br />
                  <label class="text-sm text-gray-600">
                    <input
                      type="radio"
                      value={userForm.programa_academico}
                      name="programa_academico"
                      id="cbox5"
                      value="Promoción para la salud"
                      class="mr-1"
                      onChange={(e) =>
                        setUserForm({ ...userForm, programa_academico: e.target.value })
                      }
                    />
                    Promoción para la salud
                  </label>
                  <br />
                  <label class="text-sm text-gray-600">
                    <input
                      type="radio"
                      value={userForm.programa_academico}
                      name="programa_academico"
                      id="cbox4"
                      value="Calidad de los servicios de salud"
                      class="mr-1"
                      onChange={(e) =>
                        setUserForm({ ...userForm, programa_academico: e.target.value })
                      }
                    />
                    Calidad de los servicios de salud
                  </label>
                  <label class="text-sm text-gray-600">
                    <br />
                    <input
                      type="radio"
                      value={userForm.programa_academico}
                      name="programa_academico"
                      id="cbox1"
                      value="Bioética"
                      class="mr-1"
                      onChange={(e) =>
                        setUserForm({ ...userForm, programa_academico: e.target.value })
                      }
                    />
                    Bioética
                  </label>
                  <br />
                  <label class="text-sm text-gray-600">
                    <input
                      type="radio"
                      value={userForm.programa_academico}
                      name="programa_academico"
                      id="cbox2"
                      value="Competencias digitales para la docencia"
                      class="mr-1"
                      onChange={(e) =>
                        setUserForm({ ...userForm, programa_academico: e.target.value })
                      }
                    />
                    Competencias digitales para la docencia
                  </label>

                  <div class="pt-1">
                    <label class="text-sm text-gray-500">Maestrías</label>
                  </div>
                  <label class="text-sm text-gray-600">
                    <input
                      type="radio"
                      value={userForm.programa_academico}
                      name="programa_academico"
                      id="cbox3"
                      value="Maestría en Competencias Docentes para la Transformación Digital"
                      class="mr-1"
                      onChange={(e) =>
                        setUserForm({ ...userForm, programa_academico: e.target.value })
                      }
                    />
                    Maestría en Competencias Docentes para la Transformación Digital
                  </label>

                  <div class="pt-1">
                    <label class="text-sm text-gray-500">Doctorados</label>
                  </div>
                  <label class="text-sm text-gray-600">
                    <input
                      type="radio"
                      value={userForm.programa_academico}
                      name="programa_academico"
                      id="cbox7"
                      value="Doctorado en Dirección e Innovación Digital en los Sistemas de Salud"
                      class="mr-1"
                      onChange={(e) =>
                        setUserForm({ ...userForm, programa_academico: e.target.value })
                      }
                    />
                    Doctorado en Dirección e Innovación Digital en los Sistemas de Salud
                  </label>
                  <label class="text-sm text-gray-600">
                    <br />
                    <input
                      type="radio"
                      value={userForm.programa_academico}
                      name="programa_academico"
                      id="cbox8"
                      value="Doctorado en Tecnologías de la Transformación Digital"
                      class="mr-1"
                      onChange={(e) =>
                        setUserForm({ ...userForm, programa_academico: e.target.value })
                      }
                    />
                    Doctorado en Tecnologías de la Transformación Digital
                  </label>
                  <label class="text-sm text-gray-600">
                    <br />
                    <input
                      type="radio"
                      value={userForm.programa_academico}
                      name="programa_academico"
                      id="cbox8"
                      value="Doctorado en Competencias Docentes para la Transformación Digital"
                      class="mr-1"
                      onChange={(e) =>
                        setUserForm({ ...userForm, programa_academico: e.target.value })
                      }
                    />
                    Doctorado en Competencias Docentes para la Transformación Digital
                  </label>

                  <div class="pt-1">
                    <label class="text-sm text-gray-500">Licenciaturas</label>
                  </div>
                  <label class="text-sm text-gray-600">
                    <input
                      type="radio"
                      value={userForm.programa_academico}
                      name="programa_academico"
                      id="cbox8"
                      value="Licenciatura en Pedagogía"
                      class="mr-1"
                      onChange={(e) =>
                        setUserForm({ ...userForm, programa_academico: e.target.value })
                      }
                    />
                    Licenciatura en Pedagogía
                  </label>
                </div>
              </div>

              <hr />
              <div class="md:inline-flex w-full space-y-4 md:space-y-0 p-8 text-gray-500 items-center">
                <div class="w-full md:w-full bg-white flex flex-col space-y-2 p-3">
                  <button
                    style={{ backgroundColor: '#a68929' }}
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => {
                      setStepTwo(false);
                    }}
                  >
                    Siguiente
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {stepThree && (
          <div class="mx-auto container max-w-2xl md:w-3/4 shadow-md">
            <div class="bg-gray-100 p-4 border-t-2 bg-opacity-5 border-indigo-400 rounded-t">
              <div class="max-w-sm mx-auto md:w-full md:mx-0">
                <div class="inline-flex items-center space-x-4">
                  <img
                    class="w-10 h-10 object-cover rounded-full"
                    alt="avatar"
                    src="https://res.cloudinary.com/dslc2vjcz/image/upload/v1639178303/logo_versiones-10_qsbcdc.svg"
                  />

                  <h1 class="text-gray-600">
                    Bienvenido(a) la Universidad de los profesionales digitales
                  </h1>
                </div>
              </div>
            </div>
            <div class="bg-white space-y-6">
              <hr />
              <div class="md:inline-flex  space-y-4 md:space-y-0  w-full p-4 text-gray-500 items-center">
                <h2 class="md:w-1/3 mx-auto max-w-sm">Datos Generales</h2>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <label class="text-sm text-gray-400">Nombre</label>
                    <div class="w-full inline-flex border">
                      <input
                        class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                        onChange={(e) => setUserForm({ ...userForm, nombre: e.target.value })}
                        value={userForm.nombre}
                        type="text"
                        name="nombre"
                        id="nombre"
                        placeholder="Juan"
                      />
                    </div>
                  </div>
                  <div>
                    <label class="text-sm text-gray-400">Apellido Paterno:</label>
                    <div class="w-full inline-flex border">
                      <input
                        class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                        onChange={(e) =>
                          setUserForm({ ...userForm, apellido_paterno: e.target.value })
                        }
                        value={userForm.apellido_paterno}
                        type="text"
                        name="apellido_paterno"
                        id="apellido_paterno"
                        placeholder="Huerta"
                      />
                    </div>
                  </div>
                  <div>
                    <label class="text-sm text-gray-400">Apellido Materno:</label>
                    <div class="w-full inline-flex border">
                      <input
                        class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                        onChange={(e) =>
                          setUserForm({ ...userForm, apellido_materno: e.target.value })
                        }
                        value={userForm.apellido_materno}
                        type="text"
                        name="apellido_materno"
                        id="apellido_materno"
                        placeholder="Perales"
                      />
                    </div>
                  </div>

                  <div>
                    <label class="text-sm text-gray-400">Fecha de nacimiento:</label>
                    <div class="w-full inline-flex border">
                      <input
                        class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                        onChange={(e) =>
                          setUserForm({ ...userForm, fecha_nacimiento: e.target.value })
                        }
                        value={userForm.fecha_nacimiento}
                        type="date"
                        name="fecha_nacimiento"
                        id="fecha_nacimiento"
                        placeholder="17/04/1997"
                      />
                    </div>
                  </div>

                  <div>
                    <label class="text-sm text-gray-400">Lugar de nacimiento:</label>
                    <div class="w-full inline-flex border">
                      <input
                        class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                        onChange={(e) =>
                          setUserForm({ ...userForm, lugar_nacimiento: e.target.value })
                        }
                        value={userForm.fecha_nacimiento}
                        type="text"
                        name="lugar_nacimiento"
                        id="lugar_nacimiento"
                        placeholder="Aguascalientes"
                      />
                    </div>
                  </div>
                  <div>
                    <label class="text-sm text-gray-400">Número de Celular:</label>
                    <div class="w-full inline-flex border">
                      <input
                        class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                        onChange={(e) =>
                          setUserForm({ ...userForm, numero_celular: e.target.value })
                        }
                        value={userForm.numero_celular}
                        type="number"
                        name="numero_celular"
                        id="numero_celular"
                        placeholder="4496052716"
                      />
                    </div>
                  </div>
                  <div>
                    <label class="text-sm text-gray-400">Correo electrónico:</label>
                    <div class="w-full inline-flex border">
                      <input
                        class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                        onChange={(e) =>
                          setUserForm({ ...userForm, correo_electronico: e.target.value })
                        }
                        value={userForm.correo_electronico}
                        type="email"
                        name="correo_electronico"
                        id="correo_electronico"
                        placeholder="uinternacional@internacional.edu.mx"
                      />
                    </div>
                  </div>
                  <div>
                    <label class="text-sm text-gray-400">Calle:</label>
                    <div class="w-full inline-flex border">
                      <input
                        class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                        onChange={(e) => setUserForm({ ...userForm, calle: e.target.value })}
                        value={userForm.calle}
                        type="text"
                        name="calle"
                        id="calle"
                        placeholder="San Cayetano"
                      />
                    </div>
                  </div>
                  <div>
                    <label class="text-sm text-gray-400">Número:</label>
                    <div class="w-full inline-flex border">
                      <input
                        class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                        onChange={(e) => setUserForm({ ...userForm, numero: e.target.value })}
                        value={userForm.numero}
                        type="number"
                        name="numero"
                        id="numero"
                        placeholder="238"
                      />
                    </div>
                  </div>
                  <div>
                    <label class="text-sm text-gray-400">Colonia:</label>
                    <div class="w-full inline-flex border">
                      <input
                        class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                        onChange={(e) => setUserForm({ ...userForm, colonia: e.target.value })}
                        value={userForm.colonia}
                        type="text"
                        name="colonia"
                        id="colonia"
                        placeholder="San Cayetano"
                      />
                    </div>
                  </div>
                  <div>
                    <label class="text-sm text-gray-400">Código postal:</label>
                    <div class="w-full inline-flex border">
                      <input
                        class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                        onChange={(e) =>
                          setUserForm({ ...userForm, codigo_postal: e.target.value })
                        }
                        value={userForm.codigo_postal}
                        type="number"
                        name="codigo_postal"
                        id="codigo_postal"
                        placeholder="20010"
                      />
                    </div>
                  </div>
                  <div>
                    <label class="text-sm text-gray-400">Municipio:</label>
                    <div class="w-full inline-flex border">
                      <input
                        class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                        onChange={(e) => setUserForm({ ...userForm, municipio: e.target.value })}
                        value={userForm.municipio}
                        type="text"
                        name="municipio"
                        id="municipio"
                        placeholder="Aguascalientes"
                      />
                    </div>
                  </div>
                  <div>
                    <label class="text-sm text-gray-400">Estado:</label>
                    <div class="w-full inline-flex border">
                      <input
                        class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                        onChange={(e) => setUserForm({ ...userForm, estado: e.target.value })}
                        value={userForm.estado}
                        type="text"
                        name="estado"
                        id="estado"
                        placeholder="Aguascalientes"
                      />
                    </div>
                  </div>

                  <div>
                    <label class="text-sm text-gray-400">País:</label>
                    <div class="w-full inline-flex border">
                      <input
                        class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                        onChange={(e) => setUserForm({ ...userForm, pais: e.target.value })}
                        value={userForm.pais}
                        type="text"
                        name="pais"
                        id="pais"
                        placeholder="Mexico"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <hr />
              <div class="md:inline-flex w-full space-y-4 md:space-y-0 p-8 text-gray-500 items-center">
                <div class="w-full md:w-full bg-white flex flex-col space-y-2 p-3">
                  <button
                    style={{ backgroundColor: '#a68929' }}
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => {
                      setStepThree(false);
                    }}
                  >
                    Siguiente
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {stepFour && (
          <div class="mx-auto container max-w-2xl md:w-3/4 shadow-md">
            <div class="bg-gray-100 p-4 border-t-2 bg-opacity-5 border-indigo-400 rounded-t">
              <div class="max-w-sm mx-auto md:w-full md:mx-0">
                <div class="inline-flex items-center space-x-4">
                  <img
                    class="w-10 h-10 object-cover rounded-full"
                    alt="avatar"
                    src="https://res.cloudinary.com/dslc2vjcz/image/upload/v1639178303/logo_versiones-10_qsbcdc.svg"
                  />

                  <h1 class="text-gray-600">
                    Bienvenido(a) la Universidad de los profesionales digitales
                  </h1>
                </div>
              </div>
            </div>
            <div class="bg-white space-y-6">
              <hr />
              <div class="md:inline-flex  space-y-4 md:space-y-0  w-full p-4 text-gray-500 items-center">
                <h2 class="md:w-1/3 mx-auto max-w-sm">Datos Academicos y Laborales</h2>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <label class="text-sm text-gray-400">¿Cuentas con Estudios?</label>

                    <label class="text-sm text-gray-600">
                      <br />
                      <input
                        required
                        type="radio"
                        value={userForm.estudios}
                        name="estudiosrbtn"
                        id="cbosi"
                        value="Si"
                        class="mr-1"
                        onChange={(e) => setUserForm({ ...userForm, estudios: e.target.value })}
                      />
                      Si
                    </label>
                    <br />
                    <label class="text-sm text-gray-600">
                      <input
                        required
                        type="radio"
                        value={userForm.estudios}
                        name="estudiosrbtn"
                        id="cbono"
                        value="No"
                        class="mr-1"
                        onChange={(e) => setUserForm({ ...userForm, estudios: e.target.value })}
                      />
                      No
                    </label>
                  </div>
                  <div>
                    <label class="text-sm text-gray-400">
                      En caso de si, Nombre de la empresa:
                    </label>
                    <div class="w-full inline-flex border">
                      <input
                        class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                        onChange={(e) => setUserForm({ ...userForm, empresa: e.target.value })}
                        value={userForm.empresa}
                        type="text"
                        name="empresa"
                        id="empresa"
                        placeholder="Empresa S.A de C.V"
                      />
                    </div>
                  </div>

                  <div>
                    <label class="text-sm text-gray-400">Puesto que desempeña:</label>
                    <div class="w-full inline-flex border">
                      <input
                        class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                        onChange={(e) => setUserForm({ ...userForm, puesto: e.target.value })}
                        value={userForm.puesto}
                        type="text"
                        name="puesto"
                        id="puesto"
                        placeholder="Ing.Software"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <hr />
              <div class="md:inline-flex w-full space-y-4 md:space-y-0 p-8 text-gray-500 items-center">
                <div class="md:w-4/12 max-w-sm mx-auto">
                  <div class="w-full md:w-full bg-white flex flex-col space-y-2 p-3">
                    <button
                      style={{ backgroundColor: '#a68929' }}
                      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => {
                        setStepFour(false);
                      }}
                    >
                      Enviar Registro
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {stepFive && (
          <div class="mx-auto container max-w-2xl md:w-3/4 shadow-md">
            <div class="bg-gray-100 p-4 border-t-2 bg-opacity-5 border-indigo-400 rounded-t">
              <div class="max-w-sm mx-auto md:w-full md:mx-0">
                <div class="inline-flex items-center space-x-4">
                  <img
                    class="w-10 h-10 object-cover rounded-full"
                    alt="avatar"
                    src="https://res.cloudinary.com/dslc2vjcz/image/upload/v1639178303/logo_versiones-10_qsbcdc.svg"
                  />

                  <h1 class="text-gray-600">
                    Bienvenido(a) la Universidad de los profesionales digitales
                  </h1>
                </div>
              </div>
            </div>
            <div class="bg-white space-y-6">
              <hr />
              <div class="md:inline-flex  space-y-4 md:space-y-0  w-full p-4 text-gray-700 items-center">
                <h2 class="md:w-full mx-auto max-w-sm">
                  Se ha completado con éxito la información solicitada, en breve alguno de nuestros
                  asesores estará en contacto contigo para dar seguimiento a tu proceso de
                  inscripción
                </h2>
              </div>

              <hr />
            </div>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
