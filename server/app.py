from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/generate-character', methods=['POST'])
def generate_character():
    preferences = request.json['preferences']
    # Here is where you'll add the code to generate a character using GPT
    character = {
        'name': 'John Doe'
    }
    return jsonify(character)

if __name__ == '__main__':
    app.run()
