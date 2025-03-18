function calcularPrecioReserva(hora, tiempo) {
    const precioHora=5;
    if ((hora <6 ) || (hora > 22)) {
        throw new Error("Error, hora no permitida")
    }
    return tiempo*precioHora;
  }
  
export default calcularPrecioReserva;
  