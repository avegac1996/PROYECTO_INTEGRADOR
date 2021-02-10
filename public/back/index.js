const express = require("express");
const app = express();
// const request = require("request");

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const { Pool } = require("pg");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
  app.options("*", (req, res) => {
    res.header("Access-Control-Allow-Methods", "GET, PATCH, PUT, POST, DELETE, OPTIONS");
    res.send();
  });
});

const config = {
  user: "postgres",
  host: "localhost",
  password: "12345",
  database: "Quito",
};

const pool = new Pool(config);
const only = " FETCH FIRST 500 ROWS ONLY";
// const only = "";

const getUsuarios = async (username, password) => {
  try {
    const res = await pool.query(`select * from administrador where correo='${username}' and contraseña='${password}'`);
    return res.rows;
  } catch (error) {
    console.log(e);
  }
};

// -----------------------------------
// -------RADIACION SOLAR -----------
// -----------------------------------
const getRadiacionSolar = async (num) => {
  try {
    let anio = "";
    if (num !== undefined) {
      anio = ` AND date_part('year', solar_fecha) = ${num}`;
    }
    const res = await pool.query(
      `SELECT rad_solar.id_rad_solar as id,solar_fecha as "Fecha",solar_hora as "Hora", tmp_belisario as "Belisario", tmp_carapungo as "Carapungo",tmp_centro as "Centro", tmp_cotocollao as "Cotocollao", tmp_elcamal as "Camal",tmp_guamani as "Guamaní", tmp_loschillos as "Chillos", tmp_sanantonio as "SanAntonio", tmp_tumbaco as "Tumbaco" 
      FROM rad_solar, ubi_rad_solar WHERE rad_solar.id_rad_solar = ubi_rad_solar.id_rad_solar` +
        anio +
        only
    );
    titulos = Object.keys(res.rows[0]).map((key) => {
      return key;
    });
    return { rows: res.rows, columns: titulos, tamanio: res.rowCount };
  } catch (error) {
    console.log(error);
  }
};

const editRadiacionSolar = async (objeto) => {
  try {
    const sqlStatement = `UPDATE ubi_rad_solar SET tmp_belisario=${objeto.Belisario}, tmp_carapungo=${objeto.Carapungo}, tmp_centro=${objeto.Centro}, tmp_cotocollao=${objeto.Cotocollao}, tmp_elcamal=${objeto.Camal}, tmp_guamani=${objeto["Guamaní"]}, tmp_loschillos=${objeto.Chillos} ,tmp_sanantonio=${objeto.SanAntonio}, tmp_tumbaco=${objeto.Tumbaco} where id_rad_solar=${objeto.id}`;
    console.log(sqlStatement);
    const res = await pool.query(sqlStatement);
    return { mensaje: "editado" };
  } catch (error) {
    console.log(error);
  }
};

const deleteRadiacionSolar = async (id) => {
  try {
    const sqlStatement = `Delete from ubi_rad_solar where id_rad_solar = ${id};Delete from rad_solar where id_rad_solar = ${id}`;
    console.log(sqlStatement);
    const res = await pool.query(sqlStatement);
    return { mensaje: "eliminado" };
  } catch (error) {
    console.log(error);
  }
};

// -----------------------------------
// -------RADIACION UV----------------
// -----------------------------------
const getRadiacionUV = async (num) => {
  try {
    let anio = "";
    if (num !== undefined) {
      anio = ` AND date_part('year', uv_fecha) = ${num}`;
    }
    const res = await pool.query(
      `SELECT rad_uv.id_uv as "id", uv_fecha as "Fecha", uv_hora as "Hora",uv_centro as "Centro", uv_cotocollao as "Cotocollao", uv_guamani as "Guamaní", uv_jipijapa as "Jipijapa" FROM rad_uv, ubi_rad_uv WHERE rad_uv.id_uv = ubi_rad_uv.id_uv
    ` +
        anio +
        only
    );
    titulos = Object.keys(res.rows[0]).map((key) => {
      console.log(key);
      return key;
    });
    return { rows: res.rows, columns: titulos, tamanio: res.rowCount };
  } catch (error) {
    console.log(error);
  }
};

// -----------------------------------
// -------RADIACION TEMPERATURA-------
// -----------------------------------

const getTemperatura = async (num) => {
  try {
    let anio = "";
    if (num !== undefined) {
      anio = ` AND date_part('year', tmp_fecha) = ${num}`;
    }
    const res = await pool.query(
      `SELECT temperatura.id_temperatura as "id", tmp_fecha as "Fecha", tmphora as "Hora", tmp_belisario as "Belisario", tmp_carapungo as "Carapungo", tmp_centro as "Centro", tmp_cotocollao as "Cotocollao", tmp_elcamal as "Camal", tmp_guamani as "Guamaní", tmp_loschillos as "Chillos", tmp_sanantonio as "SanAntonio", tmp_tumbaco as "Tumbaco" FROM temperatura, ubi_temperatura WHERE temperatura.id_temperatura = ubi_temperatura.id_temperatura` +
        anio +
        only
    );
    titulos = Object.keys(res.rows[0]).map((key) => {
      console.log(key);
      return key;
    });
    return { rows: res.rows, columns: titulos, tamanio: res.rowCount };
  } catch (error) {
    console.log(error);
  }
};

/*
===========================================
===========================================
================= PETICIONES ==============
===========================================
===========================================
*/

app.get("/Usuarios", (req, response) => {
  let { email, password } = req.query;
  getUsuarios(email, password)
    .then((data) => {
      console.log("GET /Usuarios correcta");
      let login = false;
      if (data.length === 1) login = true;
      response.json(login);
    })
    .catch((err) => {
      console.error(err);
    });
});

// GET
app.get("/RadiacionSolar", (req, response) => {
  getRadiacionSolar(req.query["0"])
    .then((data) => {
      console.log("GET /RadiacionSolar correcta");
      response.json(data);
    })
    .catch((err) => {
      console.error(err);
    });
});

app.get("/RadiacionUv", (req, response) => {
  getRadiacionUV(req.query["0"])
    .then((data) => {
      console.log("GET /RadiacionUv correcta");
      response.json(data);
    })
    .catch((err) => {
      console.error(err);
    });
});

app.get("/Temperatura", (req, response) => {
  getTemperatura(req.query["0"])
    .then((data) => {
      console.log("GET /Temperatura correcta");
      response.json(data);
    })
    .catch((err) => {
      console.error(err);
    });
});

// POST
app.post("/EditRadiacionSolar", (req, response) => {
  editRadiacionSolar(req.body)
    .then((data) => {
      console.log("POST /Edición correcta");
      response.json(data);
    })
    .catch((err) => {
      console.error(err);
    });
});

// Delete
app.post("/DeleteRadiacionSolar", (req, response) => {
  deleteRadiacionSolar(req.body.id)
    .then((data) => {
      console.log("POST /Edición correcta");
      response.json(data);
    })
    .catch((err) => {
      console.error(err);
    });
});

app.listen("8010", () => {
  console.log("SERVIDOR EN 8010");
});
