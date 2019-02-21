import React,{Component} from "react"

class List extends Component{

    constructor(prpos){
        super(prpos)

        this.state = {
            msg:'',
            msg2:'',
        }
    }

    change = (e) => {
        let val = this.refs.msg.value;

        this.setState({
            msg:val
        })

    }
    inputChange = (e) =>{
        this.setState({
            msg2:e.target.value
        })
    }

    showDate = () =>{
        console.log(this.state.msg);
    }

    render(){
        return(
            <div>
                {/*<input ref="msg" type="text" onChange={this.change}/>
                <button onClick={this.showDate}>getInfo</button>
                <div>{this.state.msg}</div>
                <input type="text" value={this.state.msg2} onChange={this.inputChange}/>
                <div>{this.state.msg2}</div>


                <input type="text" defaultValue={this.state.msg2}/>*/}
            </div>
        )
    }
}

export default List;