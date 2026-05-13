// 1  целзиус во фаренхајт
function celsiusToFahrenheit(c)
{
    return (c * 9 / 5) + 32;
}
console.log(celsiusToFahrenheit(30));
// 2 фаренхајт во целзиус
function fahrenheitToCelsius(f)
{
    return (f - 32) * 5 / 9;
}
console.log(fahrenheitToCelsius(23));
// 3 стапки во метри
function feetToMetres(feet)
{
    return feet * 0.3048;
}
console.log(feetToMetres(100));
// 4  креирај објект кој опишува книга
const kniga = {
    naslov: "Harry Potter and the Sorcerer's Stone",
    avtor: "J. K. Rowling",
    godina: 2001,
    zanr: "Fantasy",
    rating: 7.7
}
console.log(kniga);
console.log(kniga.naslov);
console.log(kniga.avtor);
console.log(kniga.godina);
console.log(kniga.zanr);
console.log(kniga.rating);
// 5 креирај објект кој опишува автомобил
const avtomobil = {
    marka: "Toyota",
    model: "C-HR",
    godina: 2024
}
console.log(avtomobil);
console.log(avtomobil.marka);
console.log(avtomobil.model);
console.log(avtomobil.godina);
// 6 креирај објект кој опишува студент
const student = {
    ime: "Marija",
    prezime: "Petkova",
    godina: 4,
    smer: "Kompjuterska tehnika i avtomatika"
}
console.log(student);
console.log(student.ime);
console.log(student.prezime);
console.log(student.godina);
console.log(student.smer);
// 7 - циклус за печатење на секој втор непарен број од 1 до 100
for (let i = 1; i <= 100; i += 4)
{
    console.log(i);
}
// 8 - циклус за печатење на секој непарен број од 1 до 50
for (let i = 1; i <= 50; i += 2)
{
    console.log(i);
}
// 9 - креирај низа од 5 елементи (градови)
const gradovi = ["Rim", "Madrid", "Milano", "Barcelona", "Amsterdam"];
console.log(gradovi);
// 10 - креирај низа од 10 елементи (држави)
const drzavi = ["Spanija", "Italija", "Holandija", "Danska", "Norveska", "Finska", "Svedska", "Francija", "Belgija", "Avstrija"];
console.log(drzavi);
// 11 - итерирај нзиа со помош на for
for (let i = 0; i < gradovi.length; i++) 
{
    console.log(gradovi[i]);
}
// 12 - повикување на принт функција за објект внатре во for ciklus
function pecatiKniga(kniga) 
{
    console.log(kniga.naslov + " - " + kniga.avtor);
} for (let i = 0; i < 3; i++) 
{
    pecatiKniga(kniga);
}
