import React, {Component} from "react"


class Home extends Component {

    constructor(props) {

        super(props)

        this.state = {
            msg: 'msg-2018年11月20日16:12:19',
            title: '123-2018年11月20日16:17:09',
            red: 'red',
            list: ['123', '234', '3546', '4657'],
            list2: [<h1 key="1">13123</h1>, <h2 key="2">1231231233245</h2>],
            list3: [
                {title: '123'},
                {title: '2435'},
                {title: '567'},
                {title: '6798'}
            ],
            name:'nam,qwe'
        }
        this.getData3 = this.getData3.bind(this);
    }

    run() {
        alert("run time");
    }

    getData = () => {
        alert(this.state.title);
    }

    getData2() {
        alert(this.state.title);
    }

    getData3() {
        alert(this.state.title);
    }

    setData = (abc) => {
        this.setState({
            title: abc
        })
    }

    getName = () =>{
        alert(this.state.name);
    }

    getData4 = () =>{
        alert(this.state.name);
    }


    setData2 = (key,...num) =>{
        console.log(key);
    }

    render() {
        let listResult = this.state.list.map(function (value, key) {
            return <li key={key}>{value}</li>
        });
        return (
            <div>
                123{this.state.msg}
                <div>{this.state.title}</div>
                <div title={this.state.title}>
                    1123132
                </div>
                <div className={this.state.red}>
                    12321
                </div>
                <label htmlFor="name">123123</label>
                <input type="text" id='name'/>
                <div style={{"marginBottom": "20px"}}>123</div>
                <div>123</div>
                {this.state.list2}
                123
                {listResult}
                <hr/>
                {
                    this.state.list3.map(function (value, key) {
                        console.log(JSON.stringify(value) + "  " + key);
                        return (<li key={key}>{value.title}</li>)
                    })
                }
                <button onClick={this.run}>first Button</button>
                <button onClick={this.getData}>second Button</button>
                <button onClick={this.getData2.bind(this)}>third Button</button>
                <button onClick={this.getData3}>24365436</button>



                <button onClick={this.run}>time click</button>
                <button onClick={this.getName}>12312321321</button>

                <button onClick={this.setData.bind(this, 'nre  timeiuht  idsafds')}>2018年11月21日19:09:47</button>


                <button onClick={this.getData4}>获取参数</button>
            </div>
        )

    }

}

export default Home