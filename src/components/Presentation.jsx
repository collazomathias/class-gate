import React from "react";
import ClassGateLogo from "../assets/imgs/class-gate.png";
import "../assets/styles/components/Presentation.css";
import { BsFillImageFill } from "react-icons/bs";
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4, RiNumber5, RiNumber6, RiNumber7, RiNumber8, RiNumber9 } from "react-icons/ri";
import belenRoldan from "../assets/imgs/perfiles/belen_roldan.png";
import mathiasCollazo from "../assets/imgs/perfiles/mathias_collazo.png";
import federicoRodriguez from "../assets/imgs/perfiles/federico_rodriguez.png";
import darielDeSosa from "../assets/imgs/perfiles/dariel_de_sosa.png";
import mathiasLabora from "../assets/imgs/perfiles/mathias_labora.png";
import santiagoBarrera from "../assets/imgs/perfiles/santiago_barrera.png";
import jhonSarmiento from "../assets/imgs/perfiles/jhon_sarmiento.png";
import samuelDuque from "../assets/imgs/perfiles/samuel_duque.png";
import leandroValencia from "../assets/imgs/perfiles/leandro_valencia.png";
import juanMaya from "../assets/imgs/perfiles/juan_maya.png";
import logoSofka from "../assets/imgs/logo-sofka-blanco.png";

