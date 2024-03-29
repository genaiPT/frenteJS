import Frente from "../../FrenteJS/frente.js"


const _Logo = (parentElement:HTMLElement) => {
    const idLogo = Frente.generateId()

    const logo = Frente.createElement(`
    <div id="${idLogo}" class="w-[40px] h-auto flex items-center justify-center ">
    <img src="assets/logo.png" width="40"  alt="Logo" >
    </div>
    `, {parentElement})
  return logo
}

export default _Logo