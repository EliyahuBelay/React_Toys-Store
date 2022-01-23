import React from 'react';
import Ball from '../Ball/Ball';
import Puzel from '../Puzel/Puzel';
import VideoGame from '../VideoGame/VideoGame';

class Toy extends React.Component {
    constructor(props) {
        super(props)
        this.state = { companyName: '',age:'' }
        this.ChangeCompanyName = this.ChangeCompanyName.bind(this)
        this.ChangeAge = this.ChangeAge.bind(this)
        this.ChangeSetNameNAge = this.ChangeSetNameNAge.bind(this)
    }
    ChangeCompanyName(event){
        this.state.companyName = event.target.value
    }
    ChangeAge(event){
        this.state.age = event.target.value
    }
    ChangeSetNameNAge(){
        this.setState({companyName : this.state.companyName})
        this.setState({age : this.state.age})
    }
    componentWillMount(){
        alert("welcom customer");
    }
    componentDidMount(){
        console.log("App succeed");
    }
    componentWillUpdate(){
        alert("App about to change");
    }
    componentDidUpdate(){
        console.log("App update succeed");
    }
    render() {
        let { toyName } = this.props
        let {companyName} = this.state
        let {age} = this.state
        return (
            <div>
                <p>{toyName}</p>
                company name : <input type={"text"} onChange={this.ChangeCompanyName}/>
                <p>{companyName}</p>
                age : <input type={"number"} onChange={this.ChangeAge}/>
                <button onClick={this.ChangeSetNameNAge}>Go</button>
                <p>{age}</p>
                <Puzel/>
                <VideoGame/>
                <Ball/>
            </div>
        )
    }
}
export default Toy;