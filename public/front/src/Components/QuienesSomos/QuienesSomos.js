import React, { Component } from "react";
import img1 from "../../resources/img/foto1.jpg";
import img2 from "../../resources/img/foto2.png";

class QuienesSomos extends Component {
  render() {
    return (
      <div class="container">
        <br />
        <h1 class="text-center estilo-fuente">CONTROL ATMOSFERICO DEL DMQ (MEDICIÓN ATMOSFÉRICA, RADIACIÓN SOLAR, ULTRAVIOLETA Y TEMPERATURA)</h1>
        <br />

        <h2 className="estilo-fuente">Introducción</h2>
        <p class="lh-lg">
          En los documentos que se presentan a continuación, se recogen todos los datos y características que han sido obtenidos como resultado de los cálculos desarrollados y que permiten marcar las líneas directrices para la materialización de
          nuestro proyecto. Diseñar y construir un sistema informático. En el área de medición atmosférica: radiación solar, ultravioleta y temperatura Quito ambiente, Proporcionando la facilitación y ejecución automática de procesos que
          constantemente se realizan manualmente, dando información y datos para ayudar a la toma de decisiones. Realizando el estudio de viabilidad sobre este sistema informático, como es brindar a los usuarios en general información más específica
          y confiable, brindar mejor interpretación, con reportes estadísticos.
        </p>

        <img src={img1} alt="img1" className="rounded mx-auto d-block" />
        <br />

        <h2 className="estilo-fuente">Visión</h2>
        <p class="lh-lg">
          Tenemos como finalidad producir datos confiables sobre la concentración de contaminantes atmosféricos en el territorio del Distrito Metropolitano de Quito que sirvan como insumo para la planificación, formulación, ejecución y evaluación de
          políticas y acciones orientadas al mejoramiento de la calidad del aire y difundir esta información en condiciones comprensibles para el público en general.
        </p>
        <h2 className="estilo-fuente">Quiénes Somos</h2>
        <p class="lh-lg justify-content-center">
          La Red Metropolitana de Monitoreo Atmosférico de Quito (REMMAQ) tiene como finalidad producir datos confiables sobre la concentración de contaminantes atmosféricos en el territorio del Distrito Metropolitano de Quito que sirvan como insumo
          para la planificación, formulación, ejecución y evaluación de políticas y acciones orientadas al mejoramiento de la calidad del aire y difundir esta información en condiciones comprensibles para el público en general.
        </p>
        <img src={img2} alt="img2" className="rounded mx-auto d-block" />

        <br />

        <ul class="list-group">
          <li class="list-group-item active" aria-current="true">
            Lenguajes Utilizados
          </li>
          <li class="list-group-item">Python</li>
          <li class="list-group-item">Postgress</li>
          <li class="list-group-item">PgAdmin</li>
          <li class="list-group-item">JavaScript</li>
          <li class="list-group-item">Para el desarrollo del front-end hemos utilizado react.js(JavaScript, Node.JS y estilos)</li>
          <li class="list-group-item"> En la parte del back-end hemos utilizado python y pgadmin</li>
        </ul>
        <ul class="list-group">
          <li class="list-group-item active" aria-current="true">
            Versión
          </li>
          <li class="list-group-item">Versión estable más reciente 1.1</li>
        </ul>
        <ul class="list-group">
          <li class="list-group-item active" aria-current="true">
            Fuentes
          </li>
          <li class="list-group-item">https://github.com/avegac1996/PROYECTO_INTEGRADOR</li>
        </ul>
        <br />
      </div>
    );
  }
}

export default QuienesSomos;
