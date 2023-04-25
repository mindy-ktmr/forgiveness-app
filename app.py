from flask import Flask, request, jsonify, send_from_directory
import openai

app = Flask(__name__, static_folder='.')

@app.route('/')
@app.route('/generate-character', methods=['POST'])

def serve_index():
    return send_from_directory('.', 'index.html')

def generate_character():
    preferences = request.json['preferences']
    
    prompt = f"Generate an unpleasant character based on the following preferences: {preferences}"
    response = openai.Completion.create(
        engine="text-davinci-002",
        prompt=prompt,
        max_tokens=150,
        n=1,
        stop=None,
        temperature=0.7,
    )

    character_text = response.choices[0].text.strip()

    character = {
        'text': character_text
    }
    print("Generated character:", character)
    return jsonify(character)


if __name__ == '__main__':
    app.run()
