from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/index')
def index():
    #jsonObj = request.json_get('txt') non funziona perchè lo script serverSide può essere eseguito una volta soltanto
    return render_template('index.html')

@app.route('/process', methods = ['GET', 'POST'])
def processInformation():
    data = request.get_json()
    result = 'Your data is: ' + str(data)
    return result

if __name__ == '__main__':
    app.run(host = 'localhost', port = 8080, debug = True)
