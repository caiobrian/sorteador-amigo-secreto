import { useRef, useState } from 'react'
import { useAddParticipant } from 'state/participants/hooks/useAddParticipant'
import { useErrorMessage } from 'state/participants/hooks/useErrorMessage'

function generateRandomId() {
  return Math.floor(Math.random() * 1000000)
}

export const Form = () => {
  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const { addParticipant } = useAddParticipant()
  const errorMessage = useErrorMessage()

  const handleAddParticipant = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    addParticipant({
      name: inputValue,
      id: generateRandomId()
    })
    setInputValue('')
    inputRef.current?.focus()
  }

  return (
    <form onSubmit={handleAddParticipant}>
      <input
        ref={inputRef}
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        type="text"
        placeholder="Insira os nomes dos participantes"
      />

      {errorMessage && <p role="alert">{errorMessage}</p>}

      <button type="submit" disabled={!inputValue}>
        Adicionar
      </button>
    </form>
  )
}
