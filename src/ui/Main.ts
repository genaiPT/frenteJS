import Frente from "../FrenteJS/frente.js"




const _Main = (parentElement:HTMLElement) => {
const idMain = Frente.generateId()


    const _main = Frente.createElement(`
        <main id="${idMain}" class="max-w-screen-2xl flex max-h-screen flex-col gap-3 overflow-hidden 2xl:justify-center 2xl:items-center">
        </main>
    `,{parentElement})

  return {_main:_main.element, ids:{idMain}}
}

export default _Main
