// Obtener elementos del DOM
const textoPlanoInput = document.getElementById('texto-plano');
const encriptarButton = document.getElementById('encriptar');
const textoEncriptadoInput = document.getElementById('texto-encriptado');
const desencriptarButton = document.getElementById('desencriptar');

// Función para encriptar texto
function encriptar(textoPlano, claveEncriptacion) {
  // Utilizar algoritmo de encriptación AES
  const cipher = crypto.createCipher('aes-256-cbc', claveEncriptacion);
  let textoEncriptado = cipher.update(textoPlano, 'utf8', 'hex');
  textoEncriptado += cipher.final('hex');
  return textoEncriptado;
}

// Función para desencriptar texto
function desencriptar(textoEncriptado, claveEncriptacion) {
  // Utilizar algoritmo de desencriptación AES
  const decipher = crypto.createDecipher('aes-256-cbc', claveEncriptacion);
  let textoPlano = decipher.update(textoEncriptado, 'hex', 'utf8');
  textoPlano += decipher.final('utf8');
  return textoPlano;
}

// Eventos para encriptar y desencriptar
encriptarButton.addEventListener('click', () => {
  const textoPlano = textoPlanoInput.value;
  const claveEncriptacion = 'mi_clave_encriptacion_segura'; // reemplaza con una clave segura
  const textoEncriptado = encriptar(textoPlano, claveEncriptacion);
  textoEncriptadoInput.value = textoEncriptado;
});

desencriptarButton.addEventListener('click', () => {
  const textoEncriptado = textoEncriptadoInput.value;
  const claveEncriptacion = 'mi_clave_encriptacion_segura'; // reemplaza con una clave segura
  const textoPlano = desencriptar(textoEncriptado, claveEncriptacion);
  textoPlanoInput.value = textoPlano;
});