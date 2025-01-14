const num_one=document.querySelector(".number_one");
const num_two=document.querySelector(".number_two");
const num_three=document.querySelector(".number_three");
const num_four=document.querySelector(".number_four");
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function count() {
    for (let i = 1; i < 7111; i++) {
        if (i <= 1287) {
            num_one.innerText = i + "+";
        }
        if(i<=5786){
            num_two.innerText = i + "+";
        }
        if(i<=1440){
            num_three.innerText = i + "+";
        }
        if(i<=7110){
            num_four.innerText = i + "+";
        }
        await delay();
    }
}
// count();    


