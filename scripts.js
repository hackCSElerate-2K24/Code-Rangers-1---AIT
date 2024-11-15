// Example of dynamically loading recipes
const recipesSection = document.getElementById('recipes');

// Dummy data (replace with actual API call)
const recipes = [
    { title: 'Pasta Carbonara', description: 'Delicious Italian pasta with creamy sauce.' },
    { title: 'Chicken Stir-Fry', description: 'Healthy and quick Asian stir-fry recipe.' },
    { title: 'Palak Paneer', description: 'Palak Paneer contains 194 calories per 200 g serving.' },
    { title: 'Apple pomegranate oats',description:'Calories: 234. Protein: 4.7 grams (g)'},
    { title: 'Lemon pepper salmon',description:'its high in omega-3 fatty acids'},
    { title: 'Vermicelli noodles',description: 'Per cent Daily Values are based on a 2,000 calorie diet'},
    { title: 'Poha',description:'Poha is made by parboiling paddy'},
    { title: 'Rava Dosa',description:' It gives 116 calories.'}
];

// Display recipes
recipes.forEach(recipe => {
    const recipeCard = document.createElement('div');
    recipeCard.classList.add('recipe-card');
    recipeCard.innerHTML = `
        <h2>${recipe.title}</h2>
        <p>${recipe.description}</p>
    `;
    recipesSection.appendChild(recipeCard);
});