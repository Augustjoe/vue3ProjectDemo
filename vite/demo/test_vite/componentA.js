import componentA from "./componentA.module.css"
import "./index.module.less"

console.log(componentA)
const div = document.createElement("div")

document.body.appendChild(div)

div.className = componentA.footer