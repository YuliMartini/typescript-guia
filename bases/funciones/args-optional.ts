(() => {
  const fullName = (firstName: string, lastName?: string): string => {
    return `${firstName} ${lastName || "No Lastname"}`;
  };

  const name = fullName("Tony");
  console.log({ name });
})();
