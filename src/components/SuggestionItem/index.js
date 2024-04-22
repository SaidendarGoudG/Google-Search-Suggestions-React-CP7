// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestions, updateSearchInput} = props
  const {suggestion} = suggestions

  const onClickSuggestion = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="suggestion-item-container">
      <p className="para">{suggestion}</p>
      <button
        className="arrow-button"
        onClick={onClickSuggestion}
        type="button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="enter-arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
