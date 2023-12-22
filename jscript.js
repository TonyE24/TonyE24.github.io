/* cambia el color de fondo de bloqueinicio */
function cambiarColorFondo() {
    // Generamos colores aleatorios en formato hexadecimal
    const nuevoColor = '#' + Math.floor(Math.random()*16777215).toString(16);

    // Seleccionamos el elemento cuadro y actualizamos su color de fondo
    const cuadro = document.getElementById('Minombre');
    cuadro.style.backgroundColor = nuevoColor;
  }

  // Llamamos a la función cambiarColor cuando la página carga y establecemos un intervalo para cambiar el color cada 2 segundos
  window.onload = function() {
    cambiarColorFondo(); // Cambiamos el color al cargar la página
    setInterval(cambiarColorFondo, 2000); // Cambiamos el color cada 2 segundos
    cambiarColorLetras(); // Cambiamos los colores al cargar la página
    setInterval(cambiarColorLetras, 2000); // Cambiamos los colores cada 2 segundos
  };

  function cambiarColorLetras() {
    const palabraElement = document.getElementById('Saludo');
    const palabra = palabraElement.textContent; // Obtenemos el contenido de la palabra

    // Generamos colores aleatorios para cada letra y creamos un nuevo HTML con estilos inline
    const letrasColoreadas = palabra
      .split('') // Convertimos la palabra en un array de caracteres
      .map(letra => `<span style="color: ${generarColorAleatorio()}">${letra}</span>`)
      .join(''); // Unimos las letras de nuevo en una cadena

    // Actualizamos el contenido del elemento con las letras coloreadas
    palabraElement.innerHTML = letrasColoreadas;
  }

  function generarColorAleatorio() {
    // Generamos colores aleatorios en formato hexadecimal
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }