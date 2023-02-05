let banco = []

const getBanco = () => JSON.parse(localStorage.getItem("historyList")) ?? []
const setBanco = (banco) => localStorage.setItem("historyList", JSON.stringify(banco))

//criar Item
const criarItem = (tarefa, indice, valor) => {
  const item = document.createElement("label")
  item.innerHTML = `
        <details>
          <summary>
            <h2> Dentes Retos </h2>
            <span id="data"></span>
            <input type="button" value="X" data-indice=${indice}> 
          </summary>

          <table>
              <thead>
                  <th>Formulas</th>
                  <th>Coroa</th>
                  <th>pinhao</th>
              </thead>
              <tbody>
                  <tr>
                      <td>Diametro Externo</td>
                      <td>${valor}</td>
                      <td>${tarefa}</td>
                  </tr>
              </tbody>
          </table>
      </details>
    `
  document.getElementById("historyList").appendChild(item)
}

//Limpar tarefas
const limparTarefas = () => {
  const todoList = document.getElementById("historyList")
  while (todoList.firstChild) {
    todoList.removeChild(todoList.lastChild)
  }
}

//teste
const Dentes = {
  diametro: 12
}

//atualiazar tela
const atualizarTela = () => {
  limparTarefas()
  const banco = getBanco()
  banco.forEach((item, indice) => criarItem(item.tarefa, indice, Dentes.diametro))
}

// botão de adicionar
const inserirItem = (evento) => {
  const tecla = evento.key
  const texto = evento.target.value
  if (tecla === "Enter") {
    const banco = getBanco()
    banco.push({ tarefa: texto })
    setBanco(banco)
    atualizarTela()
    evento.target.value = ""
  }
}

//remove o item
const removerItem = (indice) => {
  const banco = getBanco()
  banco.splice(indice, 1)
  setBanco(banco)
  atualizarTela()
}

const clickItem = (evento) => {
  const elemento = evento.target
  console.log(elemento.type)
  if (elemento.type === "button") {
    const indice = elemento.dataset.indice
    removerItem(indice)
  } else if (elemento.type === "checkbox") {
    const indice = elemento.dataset.indice
    atualizarItem(indice)
  }
}

document.getElementById("newItem").addEventListener("keypress", inserirItem)
document.getElementById("historyList").addEventListener("click", clickItem)

atualizarTela()







// <input type="checkbox" ${status} data-indice=${indice}>
        // <div>${tarefa}</div> 
        // <input type="button" value="lixo" data-indice=${indice}>


// const history = {
    //       dametroExterno1: formulas.Dentes.diametroExterno.coroa(),
    //       dametroExterno2: formulas.Dentes.diametroExterno.pinhao(),

    //       diametroPrimitivo1: formulas.Dentes.diametroPrimitivo.coroa(),
    //       diametroPrimitivo2: formulas.Dentes.diametroPrimitivo.pinhao(),

    //       diametroInterno1: formulas.Dentes.diametroInterno.coroa(),
    //       diametroInterno2: formulas.Dentes.diametroInterno.pinhao(),

    //       diametroBase1: formulas.Dentes.diametroBase.coroa(),
    //       diametroBase2: formulas.Dentes.diametroBase.pinhao(),

    //       Cubo1: formulas.Dentes.diametroCubo.coroa(),
    //       Cubo2: formulas.Dentes.diametroCubo.pinhao(),

    //       comprimentoCubo1:  formulas.Dentes.comprimentoCubo.coroa(),
    //       comprimentoCubo2: formulas.Dentes.comprimentoCubo.pinhao(),

    //       folga: formulas.Dentes.folgaDente(),

    //       distanciaCentro: formulas.Dentes.distanciaCentros(),

    //       passo: formulas.Dentes.passo(),

    //       reforco: formulas.Dentes.reforco(),

    //       corpoRoda: formulas.Dentes.corpoRoda(),

    //       comprimentoDente: formulas.Dentes.comprimentoDente(),

    //       alturaDente: formulas.Dentes.alturaDente(),

    //       expessura: formulas.Dentes.expessura()
    //     }
        

          
           

       
    //       let historico = `
      //     <details>
      //     <summary>Dentes Reetos<span id="data"></span></h2></summary>
      //     <table>
      //         <thead>
      //             <th>Formulas</th>
      //             <th>Coroa</th>
      //             <th>pinhao</th>
      //         </thead>
      //         <tbody>
      //             <tr>
      //                 <td>Diametro Externo</td>
      //                 <td>${history.dametroExterno1}</td>
      //                 <td>${history.dametroExterno2}</td>
      //             </tr>
      //             <tr>
      //                 <td>Diametro Primitivo</td>
      //                 <td>${history.diametroPrimitivo1}</td>
      //                 <td>${history.diametroPrimitivo2}</td>
      //             </tr>
      //             <tr>
      //                 <td>Diametro de base</td>
      //                 <td></td>
      //                 <td></td>
      //             </tr>
      //             <tr>
      //                 <td>Diametro Interno</td>
      //                 <td></td>
      //                 <td></td>
      //             </tr>
      //             <tr>
      //                 <td>Cubo</td>
      //                 <td></td>
      //                 <td></td>
      //             </tr>
      //             <tr>
      //                 <td>Comprimento do Cubo</td>
      //                 <td></td>
      //                 <td></td>
      //             </tr>
      //             <tr>
      //                 <td><hr></td>
      //                 <td><hr></td>
      //                 <td><hr></td>
      //             </tr>
      //             <tr>
      //                 <td>Distancia entre Centros</td>
      //                 <td></td>
      //             </tr>
      //             <tr>
      //                 <td>Folga do Dentes</td>
      //                 <td></td>
      //             </tr>
      //             <tr>
      //                 <td>Altura do dente</td>
      //                 <td></td>
      //             </tr>
      //             <tr>
      //                 <td>Passo</td>
      //                 <td></td>
      //             </tr>
      //             <tr>
      //                 <td>Reforço</td>
      //                 <td></td>
      //             </tr>
      //             <tr>
      //                 <td>comprimento do dente</td>
      //                 <td></td>
      //             </tr>
      //             <tr>
      //                 <td>Corpo da chaveta</td>
      //                 <td></td>
      //             </tr>
      //             <tr>
      //                 <td>Espessura</td>
      //                 <td></td>
      //             </tr>

      //         </tbody>
      //     </table>
      // </details>
    //       `