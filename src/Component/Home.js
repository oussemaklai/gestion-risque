import React, { Component } from 'react';
import {Link , Redirect} from 'react-router-dom';
import TopBar from './TopBar';
class Home extends Component{

    constructor(props){
        super(props);
        this.state = {
            isLoading: false
        }
        

    }
    componentDidMount(){
        console.log(this.props.link);
        this.setState({isLoading:true});
    }
    render(){
        const { isLoading } = this.state;
        return(
            <>
            {isLoading ?
            <>
            <TopBar/> 
            <div class="content">
            {/*<div className="logout">
                    <i class="fas fa-sign-out-alt"></i>
            </div>*/}
                <div className="card">
                <div className="close-card">
                    <i className="fas fa-times-circle"></i>
                </div>
                    <Link className="card-home-link" to="/">Gestion session</Link>
                    <Link className="card-home-link" to="/">Gestion des actifs</Link>
                    <Link className="card-home-link" to="/">Gestion vulnérabilité</Link>
                    <Link className="card-home-link" to="/">Gestion des menaces</Link>
                    <Link className="card-home-link" to="/">Gestion des impacts</Link>
                    <Link className="card-home-link" to="/">Gestion des mesures</Link>
                </div>
                
            </div>
            {/*<Link to="/" className="back">
                <i class="fas fa-arrow-circle-left"></i>
            </Link>*/}
            </>
            
            :null
            }
            </>
        );
    }

}
export default Home;