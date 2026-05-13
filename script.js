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