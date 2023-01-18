
function feladat01(szinek) {

    let keveresSzam = 0

    if (szinek.length === 0) {
        return keveresSzam
    }

    const n = szinek.length
    for (let i = 0; i < n - 1; i++) {
        keveresSzam += faktorialis(n) / (faktorialis(n-i) * faktorialis(i));
    }
    return keveresSzam;
}

function faktorialis(szam){
    let eredmeny = 1
    for (let i = 1; i <= szam; i++) {
        eredmeny *= i
    }
    return eredmeny
}
