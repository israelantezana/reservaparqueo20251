import calcularPrecioReserva from "./calcularPrecioReserva.js";

describe("CalcularPrecioReserva", () => {
  //(1) Casos Basico:
  //  calcularPrecioReseva(6, 1) =>  5
  //  calcularPrecioReserva(7, 2) => 10
  it("deberia calcular la reserva para una hora en horario permitido", () => {
    expect(calcularPrecioReserva(6, 1)).toEqual(5);
  });
});


