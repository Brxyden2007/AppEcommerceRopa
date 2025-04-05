const productList = [
    "Dress Yellow", // Clothes Recomended In The Search Bar
    "Dark Clothes",
    "Light Dress Bless",
    "Modern Light Clothes"
];

const resultBox = document.querySelector(".results"); // Results
const inputBox = document.querySelector(".search-bar"); // Search Bar

const displayResults = function (results) { // Function to Display Results
    if (results.length === 0) { // If there are no results
        resultBox.innerHTML = ''; // Clear the results box
        return; // Exit the function
    }  
    
    const resultHTML = results.map(function (product) { // Loop through each product
        return `<li onclick="selectInput(this)">${product}</li>`; // Create a list item for each product
    });
    
    resultBox.innerHTML = '<ul>' + resultHTML.join('') + '</ul>'; // Display the results
}

inputBox.onkeyup = function (e) { // When the user types something in the search bar
    let result = []; // Create an empty array to store the results
    const input = inputBox.value.toLowerCase(); // Get the user's input and convert it to lowercase

    if (input.length === 0) { // If the user hasn't typed anything
        resultBox.innerHTML = ''; // Clear the results box
        resultBox.style.display = 'none'; // Hide the results box
        return; // Exit the function
    }

    result = productList.filter((product) => { // Loop through each product in the product list
        return product.toLowerCase().includes(input); // If the product's name includes the user's input, add it to the results array
    }); // Filter the products to only include those that match the user's input
 
    if (result.length > 0) { // If there are results
        resultBox.style.display = 'block'; // Show the results box
        displayResults(result); // Display the results
    } else { // If there are no results
        resultBox.style.display = 'none'; // Hide the results box
    }
}
 
function selectInput(element) { // Function to select the input
    inputBox.value = element.innerText; // Set the search bar to the selected product's name
    resultBox.style.display = 'none'; // Hide the results box
}