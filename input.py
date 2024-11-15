from flask import Flask, request, jsonify

app = Flask(_name_)

# Sample recipe data
recipes = [
    {
        "id": 1,
        "name": "Spaghetti Bolognese",
        "ingredients": ["spaghetti", "ground beef", "tomato sauce", "onion", "garlic", "olive oil"],
        "instructions": "Cook the spaghetti. In a pan, cook the beef with onions and garlic. Add tomato sauce and simmer. Serve with spaghetti."
    },
    {
        "id": 2,
        "name": "Chicken Curry",
        "ingredients": ["chicken", "curry powder", "coconut milk", "onion", "garlic", "ginger"],
        "instructions": "Cook the onions, garlic, and ginger. Add chicken and curry powder. Pour coconut milk and simmer until chicken is cooked."
    },
    {
        "id": 3,
        "name": "Vegetable Stir Fry",
        "ingredients": ["broccoli", "carrot", "bell pepper", "soy sauce", "ginger", "garlic"],
        "instructions": "Stir fry vegetables with garlic and ginger. Add soy sauce and cook for another 2 minutes."
    }
]

@app.route('/recommend_recipe', methods=['GET'])
def recommend_recipe():
    # Get ingredients from query parameters
    user_ingredients = request.args.get('ingredients')
    if not user_ingredients:
        return jsonify({"error": "Please provide ingredients"}), 400

    user_ingredients = set(user_ingredients.split(','))
    matching_recipes = []

    # Find recipes that match the provided ingredients
    for recipe in recipes:
        recipe_ingredients = set(recipe['ingredients'])
        if user_ingredients & recipe_ingredients:
            matching_recipes.append(recipe)

    if not matching_recipes:
        return jsonify({"message": "No recipes found matching the provided ingredients."}), 404

    return jsonify({"recipes": matching_recipes})

if _name_ == '_main_':
    app.run(debug=True)