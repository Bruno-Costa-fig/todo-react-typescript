import { useState } from 'react'
import * as C from './App.styles'
import { Item } from './types/item'
import { ListItem } from './components/ListItem'
import { AddArea } from './components/AddArea'

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Comprar pão na padaria", done: false },
    { id: 2, name: "Comprar bolo na padaria", done: true }
  ])

  // temos que criar uma função que receba o valor de dentro do componente
  // AppArea para pode renderiza-lo no ListItem
  const handleAddTasks = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });
    setList(newList)
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        {/* Área de adicionar nova tarefa */}
        <AddArea onEnter={handleAddTasks} />

        {/* Área de renderizar os componentes */}
        {list.map((item, index) => (
          <ListItem key={index} item={item}/>
        ))}

        {/* obs: Aqui quando eu criei o ListItem acima apareceu um erro, e eu
        pensei que era porque a prop item não tinha tipo. Mas na verdade
        o erro era porque o ListItem ainda não estava recebendo a prop, e
        dava erro como se o item não fosse necessário. */}
      </C.Area>
    </C.Container>
  );
}

export default App;