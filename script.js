const inputs = document.querySelectorAll(".input")
const button = document.querySelector("button")

button.onmousedown = (e) =>{
    inputs.forEach(input =>{
        if(input.children[0].value === ""){
            button.onclick = e =>{
                e.preventDefault()
            }

            input.children[0].style.cssText = "background-image: url(./assets/icon-error.svg); border: 1px solid var(--red); color: var(--red);"

            input.children[1].style.cssText = "display: block"
        } else{
            button.onclick = e =>{}

            input.children[0].style.cssText = "background-image: none; border: 1px solid var(--Grayish-blue); color: var(--Dark-blue);"

            input.children[1].style.cssText = "display: none"
        }
    })
}