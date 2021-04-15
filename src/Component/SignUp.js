import React, { Component } from 'react';
import {Link , Redirect} from 'react-router-dom';
import TopBar from './TopBar';
class SignUp extends Component{

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
            
            <div class="content">
            <div className="ImgSignUpWrap">
                    <img src="img/add.jpg"/>
            </div>
            <div className="FormContainer">
            <label>Nom : </label>
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        
                        <input class="input" type="email" placeholder="Votre nom ..."/>
                        <span class="icon is-small is-left">
                        <i class="fas fa-user"></i>
                        </span>
                        <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
                    </p>
                </div>
                <label>Prénom : </label>
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        
                        <input class="input" type="email" placeholder="Votre prénom ..."/>
                        <span class="icon is-small is-left">
                        <i class="fas fa-user"></i>
                        </span>
                        <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
                    </p>
                </div>
                <label>Matricule : </label>
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input class="input" type="number" placeholder="Votre matricule ..."/>
                        <span class="icon is-small is-left">
                        <i class="fas fa-user"></i>
                        </span>
                        <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
                    </p>
                </div>
                <label>mot de passe : </label>
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input class="input" type="password" placeholder="Votre mot de passe ..."/>
                        <span class="icon is-small is-left">
                        <i class="fas fa-lock"></i>
                        </span>
                        <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
                    </p>
                </div>
                
                <button className="AddUser-btn">
                    Ajouter utilisateur
                </button>
                
            </div>
            
            </div>
            </>
            
            :null
            }
            </>
        );
    }

}
export default SignUp;