import {useState, KeyboardEvent} from 'react'
import * as C from './styles'

type Props = {
    onEnter: (taskName: string) => void;
}

export const AddArea = ({onEnter}: Props) => {
    const [inputText, setInputText] = useState('')

    // usamos p KeyboardEvent para monitorar as teclas do teclado,
    // por isso o e recebe esse tipo 
    const handleKeyUp = (e: KeyboardEvent) => {
        if((e.code === 'Enter' || e.code === 'NumpadEnter') && inputText !== ''){
            onEnter(inputText)
            setInputText('')
        }
        console.log(e.code)
    }

    return (
        <C.Container>
            <div className="image">➕</div>
            <input 
                type="text" 
                placeholder="Adicione uma tarefa" 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
            />
        </C.Container>
    )
}