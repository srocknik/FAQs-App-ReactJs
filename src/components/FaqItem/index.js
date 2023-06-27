// Write your code here.
import './index.css'

const FaqItem = props => {
  const {listItem, showTheAnswer, btnClickedList} = props
  const {id, questionText, answerText} = listItem

  const onHavingTheAnswer = () => {
    showTheAnswer(id)
  }
  return (
    <li className="list-item-container">
      <div className="que-img-container">
        <h1 className="question">{questionText}</h1>
        <button type="button" className="btn" onClick={onHavingTheAnswer}>
          <img
            className="image"
            src={
              btnClickedList.includes(id)
                ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
            }
            alt={btnClickedList.includes(id) ? 'minus' : 'plus'}
          />
        </button>
      </div>
      {btnClickedList.includes(id) ? (
        <div className="ans-container">
          <hr className="line-brk" />
          <p className="desc-text">{answerText}</p>
        </div>
      ) : null}
    </li>
  )
}

export default FaqItem
