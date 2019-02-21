import React, {Component} from 'react';

class Form extends Component {
    constructor(prpos) {
        super(prpos)

        this.state = {
            title: ''
        };
    }

    render() {
        return (
            <div>
                <span>{this.state.title}</span>

                <form action="">
                    <input type="text"/>
                </form>
            </div>
        )
    }

}

export default Form