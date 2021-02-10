# RADIACION UV
import pandas as pd

df = pd.read_csv('IUV.csv')

valores = df.values

# for x in valores:
#     print(
#         f'INSERT INTO ubi_Rad_UV (id_UV, Id_Admin, UV_Centro, UV_Cotocollao, UV_Guamani, UV_Jipijapa) VALUES ({""}, {""}, {x[2]}, {x[3]}, {x[4]}, {x[5]});')

contador = 1
file = open("radiacion_uv.txt", "w")

for x in valores:
    mensaje = f'INSERT INTO Rad_UV (id_UV, Id_Admin, UV_Fecha, UV_Hora) VALUES ({contador}, 1, \'{x[0]}\', \'{x[1]}\');\n'
    file.write(mensaje)
    contador += 1

file.close()


contador = 1
file = open("radiacion_uv_2.txt", "w")

for x in valores:
    mensaje = f'INSERT INTO ubi_Rad_UV (id_UV, UV_Centro, UV_Cotocollao, UV_Guamani, UV_Jipijapa) VALUES ({contador}, {x[2]}, {x[3]}, {x[4]}, {x[5]});\n'
    file.write(mensaje)
    contador += 1

file.close()

