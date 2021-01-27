const express = require("express");
const app = express();
// const request = require("request");
const async = require("async");

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
  password: "1996",
  database: "relacional", node
};

const pool = new Pool(config);

const getUsuarios = async (username, password) => {
  try {
    const res = await pool.query(`select * from administrador where correo='${username}' and contraseña='${password}'`);
    console.log(res.rows);
    return res.rows;
  } catch (error) {
    console.log(e);
  }
};

const getRadUV = async () => {
  try {
    const res = await pool.query("select * from rad_uv, ubi_rad_uv where rad_uv=id_rad_solar and ubi_rad_uv=id_rad_solar");
    console.log(res.rows);
    return res.rows;
  } catch (error) {
    console.log(e);
  }
};

const getRadUV_ubicacion = async () => {
  try {
    const res = await pool.query("select * from ubi_rad_uv");
    console.log(res.rows);
    return res.rows;
  } catch (error) {
    console.log(e);
  }
};

const getRadSolar = async () => {
  try {
    const res = await pool.query("select * from rad_solar, ubi_rad_solar where rad_solar.id_rad_solar = ubi_rad_solar.id_rad_solar FETCH FIRST 50 ROWS ONLY");
    console.log(res.rows);
    return res.rows;
  } catch (error) {
    console.log(e);
  }
};

const getRadSolar_ubicacion = async () => {
  try {
    const res = await pool.query("select * from ubi_rad_solar");
    console.log(res.rows);
    return res.rows;
  } catch (error) {
    console.log(e);
  }
};

const getTemperatura = async () => {
  try {
    const res = await pool.query("select * from ubi_rad_solar");
    console.log(res.rows);
    return res.rows;
  } catch (error) {
    console.log(e);
  }
};

const getTemperatura_ubicacion = async () => {
  try {
    const res = await pool.query("select * from ubi_rad_solar");
    console.log(res.rows);
    return res.rows;
  } catch (error) {
    console.log(e);
  }
};

app.get("/usuarios", (req, response) => {
  const username = req.query.username;
  const contrasenia = req.query.password;
  console.log(username, contrasenia);

  getUsuarios(username, contrasenia)
    .then((data) => {
      if (data.length === 1) {
        response.json({ usuarios: "OK" });
      } else {
        response.json({ usuarios: "NO" });
      }
    })
    .catch((err) => {
      console.error(err);
    });
});

app.get("/rad_solar", (request, response) => {
  getRadSolar()
    .then((data) => {
      console.log(data);
      response.json({ data: data });
    })
    .catch((err) => {
      console.error(err);
    });
});

app.get("/rad_solar_ubicacion", (request, response) => {
  getRadSolar_ubicacion()
    .then((data) => {
      console.log(data);
      response.json({ data: data });
    })
    .catch((err) => {
      console.error(err);
    });
});

app.get("/rad_uv", (request, response) => {
  getRadUV()
    .then((data) => {
      console.log(data);
      response.json({ data: data });
    })
    .catch((err) => {
      console.error(err);
    });
});

app.get("/rad_uv_ubicacion", (request, response) => {
  getRadUV_ubicacion()
    .then((data) => {
      console.log(data);
      response.json({ data: data });
    })
    .catch((err) => {
      console.error(err);
    });
});

app.get("/temperatura", (request, response) => {
  getTemperatura()
    .then((data) => {
      console.log(data);
      response.json({ data: data });
    })
    .catch((err) => {
      console.error(err);
    });
});

app.get("/temperatura_ubicacion", (request, response) => {
  getTemperatura_ubicacion()
    .then((data) => {
      console.log(data);
      response.json({ data: data });
    })
    .catch((err) => {
      console.error(err);
    });
});

app.listen("8010", () => {
  console.log("SERVIDOR EN 8010");
});
