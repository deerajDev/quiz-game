import React, { Component } from 'react'
import { connect } from 'react-redux'




class Form extends Component {

    state = {
        title: '',
        description: '',
        answer: '',

    }

    //on change of any of tags , this function will fire 
    onChange = e => this.setState({
        [e.target.name]: e.target.value
    })

    //on submit of the form, this function will fire
    onSubmit = e => {
        e.prventDefaults()
        console.log(this.state)


    }






    render() {
        const { title, description, answer } = this.state
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Add question</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input
                            className="form-control"
                            type="text"
                            name="title"
                            onChange={this.onChange}
                            value={title}
                        />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <input
                            className="form-control"
                            type="text"
                            name="description"
                            onChange={this.onChange}
                            value={description}
                        />
                    </div>
                    <div className="form-group">
                        <label>Answer</label>
                        <textarea
                            className="form-control"
                            type="text"
                            name="answer"
                            onChange={this.onChange}
                            value={answer}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Post the question
            </button>
                    </div>
                </form>
            </div>
        )
    }
}



export default Form