export const Presentation = () => {
    return (
        <div className="presentation-container">
            <img src={ClassGateLogo} alt="" />
            <div className="information-container">
                <div className="flex-triple-information-container">
                    <div className="flex-left-information">
                        <h1>¿Qué es Class Gate?</h1>
                        <p>Class Gate es una plataforma web de software que apoya a la comunidad educativa, 
                            principalmente a los maestros en su trabajo, ayudándoles a gestionar rápida y 
                            eficientemente la información relevante en relación a los estudiantes, 
                            sus clases y sus notas.</p>
                    </div>
                    <div className="flex-medium-information">
                        <h1>¿Cómo lo hacemos?</h1>
                        <p>Nos enfocamos en recolectar la información relevante para la gestión efectiva de los estudiantes, 
                            los maestros, las clases, las materias, los horarios y las notas de los estudiantes en los colegios, 
                            para que estas instituciones educativas puedan tener un mejor manejo de la información, 
                            la cuál estará disponible en la nube, segura, accesible y modificable en todo momento.</p>
                    </div>
                    <div className="flex-right-information">
                        <h1>¿A quienes impactamos con Class Gate?</h1>
                        <p>
                            <li>Estudiantes</li>
                            <li>Maestros</li>
                            <li>Administrativos</li>
                            <li>Acudientes</li>
                            <li>Colegios</li>
                        </p>
                    </div>
                </div>
                <div className="normal-information-container">
                    <div className="normal-information">
                        <h1>¿Cómo funciona el software?</h1>
                        <div className="paso-container">
                            <p><RiNumber1 className="paso-icon" /> Un acudiente (padre, familiar o responsable) quiere inscribir un estudiante a la institución educativa.</p>
                            <button><BsFillImageFill className="paso-icon-button" /> Ver imágen</button>
                        </div>
                        <div className="paso-container">
                            <p><RiNumber2 className="paso-icon" /> El acudiente asiste a la institución para registrar al estudiante.</p>
                            <button><BsFillImageFill className="paso-icon-button" /> Ver imágen</button>
                        </div>
                        <div className="paso-container">
                            <p><RiNumber3 className="paso-icon" /> El acudiente registra sus datos en la plataforma web de la institución.</p>
                            <button><BsFillImageFill className="paso-icon-button" /> Ver imágen</button>
                        </div>
                        <div className="paso-container">
                            <p><RiNumber4 className="paso-icon" /> El administrativo de la institución inscribe al estudiante a nombre del Acudiente.</p>
                            <button><BsFillImageFill className="paso-icon-button" /> Ver imágen</button>
                        </div>
                        <div className="paso-container">
                            <p><RiNumber5 className="paso-icon" /> El administrativo gestiona los grupos de estudiantes, las materias y los maestros que las darán.</p>
                            <button><BsFillImageFill className="paso-icon-button" /> Ver imágen</button>
                        </div>
                        <div className="paso-container">
                            <p><RiNumber6 className="paso-icon" /> El administrativo asigna a los estudiantes a los diferentes grupos de estudiantes con sus respectivas materias y horarios.</p>
                            <button><BsFillImageFill className="paso-icon-button" /> Ver imágen</button>
                        </div>
                        <div className="paso-container">
                            <p><RiNumber7 className="paso-icon" /> El maestro ingresa las notas a los estudiantes para llevar un control de los exámenes y talleres.</p>
                            <button><BsFillImageFill className="paso-icon-button" /> Ver imágen</button>
                        </div>
                        <div className="paso-container">
                            <p><RiNumber8 className="paso-icon" /> El director de grupo valida las calificaciones de cada grupo de estudiantes.</p>
                            <button><BsFillImageFill className="paso-icon-button" /> Ver imágen</button>
                        </div>
                        <div className="paso-container">
                            <p><RiNumber9 className="paso-icon" /> El acudiente puede visualizar las notas del estudiante en cualquier momento.</p>
                            <button><BsFillImageFill className="paso-icon-button" /> Ver imágen</button>
                        </div>
                    </div>
                </div>
                <div className="perfiles-container">
                    <div className="img-perfil-container">
                        <img src={belenRoldan} alt="" />
                        <span className="scrum-master">SM</span>
                        <h3>Belén Roldan</h3>
                    </div>
                    <div className="img-perfil-container">
                        <img src={leandroValencia} alt="" />
                        <span className="product-owner">PO</span>
                        <h3>Leandro Valencia</h3>
                    </div>
                    <div className="img-perfil-container">
                        <img src={mathiasCollazo} alt="" />
                        <span className="developer">DEV</span>
                        <h3>Mathías Collazo</h3>
                    </div>
                    <div className="img-perfil-container">
                        <img src={federicoRodriguez} alt="" />
                        <span className="developer">DEV</span>
                        <h3>Federico Rodríguez</h3>
                    </div>
                    <div className="img-perfil-container">
                        <img src={santiagoBarrera} alt="" />
                        <span className="developer">DEV</span>
                        <h3>Santiago Barrera</h3>
                    </div>
                    <div className="img-perfil-container">
                        <img src={mathiasLabora} alt="" />
                        <span className="developer">DEV</span>
                        <h3>Mathías Labora</h3>
                    </div>
                    <div className="img-perfil-container">
                        <img src={darielDeSosa} alt="" />
                        <span className="developer">DEV</span>
                        <h3>Dariel de Sosa</h3>
                    </div>
                    <div className="img-perfil-container">
                        <img src={jhonSarmiento} alt="" />
                        <span className="quality-assurance">QA</span>
                        <h3>Jhon Sarmiento</h3>
                    </div>
                    <div className="img-perfil-container">
                        <img src={juanMaya} alt="" />
                        <span className="quality-assurance">QA</span>
                        <h3>Juan Maya</h3>
                    </div>
                    <div className="img-perfil-container">
                        <img src={samuelDuque} alt="" />
                        <span className="quality-assurance">QA</span>
                        <h3>Samuel Duque</h3>
                    </div>
                </div>
                <div className="normal-information-container mt-100">
                    <div className="normal-information">
                        <h1>Visión del equipo</h1>
                        <p className="normal-p">Optimizar y mejorar los procesos de gestión del sistema educativo para mejorar 
                            la gestión y organización de la información dentro de los contextos educativos, 
                            con el fin de empezar a delegar procesos a las herramientas de software 
                            y enfocar el esfuerzo de los maestros en la educación de los estudiantes.</p>
                    </div>
                </div>
                <div className="flex-double-information-container">
                    <div className="flex-left-information">
                        <h1>Paquete base</h1>
                        <p>
                            <li>Adaptación del software al branding del colegio o institución educativa.</li>
                            <li>Arquitectura 100% en la nube (No requiere servidores físicos).</li>
                            <li>Pago del servidor y ciberseguridad mensualmente.</li>
                        </p>
                    </div>
                    <div className="flex-left-information">
                        <h1>Paquete premium</h1>
                        <p>
                            <li>Adaptación del software al branding del colegio o institución educativa.</li>
                            <li>Arquitectura 100% en la nube (No requiere servidores físicos).</li>
                            <li>Pago del servidor y ciberseguridad mensualmente. </li>
                            <li>Desarrollo de nuevas funcionalidades y herramientas de acuerdo al contexto de trabajo del cliente.</li>
                        </p>
                    </div>
                </div>
                <div className="footer">
                    <img src={logoSofka} alt="" />
                    <p>Esta plataforma fue hecha en el Reto Técnico del Training de Sofka U 
                        de la mano del equipo de desarrollo compuesto por los desarrolladores 
                        y los QAs (Quality Assurance), y de la mano del equipo de 
                        Agilismo compuesto por el Scrum Master y el Product Owner. 
                        Este proyecto tiene como nombre Class Gate y es la base para proyectar esta visión 
                        a futuros equipos que retomen este proyecto en un futuro. 
                        Agradecimientos a los coach y a los mentores que hicieron esto posible, 
                        y a todos los compañeros de Sofka, gracias a los que ayudaron en hacer este proyecto posible.</p>
                </div>
            </div>
        </div>
    );
}