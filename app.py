# from flask import Flask, jsonify
# from flask_cors import CORS
# import sqlite3
# from datetime import datetime

# app = Flask(__name__)
# CORS(app)  # Allow frontend requests

# # Initialize Database
# def init_db():
#     conn = sqlite3.connect("visitors.db")
#     cursor = conn.cursor()
#     cursor.execute('''CREATE TABLE IF NOT EXISTS visitor_count (
#                         date TEXT PRIMARY KEY, 
#                         count INTEGER)''')
#     conn.commit()
#     conn.close()

# # Function to update visitor count
# @app.route("/track", methods=["GET"])
# def track_visit():
#     today = datetime.now().strftime("%Y-%m-%d")

#     conn = sqlite3.connect("visitors.db")
#     cursor = conn.cursor()

#     cursor.execute("SELECT count FROM visitor_count WHERE date = ?", (today,))
#     row = cursor.fetchone()

#     if row:
#         count = row[0] + 1
#         cursor.execute("UPDATE visitor_count SET count = ? WHERE date = ?", (count, today))
#     else:
#         count = 1
#         cursor.execute("INSERT INTO visitor_count (date, count) VALUES (?, ?)", (today, count))

#     conn.commit()
#     conn.close()

#     return jsonify({"date": today, "visitors": count})

# # Function to get the visitor count
# @app.route("/get_count", methods=["GET"])
# def get_visitor_count():
#     today = datetime.now().strftime("%Y-%m-%d")

#     conn = sqlite3.connect("visitors.db")
#     cursor = conn.cursor()
#     cursor.execute("SELECT count FROM visitor_count WHERE date = ?", (today,))
#     row = cursor.fetchone()
#     conn.close()

#     count = row[0] if row else 0
#     return jsonify({"date": today, "visitors": count})

# if __name__ == "__main__":
#     init_db()
#     app.run(host="0.0.0.0", port=5001)
