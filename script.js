document.addEventListener("DOMContentLoaded", function () {
  const carta = `Hola mi amor, es una de mis primeras veces haciendo esto para alguien y tengo la verdad miedo de que me salte algún error jsjsjs.
Bueno a lo que iba, quiero escribirte varias cosas, algunas ya las sabes porque las hemos hablado varias veces pero no me importa aun así nunca esta de mas recordártelo ⸜(｡˃ ᵕ ˂ )⸝♡
Antes de nada quiero agradecerte por quererme tal y como soy y sacarme sonrisas todos los días, eres una de las pocas personas que he llegado a conocer y enamorarme que tiene mi misma forma de amar, amo tu intensidad, amo tus te quiero, amo nuestras llamadas, amo tu sonrisa y ojitos lindos(La verdad no hay nada que no ame de ti, incluso cuando te me enfadas y tardas tu tiempito en decírmelo)Ally...realmente quiero pasar el resto de mi vida junto a ti, quiero hacer muchas cosas contigo incluso si solo es estar en silencio mirando las nubes sería muy feliz solo estando a tu lado y envejecer juntas. Jamás te pediré que bajes la luna o las estrellas por mi porque no me hace falta pedírtelo, ya lo haces todos los días haciéndome sentir amada.
si en algún momento llegamos a discutir quiero que lo hablemos...quiero hacer las cosas bien contigo y nunca irnos a dormir enfadadas porque no me lo perdonaría en la vida. Antes prefiero perder mi orgullo y pedirte perdón mil veces o llorar por ti. Confesare algo tengo muchísimas ganas de verte poder abrazarte y besarte …hacer tanto juntas pero las mismas ganas que tengo de verte tengo mis miedos porque en mi mente me llega: -¿y si no la gusto ?, -¿y si llego a ser aburrida para ella? se que probablemente me dirás que eso es una tontería porque me amas tal como soy y lo se pero los miedos siguen ahí lo quiera o no jajaja...Aun así mis ganas de verte son millones de veces mas grandes. Las veces que me dices cuanto me deseas hacen que mi corazón de un vuelco jajaja y a veces no se ni como contestarte porque nunca me sentí deseada de esa manera y no simplemente tener relaciones si no que como tu me dijiste quieres hacerme el amor y es algo que de verdad me pone muy nerviosa(en el buen sentido)porque es algo que no he experimentado de esa manera tan bonita ni con una mujer(Me encanta tmb cuando me provocas y me pones esa mirada que me lleva al mismísimo cielo)Mi cuerpo y alma te los entrego a ti.
Cómo habrás comprobado ya la mayoría de mi familia sabe de ti, no me escondo a la hora de amar y mas si se que esa persona es con la que quiero pasar el resto de mis días, es decir tu. La verdad y algo que te dije es que a mi me habías gustado desde tiempo antes desde muestra primera llamada jugando jajaja porque se me hacia tan fácil hablar contigo que siempre quería mas...quería conocerte y saber todo de ti tanto lo bueno como lo malo. No te lo digo las suficientes veces pero realmente me gustas Ally, me gusta tu ser, tu personalidad, tu forma de pensar, tu físico, tus gustos....Y quiero que sepas que conmigo puedes ser como te nazca si quieres ser suave como un algodón se así si quieres verte como lo mas rudo de este mundo hazlo no me importa, solo quiero que te sientas libre a ser como te plazca estando conmigo. Como persona nerviosa que soy muchas veces me cuesta hacer cosas y me quedo cortada(es algo normal en mi con las personas que me gustan)Solo te pido que me tengas algo de paciencia en ciertos ámbitos porque me trabo con las palabras y a veces las repito mucho porque mi cerebro me bloquea las neuronas y me hace cortocircuitos cuando estoy contigo(Algo que no me gusta de enamorarme es eso porque mi parte racional desaparece completamente y me hace actuar bastante infantil o muy tímida)Así que por favor solo tenme paciencia.
La verdad siento que se me quedo muy corto y que aun no exprese todas las ideas que quería escribirte pero como te digo pienso estar toda la vida a tu lado asi que ya habrá mas oportunidades para hacerte este tipo de detalles que tanto te mereces mi vida y para despedirme de esta "carta" quiero decirte que no puedo esperar a que ya oficialmente seamos novias porque aunque se que soy tuya me gusta el titulo ya que suena mas serio y seria un siguiente paso en nuestra relación y eso me emociona tanto que es indescriptible.
PD:GRACIAS POR TODO LO QUE HACES POR MI JAMÁS CAMBIES PORFA TE AMO MUCHISIMO MI AMOR`;

  let i = 0;
  const texto = document.getElementById("textoCarta");

  function escribir() {
    if (i < carta.length) {
      texto.innerHTML += carta.charAt(i);
      i++;
      setTimeout(escribir, 40);
    }
  }

  const boton = document.getElementById("mostrarCarta");
  const cartaElemento = document.getElementById("carta");
  const corazones = document.getElementById("corazones");

  boton.onclick = function () {
    cartaElemento.classList.remove("hidden");
    boton.style.display = "none";
    escribir();
    corazones.classList.add("show");
  };

  // Música
  const musica = document.getElementById("musica");
  const btnMusica = document.getElementById("btnMusica");
  btnMusica.onclick = () => {
    if (musica.paused) {
      musica.play();
      btnMusica.textContent = "⏸ Música";
    } else {
      musica.pause();
      btnMusica.textContent = "▶️ Música";
    }
  };

  // Corazones flotando
  setInterval(() => {
    const corazon = document.createElement("div");
    corazon.className = "heart";
    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.animationDuration = 3 + Math.random() * 2 + "s";
    corazones.appendChild(corazon);
    setTimeout(() => corazon.remove(), 5000);
  }, 300);
});
