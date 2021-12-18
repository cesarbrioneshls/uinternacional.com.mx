import { Link } from 'gatsby';
import React, { useState, useEffect } from 'react';

import './Formulario.css';

function Formulario() {
  const [stepOne, setStepOne] = useState(true);
  const [stepTwo, setStepTwo] = useState(false);
  const [stepThree, setStepThree] = useState(false);
  const [stepFour, setStepFour] = useState(false);
  const [stepFive, setStepFive] = useState(false);
  const [sendHome, setSendHome] = useState(false);

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

  const handleValue = (value) => {
    const valueForm = document.getElementById(textbox).value;
    console.log('valueForm', valueForm);
  };

  return (
    <section class="bg-opacity-50 p-10">
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
                A continuación, te solicitaremos información necesaria para la admisión al programa
                académico que has seleccionado. Te informamos que los datos personales que
                proporciones, están protegidos ante el Instituto Federal de Acceso a la Información
                y Protección de Datos. Una vez finalizado el llenado del formulario de admisión, te
                enviaremos un correo electrónico en un plazo no mayor a 2 días hábiles con todas las
                indicaciones para completar tu inscripción
              </h2>
            </div>
            <hr />
            <div class="md:inline-flex w-full space-y-4 md:space-y-0 p-8 text-gray-500 items-center">
              <div class="w-full md:w-full bg-white flex flex-col space-y-2 p-3">
                <button
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
                {/* <form>
                <h1> Our Form </h1>
                <input
                  onChange={(e) => setUserForm({ ...userForm, title: e.target.value })}
                  value={userForm.title}
                  type="text"
                  name="title"
                  id="title"
                />
              </form> */}
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
                      onChange={(e) => setUserForm({ ...userForm, numero_celular: e.target.value })}
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
                      onChange={(e) => setUserForm({ ...userForm, codigo_postal: e.target.value })}
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
                  <label class="text-sm text-gray-400">En caso de si, Nombre de la empresa:</label>
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
                asesores estará en contacto contigo para dar seguimiento a tu proceso de inscripción
              </h2>
            </div>

            <hr />
            <div class="md:inline-flex w-full space-y-4 md:space-y-0 p-8 text-gray-500 items-center">
              <div class="md:w-4/12 max-w-sm mx-auto">
                <Link
                  activeStyle={{
                    color: 'red',
                    fontWeight: 700,
                  }}
                  to="/"
                >
                  <div class="w-full md:w-full bg-white flex flex-col space-y-2 p-3">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Regresar
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Formulario;
