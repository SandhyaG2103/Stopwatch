import React,{Component} from "react";
import Counter from "./Counter";

class ClassCount extends React.Component{

    constructor(props){
        super(props);
        this.state={
            count:0,
        }
    }

    Counter=()=>{
        this.setState({count:this.state.count + 1})
    }
     
    render(){
        return(
            <>

            <p>Counter: {this.state.count} </p>
            
            <button onClick={()=>this.Counter()}>Increase Counter</button>
            </>
        )
    }

}

export default ClassCount;