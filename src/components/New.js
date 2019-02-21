import React, {Component} from "react"

class New extends Component {


    constructor(props){
        super(props)

        this.state = {
            msg:"new Title",
            msgData:[],
            giftData:[],
            url:'',
            value:'',
            name:'',

            willDo:'',

            todoList:[],

            downList:[]
        }
    }

    run = (event) => {
        console.log(event.target);
        console.log(event.target.getAttribute("aid"));

        event.target.style.background = "#a1e4ef"
    }

    change = (e) => {
        this.setState({
            url:e.target.value
        })
    }

    showDate = () =>{
        console.log(this.state.data);
    }

    startUrl = () =>{

        let ws = new WebSocket('ws://192.168.0.222:7005/barrage-server/websocket');

        ws.onopen = () => {
            console.log('打开连接');
            ws.send(this.state.url);

            setInterval(()=>{
                ws.send("ping");
            },10000);
        };

        ws.onmessage = (evt) => {
            let data = evt.data.split('/');
            let oneMsg  = {};

            for (let i = 0;i<data.length;i++){
                let msg = data[i].split('@=');
                oneMsg[msg[0]] = msg[1];
            }
            /*判断是否是用户发言*/
            if(oneMsg.type === "chatmsg"){
               if(this.state.msgData.length>19){
                    let oldMsgData = this.state.msgData;
                    oldMsgData.splice(0,1);

                    this.setState(()=>({
                        msgData:oldMsgData
                    }))
                }
                this.setState((preState)=>({

                    msgData:preState.msgData.concat(oneMsg)

                }))
            }

        };

        ws.onclose = (evt) => {
            console.log('连接关闭!');

        };

        ws.onerror = (evt) => {

            console.log('连接错误!');

        };
    }

    changeTest = (key,value) =>{
        console.log(key,value);
    }
    handelName = (e) =>{
        this.setState({
            name:e.target.value
        })
    }
    handleWillDo = (e) =>{
        this.setState({
            willDo:e.target.value
        })
    }
    addToDoList = () =>{
        this.state.todoList.unshift(this.state.willDo);
        this.setState({
            willDo:""
        })
    }

    finishThis = (key) =>{
        let newTodoList = this.state.todoList;
        let newDownList = this.state.downList;

        let finishOne = newTodoList.splice(key,1);
        newDownList.unshift(finishOne);

        this.setState({
            todoList:newTodoList,
            downList:newDownList
        })
    }

    deleteThis = (key) =>{
        let newTodoList = this.state.todoList;
        newTodoList.splice(key,1);
        this.setState({
            todoList:newTodoList
        })
    }

    unFinishThis = (key) =>{
        let newTodoList = this.state.todoList;
        let newDownList = this.state.downList;

        let unFinishOne = newDownList.splice(key,1);
        newTodoList.unshift(unFinishOne);

        this.setState({
            todoList:newTodoList,
            downList:newDownList
        })
    }

    deleteDownThis = (key) =>{
        let newDownList = this.state.downList;
        newDownList.splice(key,1);
        this.setState({
            downList:newDownList
        })
    }
    render(){
        let listResult = this.state.msgData.map ((value,key) => {
            return <li key={key}>{value.nn} ：{value.txt}</li>
        });
        return(
            <div>
                code：<input type="text" onChange={this.change}/>
                <button onClick={this.startUrl}>get Info</button>
                <div>
                    {listResult}
                </div>

                <button aid="testAid" onClick={this.run}>click</button>

                <input
                    type="text"
                    value={this.state.value}
                    onChange={(e) => {
                        this.setState({
                            value: e.target.value.toUpperCase(),
                        });
                    }}
                />

                <input
                    type="text"
                    defaultValue={this.state.value}
                    onChange={(e) => {
                        this.setState({
                            value: e.target.value.toUpperCase(),
                        });
                    }}
                />

                <button onChange={this.changeTest}>testChange</button>

                <input type="text" value={this.state.name} onChange={this.handelName}/>
                {this.state.name}
                <br/>
                <input type="text" value={this.state.willDo} onChange={this.handleWillDo} />
                <button onClick={this.addToDoList}>add</button>
                <br/>
                未完成
                {
                    this.state.todoList.map((value,key)=>{
                        return <li key={key}><button onClick={this.finishThis.bind(this,key)}>完成</button>{key}、{value} <button onClick={this.deleteThis.bind(this,key)}>删除</button></li>
                    })
                }

                <hr/>
                已完成
                {
                    this.state.downList.map((value,key)=>{
                        return <li key={key}><button onClick={this.unFinishThis.bind(this,key)}>取消完成</button>{key}、{value} <button onClick={this.deleteDownThis.bind(this,key)}>删除</button></li>
                    })
                }
            </div>
        )
    }

}


export default New