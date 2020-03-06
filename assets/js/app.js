// Variables
const contenedor = document.querySelector('.container');
const nombre = document.getElementById('inputNombre');
const apellido = document.getElementById('inputApellido');
const boton = document.querySelector('.btn');


// Events
// Detiene el envio del form y comprueba los campos
boton.addEventListener('click', enviarInfo);

// Limpia el borde rojo del input
nombre.addEventListener('focus', limpiaInput);
apellido.addEventListener('focus', limpiaInput);


// Functions
function limpiaInput(){
  // nombre.classList.remove('warning')
  nombre.classList.remove('warning');
  apellido.classList.remove('warning');
};

function enviarInfo(e) {
  e.preventDefault();
  // Creo variables y luego le envio los datos del input para manejarlos luego.
  let nombreValue;
  let apellidoValue;
  let storage;
  nombreValue = nombre.value;
  apellidoValue = apellido.value;

  function saludo(){
    const saludo = document.createElement('div');
    saludo.className = 'col-lg-12 saludo';
    contenedor.appendChild(saludo);
  };

  function cargaHistoria(){
    const persona = nombre.value + " " + apellido.value;
    const historia = document.createElement('p');

    let texto = `<p>Cuando ${persona} se despertó una mañana después de un sueño intranquilo, se encontró sobre su cama convertido en un monstruoso insecto". Estaba tumbado sobre su espalda dura, y en forma de caparazón y, al levantar un poco la cabeza, veía un vientre abombado, parduzco, dividido por partes duras en forma de arco, sobre cuya protuberancia apenas podía mantenerse el cobertor, a punto ya de resbalar al suelo. Sus muchas patas, ridículamente pequeñas en comparación con el resto de su tamaño, le vibraban desamparadas ante los ojos. «¿Qué me ha ocurrido?», pensó. No era un sueño. Su habitación, una auténtica habitación humana, si bien algo pequeña, permanecía tranquila entre las cuatro paredes harto conocidas. Por encima de la mesa, sobre la que se encontraba extendido un muestrario de paños desempaquetados – era viajante de co- mercio –, estaba colgado aquel cuadro, que hacía poco había recortado de una revista y había colocado en un bonito marco dorado. Representaba a una dama ataviada con un sombrero y una boa” de piel, que estaba allí, sentada muy erguida y levantaba hacia el observador un pesado manguito de piel, en el cual había desaparecido su antebrazo. La mirada de ${persona} se dirigió después hacia la ventana, y el tiempo lluvioso se oían caer gotas de lluvia sobre la chapa del alfeizar de la ventana – le ponía muy melancólico. «¿Qué pasaría – pensó – si durmiese un poco más y olvidase todas las chifladuras?» Pero esto era algo absolutamente imposible, porque estaba acostumbrado a dormir del lado derecho, pero en su estado actual no podía ponerse de ese lado. Aunque se lanzase con mu cha fuerza hacia el lado derecho, una y otra vez se volvía a ba lancear sobre la espalda. Lo intentó cien veces, cerraba los ojos para no tener que ver las patas que pataleaban, y sólo cejaba en su empeño cuando comenzaba a notar en el costado un dolor leve y sordo que antes nunca había sentido. «iDios mío!», pensó. «iQué profesión tan dura he elegido! Un día sí y otro también de viaje. Los esfuerzos profesionales son mucho mayores que en el mismo almacén de la ciudad, y además se me ha endosado este ajetreo de viajar, el estar al tanto de los empalmes de tren, la comida mala y a deshora, una relación humana constantemente cambiante, nunca duradera, que jamás llega a ser cordial. ¡Que se vaya todo al diablo!» Sintió sobre el vientre un leve picor, con la espalda se desli zó lentamente más cerca de la cabecera de la cama para poder levantar mejor la cabeza; se encontró con que la parte que le picaba estaba totalmente cubierta por unos pequeños puntos blancos, que no sabía a qué se debían, y quiso palpar esa parte con una pata, pero inmediatamente la retiró, porque el roce le producía esca- lofríos. Se deslizó de nuevo a su posición inicial. «Esto de levantarse pronto», pensó, «le hace a uno desvariar. El hombre tiene que dormir. Otros viajantes viven como pachás”. Si yo, por ejemplo, a lo largo de la mañana vuelvo a la pensión para pasar a limpio los pedidos que he conseguido, estos señores todavía están sentados tomando el desayuno. Eso podría intentar yo con mi jefe, en ese momento iría a parar a la calle. Quién sabe, por lo demás, si no sería lo mejor para mí. Si no tuviera que dominarme por mis padres, ya me habría despedido hace tiempo, me habría presentado ante el jefe y le habría dicho mi opinión con toda mi alma. ¡Se habría caído de la mesa! Sí que es una extraña costumbre la de sentarse sobre la mesa y, desde esa altura, hablar hacia abajo con el empleado que, además, por culpa de la sordera del jefe, tiene que acercarse mucho. Bueno, la esperanza todavía no está perdida del todo; si alguna vez tengo el dinero suficiente para pagar las deudas que mis padres tienen con él – puedo tardar todavía entre cinco y seis años – lo hago con toda seguridad. Entonces habrá llegado el gran momento, ahora, por lo pronto, tengo que levantarme porque el tren sale a las cinco», y miró hacia el despertador que hacía tictac sobre el armario. «¡Dios del cielo!», pensó. Eran las seis y media y las manecillas seguían tranquilamente hacia delante, ya había pasado incluso la media, eran ya casi las menos cuarto. ¿Es que no habría sonado el despertador?» Desde la cama se veía que estaba correctamente puesto a las cuatro, seguro que también había sonado. Sí, pero... Cera posible seguir durmiendo tan tranquilo con ese ruido que hacía temblar los muebles? Bueno, tampoco había dormido tranquilo, pero quizá tanto más profundamente. ¿Qué iba a hacer ahora? El siguiente tren salía a las siete, para cogerlo tendría que haberse dado una prisa loca, el muestrario todavía no estaba empaquetado, y él mismo no se encontraba especialmente espabilado y ágil; e incluso si consiguiese coger el tren, no se podía evitar una reprimenda del jefe, porque el mozo de los recados habría esperado en el tren de las cinco y ya hacía tiempo que habría dado parte de su descuido. Era un esclavo del jefe, sin agallas ni juicio. ¿Qué pasaría si dijese que estaba enfermo? Pero esto sería sumamente desagradable y sospechoso, porque ${persona} no había estado enfermo ni una sola vez durante los cinco años de servicio. Seguramente aparecería el jefe con el médico del seguro, haría reproches a sus padres por tener un hijo tan vago y se salvaría de todas las objeciones remitiéndose al médico del seguro, para el que sólo existen hombres totalmente sanos, pero con aversión al trabajo. ¿Y es que en este caso no tendría un poco de razón? ${persona}, a excepción de una modorra realmente superflua des pués del largo sueño, se encontraba bastan- te bien e incluso tenía mucha hambre. ¡Mientras reflexionaba sobre todo esto con gran rapidez, sin poderse decidir a abandonar la cama – en este mismo instante el.despertador daba las siete menos cuarto –, llamaron caute losamente a la puerta que estaba a la cabecera de su cama. ${persona} – dijeron (era la madre) –, son las siete menos cuarto. ¿No ibas a salir de viaje? ¡Qué dulce voz! ${persona} se asustó, al contestar, escuchó una voz que, evidentemente, era la suya, pero en la cual, como des de lo profundo, se mezclaba un doloroso e incontenible piar, que en el primer momento dejaba salir las palabras con clari dad para, al prolongarse el sonido, destrozarlas de tal forma que se sabía si se había oído bien. </p>`;

    historia.className = 'col-lg-12 text-center';
    historia.innerHTML = `${texto}`;
    contenedor.appendChild(historia);
  }

  function ocultar(){
    let form = document.querySelector('#formulario');
    form.className = 'disabled';
  }

  if(nombreValue === '') {
    nombre.classList.add('warning');
  } else if (apellidoValue === '') {
    apellido.classList.add('warning');
  } else {
    //saludo();
    ocultar();
    cargaHistoria();
  }
};
