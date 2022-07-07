import foto from "../../Assets/images/fotocriadores2.jpeg";
import style from "./style.module.css";

export function AboutUs() {
  return (
    <div className={style.aboutus}>
      <div className={style.textblock}>
        <h1>About us</h1>
        <p>
          Este foi um site de projeto feito por 2 estudantes do curso de web
          development da ironhack , o trabalho feito se embasa em conhecimentos
          que obtivemos durante 5 semanas de aula. Fizemos uso de bibliotecas
          como React.js , bootstrap , toaster , com base em Javascript ,HTML e
          css.{" "}
        </p>
        <span>
          <strong>
            Assim como gostamos de programar códigos, também apreciamos uma boa
            cerveja!{" "}
          </strong>
        </span>
        <p>
          Mesmo sob muita demanda de carga de estudos do bootcamp , o trabalho
          recompensou de forma parecida com a primeira cerveja pós expediente de
          uma sexta-feira cheia! A experiência de criar algo do zero nos trouxe
          cada vez mais próximos de como agir e pensar como um programador
          profissional que planeja , executa , erra, e tenta de novo com novas
          idéias e abstrações dos erros passados.
        </p>
        <p>
          Espero que aproveitem e gostem do site , tanto quanto nós tivemos o
          prazer de montá-lo!!
        </p>

        <p>Criadores:</p>
        <p>-Daniel Skonetzky - turma 75 web development ironhack</p>
        <p>-Jino Hong - turma 75 web development ironhack</p>

        <img className={style.img} src={foto} alt="criadores daniel e jino" />
      </div>
    </div>
  );
}
