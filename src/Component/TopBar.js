import React, { Component } from 'react';
import {Link , Redirect} from 'react-router-dom';

class TopBar extends Component{

    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            title: '',
        }
        

    }
    componentDidMount(){
        console.log(this.props);
        this.setState({isLoading:true,title:"Authentification"});
        
    }
    render(){
        const { isLoading, value } = this.state;
        return(
            <>
            {isLoading ?
            <nav class="main-header navbar navbar-expand">
                {/*  Left navbar links */}
                <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
      </li>
      
      <li class="nav-item d-none d-sm-inline-block">
        <a href="#" class="nav-link">Gestion Session</a>
      </li>
    </ul>

    {/* <!-- Right navbar links --> */}
    <ul class="navbar-nav ml-auto">
      {/* <!-- Navbar Search --> */}
      

      {/* <!-- Messages Dropdown Menu --> */}
      
     
      
      <li class="nav-item">
        <a class="nav-link" data-widget="fullscreen" href="#" role="button">
          <i class="fas fa-expand-arrows-alt"></i>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
        <i class="fas fa-sign-out-alt"></i>
        </a>
      </li>
    </ul>
  </nav>
            :null
            }
            </>
        );
    }

}
export default TopBar;