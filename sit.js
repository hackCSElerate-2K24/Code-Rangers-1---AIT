document.getElementById('search-btn').addEventListener('click', function() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const recommendations = [
        'Spaghetti Bolognese',
        'Chicken Alfredo',
        'Beef Tacos',
        'Vegetarian Salad',
        'Apple Pie',
        'Grilled Salmon'
    ];

    const filteredRecommendations = recommendations.filter(recipe => 
        recipe.toLowerCase().includes(query)
    );

    displayRecommendations(filteredRecommendations);
});

function displayRecommendations(recipes) {
    const recommendationsDiv = document.getElementById('recommendations');
    recommendationsDiv.innerHTML = '';  // Clear previous results

    if (recipes.length > 0) {
        recipes.forEach(recipe => {
            const recipeDiv = document.createElement('div');
            recipeDiv.classList.add('recommendation-item');
            recipeDiv.textContent = recipe;
            recommendationsDiv.appendChild(recipeDiv);
        });
    } else {
        recommendationsDiv.textContent = 'No recipes found.';
    }
}
