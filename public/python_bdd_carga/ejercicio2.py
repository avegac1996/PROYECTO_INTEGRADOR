# RADIACION SOLAR

import pandas as pd

df = pd.read_csv('RS.csv')
valores = df.values


contador = 1
file = open("radiacion_solar.txt", "w")

for x in valores:
    mensaje = f'INSERT INTO Rad_Solar (id_Rad_Solar, Id_Admin, Solar_Fecha, Solar_Hora) VALUES ({contador}, 1, \'{x[0]}\', \'{x[1]}\');\n'
    file.write(mensaje)
    contador += 1

file.close()


contador = 1
file = open("radiacion_solar_2.txt", "w")

for x in valores:
    mensaje = f'INSERT INTO ubi_Rad_Solar (id_Rad_Solar, Tmp_Belisario, Tmp_Carapungo, Tmp_Centro, Tmp_Cotocollao, Tmp_ElCamal, Tmp_Guamani, Tmp_LosChillos, Tmp_SanAntonio, Tmp_Tumbaco) VALUES ({contador}, {x[2]}, {x[3]}, {x[4]}, {x[5]}, {x[6]}, {x[7]}, {x[8]}, {x[9]}, {x[10]});\n'
    file.write(mensaje)
    contador += 1

file.close()
