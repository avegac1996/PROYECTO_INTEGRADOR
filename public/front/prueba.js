const objeto = { id: 1, nombre: "LEONEL", apellido: "PARRALES" };

let sqlStatement = "UPDATE ubi_rad_solar SET ";

Object.keys(objeto).map((key) => {
  if (key !== "id") sqlStatement += key + "=" + objeto[key] + " ";
});

sqlStatement += "WHERE id_rad_solar=" + objeto["id"];
console.log(sqlStatement);
