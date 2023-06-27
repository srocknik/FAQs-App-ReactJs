// Write your code here.
import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  state = {btnClickedList: []}

  showTheAnswer = id => {
    const {btnClickedList} = this.state

    if (btnClickedList.includes(id) === true) {
      this.setState(prevState => ({
        btnClickedList: prevState.btnClickedList.filter(each => each !== id),
      }))
    } else {
      this.setState(prevState => ({
        btnClickedList: [...prevState.btnClickedList, id],
      }))
    }
  }

  render() {
    const {faqsList} = this.props
    const {btnClickedList} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">FAQs</h1>
          <ul className="list-container">
            {faqsList.map(eachItem => (
              <FaqItem
                listItem={eachItem}
                key={eachItem.id}
                showTheAnswer={this.showTheAnswer}
                btnClickedList={btnClickedList}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
