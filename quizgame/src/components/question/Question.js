import React, { Component } from 'react'
import { connect } from 'react-redux';
import ReactCountdownClock from 'react-countdown-clock'
import Swal from 'sweetalert2'
import { getQuestion } from '../../actions/questions'



class QuestionsList extends Component {

    state = {
        user_answer: '',

    }


    componentDidMount() {
        this.props.getQuestion()
        
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    evaluate = (user_answer, answer) => {
        console.log(user_answer)
        console.log(answer)
        if (user_answer === answer) {
            Swal.fire({
                position: 'inherit',
                type: 'success',
                title: 'your answer is correct ',
                showConfirmButton: false,
                timer: 1500
            })
            this.props.history.push('/')
        }
        else {
            Swal.fire({
                type: 'error',
                title: 'Error ',
                text: 'Your answer is wrong',
            })
            this.props.history.push('/')
        }


    }
    onSubmit = (e) => {
        e.preventDefault()
        this.evaluate(e.target['user_answer'].value, e.target['answer'].value)

    }

    render() {
        const { title, description, answer } = this.props.question
        if (title) {
            return (
                <div className='container'>
                    <h2 className='font-weight-bolder text-center'>{this.props.question.title}</h2>
                    <p className='lead text-center'>{description}</p>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Your answer</label>
                            <input
                                className="form-control"
                                type="text"
                                name="user_answer"
                                onChange={this.onChange}
                                value={this.state.user_answer}
                            />
                        </div>
                        <input
                            className="form-control"
                            type="hidden"
                            name="answer"
                            value={answer}
                        />
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">
                                Submit
                        </button>
                        </div>
                    </form>
                </div>
            )
        }
        else {
            return <h2 className='font-weight-bolder text-center'>add your question</h2>
        }
    }
}

const mapStateToProps = (state) => ({
    question: state.questionsReducer.question
})


export default connect(mapStateToProps, { getQuestion })(QuestionsList)

