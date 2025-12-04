from flask import Flask,render_template

app = Flask(__name__)

@app.route('/')
def Header():
    return render_template('header.html')

def HomePage():
    return render_template('home.html')


