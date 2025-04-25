document.getElementById("year").innerHTML = new Date().getFullYear();


// Progress bar taken from W3 Schools tutorial
// Author: W3 Schools
// Publication Date: not specificed
// Title: W3.CSS Progress Bars
// Code version: not specified
// Type: javascript
// Availability: https://www.w3schools.com/w3css/w3css_progressbar.asp


const countriesRead = 37;
const totalCountries = 195;

document.getElementById("count").textContent = countriesRead;
document.getElementById("progress-bar").style.width = `${(countriesRead / totalCountries) * 100}%`;

// country selector
// Source code
// Author: Jwahir Sundai
// Publication Date: Navigator. 30 2020
// Title: Lots of Ways to Use Math.random() in JavaScript
// Code Version: not specified
// Type: javascript
// URL: https://css-tricks.com/lots-of-ways-to-use-math-random-in-javascript/

const countries = ["Japan", "Brazil", "France", "Nigeria", "Turkey", "Mexico", "India", "China", "Russia", "Germany", "Italy", "Spain", "United States", "Canada", "Australia", "South Africa", "Argentina", "Egypt", "Greece", "Sweden", "Norway", "Finland", "Denmark", "Poland", "Czech Republic", "Hungary", "Portugal", "Netherlands", "Belgium", "Switzerland", "Austria", "Ireland", "Scotland", "Wales", "Iceland", "New Zealand", "Thailand", "Vietnam", "Indonesia", "Malaysia", "Philippines", "Singapore", "South Korea", "Taiwan", "Algeria", "Morocco", "Tunisia", "Kenya", "Uganda", "Zimbabwe", "Ghana", "Cameroon", "Senegal", "Mali", "Ivory Coast", "Sierra Leone", "Liberia", "Togo", "Benin", "Burkina Faso", "Niger", "Chad", "Sudan", "South Sudan", "Ethiopia", "Somalia", "Djibouti", "Eritrea", "Rwanda", "Burundi", "Malawi", "Zambia", "Angola", "Namibia", "Botswana", "Swaziland", "Lesotho", "Seychelles", "Mauritius", "Madagascar", "Comoros", "Cape Verde", "Gambia", "Guinea-Bissau", "Sao Tome and Principe", "Central African Republic", "Republic of the Congo", "Democratic Republic of the Congo", "Gabon", "Equatorial Guinea", "Sierra Leone", "Liberia", "Mauritania", "Western Sahara", "Libya", "Tunisia", "Algeria", "Morocco", "Egypt", "Sudan", "South Sudan", "Eritrea", "Djibouti", "Somalia", "Kenya", "Uganda", "Tanzania", "Rwanda", "Burundi", "Malawi", "Zambia", "Angola", "Namibia", "Botswana", "Zimbabwe", "Mozambique", "Madagascar", "Comoros", "Seychelles", "Mauritius", "Cape Verde", "Gambia", "Guinea-Bissau", "Sao Tome and Principe", "Central African Republic", "Republic of the Congo", "Democratic Republic of the Congo", "Gabon", "Equatorial Guinea", "Cameroon", "Chad", "Niger", "Nigeria", "Benin", "Togo", "Burkina Faso", "Mali", "Ivory Coast", "Ghana", "Liberia", "Sierra Leone", "Guinea", "Guinea-Bissau", "Senegal", "The Gambia", "Cape Verde", "Mauritania", "Western Sahara", "Morocco", "Algeria", "Tunisia", "Libya", "Egypt", "Sudan", "South Sudan", "Eritrea", "Djibouti", "Somalia", "Kenya", "Uganda", "Tanzania", "Rwanda", "Burundi", "Malawi", "Zambia", "Angola", "Namibia", "Botswana", "Zimbabwe", "Mozambique", "Madagascar", "Comoros", "Seychelles", "Mauritius", "Cape Verde", "Gambia", "Guinea-Bissau", "Sao Tome and Principe", "Central African Republic", "Republic of the Congo", "Democratic Republic of the Congo", "Gabon", "Equatorial Guinea", "Cameroon", "Chad", "Niger", "Nigeria", "Benin", "Togo", "Burkina Faso", "Mali", "Ivory Coast", "Ghana", "Liberia", "Sierra Leone", "Guinea", "Palestine"];
document.getElementById("country-button").addEventListener("click", suggestCountry);

function suggestCountry() {
  const randomIndex = Math.floor(Math.random() * countries.length);
  const chosen = countries[randomIndex];
  document.getElementById("country-output").textContent = `Try reading a book from ${chosen}!`;
}

