
const TextInput = ({ hint, value, setValue, onPressEnter }) => {
  // Isolamento do componente que trata da entrada de texto
  return (
    <input
      id='text-input'
      placeholder={hint}
      value={value}
      onChange={e => setValue(e.target.value)}
      onKeyDown={e => (e.key === 'Enter') ? onPressEnter(e.target.value) : null} />
  )
}

export default TextInput;