from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3
from scrape import scrape_price  # Import your existing scrape_price function

app = Flask(__name__)
CORS(app)

def create_database():
    conn = sqlite3.connect("user_data.db")
    c = conn.cursor()
    c.execute("""
        CREATE TABLE IF NOT EXISTS user_data (
            username TEXT,
            website TEXT,
            scraped_data TEXT
        )
    """)
    conn.commit()
    conn.close()

def save_user_data(username, data):
    conn = sqlite3.connect("user_data.db")
    c = conn.cursor()
    c.execute("DELETE FROM user_data WHERE username = ?", (username,))
    for url, info in data.items():
        product_name, product_price = info
        combined_info = f"{product_name}||{product_price}"
        c.execute("INSERT INTO user_data (username, website, scraped_data) VALUES (?, ?, ?)", (username, url, combined_info))
    conn.commit()
    conn.close()

def load_user_data(username):
    conn = sqlite3.connect("user_data.db")
    c = conn.cursor()
    c.execute("SELECT website, scraped_data FROM user_data WHERE username = ?", (username,))
    result = c.fetchall()
    conn.close()
    data = {}
    for row in result:
        url, combined_info = row
        product_name, product_price = combined_info.split("||")
        data[url] = (product_name, product_price)
    return data

create_database()

@app.route('/scraped_data', methods=['GET'])
def get_scraped_data():
    username = 'default_user'
    user_data = load_user_data(username)
    return jsonify(user_data)

@app.route('/scrape', methods=['POST'])
def scrape_website():
    url = request.json.get('url')
    if not url:
        return jsonify({'error': 'Please provide a URL.'}), 400

    name, price = scrape_price(url)
    if not name:
        return jsonify({'error': 'Failed to scrape data.'}), 400

    scraped_data = {
        'website': url,
        'product_name': name,
        'product_price': price
    }

    username = 'default_user'
    user_data = load_user_data(username)
    user_data[url] = (name, price)
    save_user_data(username, user_data)

    return jsonify(scraped_data)

if __name__ == '__main__':
    app.run(debug=True)
