<<<<<<< HEAD
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
=======
// 1. if/else Flows
// 1. Dali brojot e pozitiven, negativen ili nula
let broj = 10;
if (broj > 0)
{
    console.log("Pozitiven")
} else if (broj < 0)
{
    console.log("Negativen")
} else
{
    console.log("Nula")
}
// 2. Dali moze da glasa
let vozrast = 18;
if (vozrast >= 18)
{
    console.log("Moze da glasa")
} else if (vozrast < 18)
{
    console.log("Nemoze da glasa")
}
// 3. Ocena
let ocena = 50; 
if (ocena >= 89)
{
    console.log("Odlicen")
} else if (ocena >= 74)
{
    console.log("Dobar")
}else if (ocena >= 60)
{
    console.log("Dovolen")
} else 
{
    console.log("Padnal")
}
// 4. Sezona spored mesec
let mesec = 1;
if (mesec >= 3 && mesec <= 5)
{
    console.log("Prolet")
} else if (mesec >= 6 && mesec <=8)
{
    console.log("Leto")
} else if (mesec >=9 && mesec <=11)
{
    console.log("Esen")
} else
{
    console.log("Zima")
}
// 5. Toplo ili ne 
let temperatura = 35;
if (temperatura >= 30)
{
    console.log("Toplo e, izlezi nadvor.")
}else
{
    console.log("Ne e toplo, ostani doma.")
}
// 2 switch / ocenka
let ocenka = 5;
switch(ocenka)
{
    case 1: console.log("Neuspesno");
    break;
    case 2: console.log("Slabo");
    break;
    case 3: console.log("Dobro");
    break;
    case 4: console.log("Mnogu dobro");
    break;
    case 5: console.log("Odlicno");
    break;
    default: console.log("Nevalidna ocena");
    break;
}
// 3 - x deliv so y
let x = 20;
let y = 10;
console.log(x / y);
// 4 - paren ili neparen broj
let brojce = 8;
if (brojce % 2 == 0)
{
    console.log("Brojot e paren")
}else 
{ 
    console.log("Brojot ne e paren")
}
//5 zbir, razlika i proizvod na 2 broja
let a = 7;
let b = 3;
console.log(a + b);
console.log(a - b);
console.log(a * b);
>>>>>>> 454964e2179bada218e5fe6cf9cab2af2ee40963
