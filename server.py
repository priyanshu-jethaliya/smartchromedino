from flask import Flask, render_template, make_response
from run import run_dino
import os

app = Flask(__name__)

@app.route('/')
def index():
  return render_template('start.html')
 
@app.route('/index.html')
def other_page():
    # Add code to handle "index.html" here if needed
    return render_template('index.html')

@app.route('/my-link/')
def my_link():
  run_dino()
  response = make_response("<script>window.close();</script>")
  return response

if __name__ == '__main__':
  port = int(os.environ.get('PORT', 5000))
  app.run(host='0.0.0.0', port=port, debug=True)
