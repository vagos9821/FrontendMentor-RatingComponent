function ratingsButton1() {
    let r1click = document.getElementById("r1")
    let r2click = document.getElementById("r2")
    let r3click = document.getElementById("r3")
    let r4click = document.getElementById("r4")
    let r5click = document.getElementById("r5")
    r1click.classList.add("checked")
    r2click.classList.remove("checked")
    r3click.classList.remove("checked")
    r4click.classList.remove("checked")
    r5click.classList.remove("checked")
}

function ratingsButton2() {
    let r1click = document.getElementById("r1")
    let r2click = document.getElementById("r2")
    let r3click = document.getElementById("r3")
    let r4click = document.getElementById("r4")
    let r5click = document.getElementById("r5")
    r2click.classList.add("checked")
    r1click.classList.remove("checked")
    r3click.classList.remove("checked")
    r4click.classList.remove("checked")
    r5click.classList.remove("checked")
}

function ratingsButton3() {
    let r1click = document.getElementById("r1")
    let r2click = document.getElementById("r2")
    let r3click = document.getElementById("r3")
    let r4click = document.getElementById("r4")
    let r5click = document.getElementById("r5")
    r3click.classList.add("checked")
    r2click.classList.remove("checked")
    r1click.classList.remove("checked")
    r4click.classList.remove("checked")
    r5click.classList.remove("checked")
}

function ratingsButton4() {
    let r1click = document.getElementById("r1")
    let r2click = document.getElementById("r2")
    let r3click = document.getElementById("r3")
    let r4click = document.getElementById("r4")
    let r5click = document.getElementById("r5")
    r4click.classList.add("checked")
    r2click.classList.remove("checked")
    r3click.classList.remove("checked")
    r1click.classList.remove("checked")
    r5click.classList.remove("checked")
}

function ratingsButton5() {
    let r1click = document.getElementById("r1")
    let r2click = document.getElementById("r2")
    let r3click = document.getElementById("r3")
    let r4click = document.getElementById("r4")
    let r5click = document.getElementById("r5")
    r5click.classList.add("checked")
    r2click.classList.remove("checked")
    r3click.classList.remove("checked")
    r4click.classList.remove("checked")
    r1click.classList.remove("checked")
}


function submitButton() {
    let r1 = document.getElementById("r1").classList.contains("checked")
    let r2 = document.getElementById("r2").classList.contains("checked")
    let r3 = document.getElementById("r3").classList.contains("checked")
    let r4 = document.getElementById("r4").classList.contains("checked")
    let r5 = document.getElementById("r5").classList.contains("checked")
    if (r1 == true | r2 == true | r3 == true | r4 == true | r5 == true) {
        document.getElementById("card").style = "height:0px; opacity:0%;z-index:-1; padding:0px"
        document.getElementById("thanks").style = "padding:1.5em; height:400px; opacity:100%; z-index:4"
    }
    if (r1 == true) {
        document.getElementById("selection").innerHTML = "You selected 1 out of 5"
    }
    if (r2 == true) {
        document.getElementById("selection").innerHTML = "You selected 2 out of 5"
    }
    if (r3 == true) {
        document.getElementById("selection").innerHTML = "You selected 3 out of 5"
    }
    if (r4 == true) {
        document.getElementById("selection").innerHTML = "You selected 4 out of 5"
    }
    if (r5 == true) {
        document.getElementById("selection").innerHTML = "You selected 5 out of 5"
    }
}