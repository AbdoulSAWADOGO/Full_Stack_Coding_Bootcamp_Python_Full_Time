# import psycopg2
import requests
# HOSTNAME = 'localhost'
# USERNAME = 'postgres'
# PASSWORD = '   '
# DATABASE = 'gif'

def api_pays():

    request=request.json()
    return request

data=api_pays()

print(data[0])

connection=psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE)
cursor=connection.cursor()
for i in range (100):
    gif=data[i]
    query=f"INSERT INTO gifs()VALUES ('{country['name']}','{country['flag']}','{country['subregion']}',{country['population']})"
    cursor.execute(query)
connection.commit()
connection.close()