import { getHeroeByIdAsync } from "../../../src/base-pruebas/base-pruebas/09-promesas";

describe("Pruebas en 09 promesas", () => {
  test("getHeroeByIdAsync debe de retornar un heroe", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toEqual({
        id: 1,
        name: "Batman",
        owner: "DC",
      });
      // Done nos ayuda a decirle a JEST para decirle que espere a que nuestro codigo termine
      done();
    });
  });

//   test("getHeroeByIdAsync debe de obtener un error si heroe no existe", (done) => {
//     const id = 1;
//     getHeroeByIdAsync(id)
//     //   .then((hero) => {
//     //     expect(heroe).toBeFalsy();
//       })
//       .catch((error) => {
//         expect(error).toBe("No se pudo encontrar el heroe con el id " + id);

//         // Done nos ayuda a decirle a JEST para decirle que espere a que nuestro codigo termine
//         done();
//       });
//   });
});
