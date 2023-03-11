for (let i = 1; i <= 100; i++) {
    const cont = document.querySelector(".container-lg");
    if (i % 15 === 0) {
        cont.innerHTML += `<div class="m-3 dc-square dc-fizzbuzz ">FizzBuzz</div>`;
        console.log("FizzBuzz");
    }

    else if (i % 5 === 0) {
        cont.innerHTML += `<div class="m-3 dc-square dc-buzz">Buzz</div>`;
        console.log("Buzz");
    }

    else if (i % 3 === 0) {
        cont.innerHTML += `<div class="m-3 dc-square dc-fizz">Fizz</div>`;
        console.log("Fizz");
    }

    else {
        cont.innerHTML += `<div class="m-3 dc-square">${i}</div>`;
        console.log(i);
    }
}