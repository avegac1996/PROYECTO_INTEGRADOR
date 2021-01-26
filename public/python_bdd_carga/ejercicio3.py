# temperatura

import pandas as pd

df = pd.read_csv('TMP.csv')

valores = df.values

for x in valores:
    print(
        f'INSERT INTO ubi_temperatura (id_temperatura, Id_Admin, Tmp_Belisario, Tmp_Carapungo, Tmp_Centro, Tmp_Cotocollao, Tmp_ElCamal, Tmp_Guamani, Tmp_LosChillos, Tmp_SanAntonio, Tmp_Tumbaco) VALUES ({""}, {""}, {x[2]}, {x[3]}, {x[4]}, {x[5]},, {x[6]},, {x[7]},, {x[8]},, {x[9]},, {x[10]});')



contador = 1
file = open("temperatura.txt", "w")

for x in valores:
    mensaje = f'INSERT INTO Temperatura (id_temperatura, Id_Admin, Tmp_Fecha, TmpHora) VALUES ({contador}, 1, \'{x[0]}\', \'{x[1]}\');\n'
    file.write(mensaje)
    contador += 1

file.close()


contador = 1
file = open("temperatura_2.txt", "w")

for x in valores:
    mensaje = f'INSERT INTO ubi_temperatura (id_temperatura, Tmp_Belisario, Tmp_Carapungo, Tmp_Centro, Tmp_Cotocollao, Tmp_ElCamal, Tmp_Guamani, Tmp_LosChillos, Tmp_SanAntonio, Tmp_Tumbaco) VALUES ({contador}, {x[2]}, {x[3]}, {x[4]}, {x[5]}, {x[6]}, {x[7]}, {x[8]}, {x[9]}, {x[10]});\n'
    file.write(mensaje)
    contador += 1

file.close()