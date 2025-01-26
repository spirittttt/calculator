var display = document.querySelector("#display")
var button = document.querySelectorAll(".button")
var click = new Audio("click.mp3")
var string = ""
button.forEach(function(btn){
    btn.addEventListener("click",function(e){
        click.play()
        if(e.target.innerHTML == '='){
            display.innerHTML = eval(string)
        }
        else if(e.target.innerHTML == 'C'){
            display.innerHTML = string = ""
        }
        else {
            string += e.target.innerHTML
            display.innerHTML = string
        }
    })
})