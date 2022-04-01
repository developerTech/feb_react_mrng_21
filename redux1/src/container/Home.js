import React,{Component} from 'react';
import {connect} from 'react-redux';
import {movieList} from '../action/actionFile';
import DisplayComponent from '../component/Display'

class Home extends Component{
    // call action
    componentDidMount(){
        this.props.dispatch(movieList())
    }

    render(){
        return(
            <div>
                <h1>Redux</h1>
                <DisplayComponent datalist={this.props.myData}/>
            </div>
        )
    }
   
}

// here view will receive the updated state from store
function mapStateToProps(state){
    return{
        myData:state.films
    }
}


export default connect(mapStateToProps)(Home)