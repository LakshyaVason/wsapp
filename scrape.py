from flask import Flask, jsonify, request
from flask_cors import CORS
import requests
from bs4 import BeautifulSoup

app = Flask(__name__)
CORS(app)

@app.route('/scrape', methods=['POST'])
def scrape():
    url = request.json['url']
    headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"}
    response = requests.get(url, headers=headers)
    soup = BeautifulSoup(response.text, "html.parser")
    product_info = soup.select_one('span[data-name]')

    if product_info:
        name = product_info['data-name']
        price = product_info['data-price']
        return jsonify({'name': name, 'price': price})
    else:
        return jsonify({'error': 'Price not found'})
    
    print("pressed")

if __name__ == '__main__':
    app.run(debug=True)