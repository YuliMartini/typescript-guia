(() => {
  //funcion de tipo never no debe de terminar exitosamente
  const error = (msg: string): never | number => {
    if (false) {
      throw new Error(msg);
    }
    return 1;
  };

  error("Help!");
  console.log("Hola Mundo!");
})();
