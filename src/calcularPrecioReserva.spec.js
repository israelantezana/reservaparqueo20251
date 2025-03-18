import calcularPrecioReserva from "./calcularPrecioReserva.js";

describe("CalcularPrecioReserva", () => {
  //(1) Casos Basico:
  //  calcularPrecioReseva(6, 1) =>  5
  //  calcularPrecioReserva(7, 2) => 10
  it("deberia calcular la reserva para una hora en horario permitido", () => {
    expect(calcularPrecioReserva(6, 1)).toEqual(5);
  });

  it("deberia calcular la reserva para dos horas en horario permitido", () => {
    expect(calcularPrecioReserva(7, 2)).toEqual(10);
  });

  //(2) Caso reservas fuera de hora:
  //  calcularPrecioReseva(5, 1) =>  "Error, hora no permitida"
  //  calcularPrecioReseva(11, 2) =>  "Error, hora no permitida"
  it("deberia mostrar error si la hora es menor a las 6am", () => {
    expect(()=> calcularPrecioReserva(5, 1)).toThrow("Error, hora no permitida");
  });
});


