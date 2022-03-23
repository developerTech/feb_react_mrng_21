import React, { Component} from 'react';
import './Header.css';
import {Link,withRouter} from 'react-router-dom';

const url = "https://developerjwt.herokuapp.com/api/auth/userinfo";
class Header extends Component {
    constructor(props) {
        super(props);

        this.state={
            userData:'',
            userImg:'',
            userName:''
        }
    }

    handleLogout = () => {
        sessionStorage.removeItem('ltk');
        sessionStorage.removeItem('userInfo')
        sessionStorage.removeItem('uName')
        sessionStorage.removeItem('uImg')
        sessionStorage.setItem('loginStatus',false);
        this.setState({userData:''})
        this.props.history.push('/')

    }

    conditionalHeader = () => {
        if(this.state.userData.name ||  sessionStorage.getItem('uName') !== null){
            if(sessionStorage.getItem('uName') !== null){
                let name = sessionStorage.getItem('uName')
                let image = sessionStorage.getItem('uImg')
                return(
                    <>
                    <Link to="/" className="btn btn-success">
                    Hi <img src={image} style={{height:50,width:50}}/> {name}
                    </Link>
                        &nbsp;
                    <button className="btn btn-danger" onClick={this.handleLogout}>
                    <span className="glyphicon glyphicon-log-out"></span> Logout</button>
                    </>
                )
            }else{
                let data = this.state.userData;
                let outputArray = [data.name,data.email,data.phone,data.role];
                sessionStorage.setItem('userInfo',outputArray);
                sessionStorage.setItem('loginStatus',true);
                return(
                    <>
                        <Link to="/" className="btn btn-success">
                           <span className="glyphicon glyphicon-user"></span> Hi {data.name}
                           </Link>
                       &nbsp;
                      <button className="btn btn-danger" onClick={this.handleLogout}>
                      <span className="glyphicon glyphicon-log-out"></span> Logout</button>
                    </>
                )
            }
        }else{
            return(
                <>
                    <a className="btn btn-primary" href="https://github.com/login/oauth/authorize?client_id=930f92e500db2f4d357c">
                        Login With Github
                    </a> &nbsp;
                    <Link to="/login" className="btn btn-success">
                       <span className="glyphicon glyphicon-log-in"></span> LogIn</Link>
                   &nbsp;
                   <Link to="/register" className="btn btn-info">
                    <span className="glyphicon glyphicon-user"></span> Register</Link>
                </>
            )
        }
    }

    render(){
        return(
            <header>
                <div id="brand">
                    Developer Funnel
                    &nbsp;
                    <Link to="/" className="btn btn-info">Home</Link>
                </div>
                <div id="social">
                    {this.conditionalHeader()}
                </div>
            </header>
        )
    }

    componentDidMount(){
        /* Github User Profile*/
        if(this.props.location.search){
            if(this.props.location.search.split('=')[0] == '?code'){
                var code = this.props.location.search.split('=')[1]
            }

            if(code){
                let requestedData = {
                    code:code
                }
                fetch(`http://localhost:9900/oauth`,{
                    method:'POST',
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify(requestedData)
                })
                .then((res) =>  res.json())
                .then((data) => {
                    console.log(">>>>data",data)
                    let username = data.name;
                    let img = data.avatar_url;
                    sessionStorage.setItem('uName',username)
                    sessionStorage.setItem('uImg',img)
                    sessionStorage.setItem('loginStatus',true);
                    this.setState({userImg:img,userName:username})
                })
            }
        }

        /* JWT User Profile*/
        fetch(url,{
            method:'GET',
            headers:{
                'x-access-token':sessionStorage.getItem('ltk')
            }
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                userData:data
            })
        })
        /* JWT User Profile*/
    }
}

export default withRouter(Header)