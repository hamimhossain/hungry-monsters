const searchMeals = () =>{
    const searchText = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=` + searchText
    // load data
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}

const displayMeals = meals => {
    const mealContainer = document.getElementById('meal-container');

    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.className = "meal-div"
        // mealDiv.innerText = meal.strMeal;
        const mealInfo = `
             <h3 class="meal-name">${meal.strMeal}</h3>
             <button onclick="displayMealDetail('${meal.strMeal}')">Details</button>
        
        `
        mealDiv.innerHTML = mealInfo;
        mealContainer.appendChild(mealDiv);

    });
}

const displayMealDetail = (name) => {

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => renderMealInfo(data.meals[0]));
  
}

const renderMealInfo = meal => {
    console.log(meal);
    const mealDiv = document.getElementById('meal-detail');
    mealDiv.innerHTML =`
        <h3 class='meal-name'>${meal.strMeal}</h3>
        <h4>Ingredients</h4> 
        <li>${meal.strIngredient1}</li> 
        <li>${meal.strIngredient2}</li> 
        <li>${meal.strIngredient3}</li> 
        <li>${meal.strIngredient4}</li> 
        <li>${meal.strIngredient5}</li> 
        <li>${meal.strIngredient6}</li> 
        <li>${meal.strIngredient7}</li> 
        <li>${meal.strIngredient8}</li> 
        <li>${meal.strIngredient9}</li> 
        <li>${meal.strIngredient10}</li> 
    `

      
}