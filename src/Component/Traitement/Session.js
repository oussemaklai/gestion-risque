import React, { Component } from 'react';
import {Link , Redirect} from 'react-router-dom';
import TopBar from '../TopBar';
import MUIDataTable from "mui-datatables";
import Sidebar from '../SideBar';
class Session extends Component{

    

    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            
        }
        

    }
    componentDidMount(){
        
        console.log(this.props.link);
        this.setState({isLoading:true});
    }
    render(){
        const { isLoading, columns,data,options } = this.state;
        return(
            <>
            {isLoading ?
            <>
            <TopBar/>
            <Sidebar/>
            <div class="content-wrapper">
           
                
                <div className="traitement-container">
                    
                <label>Id Session : </label>
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        
                        <input class="input" type="number" placeholder="Votre id de session ..."/>
                        <span class="icon is-small is-left">
                        <i class="fas fa-user"></i>
                        </span>
                        <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
                    </p>
                </div>

                <label>Date début : </label>
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        
                        <input class="input" type="date"/>
                        <span class="icon is-small is-left">
                        <i class="fas fa-user"></i>
                        </span>
                        <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
                    </p>
                </div>

                <label>Date fin : </label>
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        
                        <input class="input" type="date" />
                        <span class="icon is-small is-left">
                        <i class="fas fa-user"></i>
                        </span>
                        <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
                    </p>
                </div>
                    <Link to="/">Suivant</Link>
                   
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
export default Session;