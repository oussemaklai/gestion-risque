import React, { Component } from 'react';
import {Link , Redirect} from 'react-router-dom';
import TopBar from '../TopBar';
import MUIDataTable from "mui-datatables";
import Sidebar from '../SideBar';
export default class GestionVul extends Component{

    

    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            columns : [],
            data : [],
            options : {}
        }
        

    }
    componentDidMount(){
        const columns = ["Id", "Date début", "Date fin", "choix"];

        const data = [
        ["Joe James", "Test Corp", "Yonkers", "NY"],
        ["John Walsh", "Test Corp", "Hartford", "CT"],
        ["Bob Herm", "Test Corp", "Tampa", "FL"],
        ["James Houston", "Test Corp", "Dallas", "TX"],
        ];

const options = {
  filterType: 'checkbox',
};
        console.log(this.props.link);
        this.setState({isLoading:true,columns:columns,data:data,options:options});
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
            {/*<div className="logout">
                    <i class="fas fa-sign-out-alt"></i>
            </div>*/}
                <div className="gestion-top">
                    <div>
                    <label>Label : </label>
                    <div class="select">
                        <select>
                        <option>Type</option>
                        <option>this </option>
                        </select>
                    </div>
                    </div>
                    <div class="field">
                    <label htmlFor="">Description :</label>
                    <p class="control has-icons-left has-icons-right">
                        
                        <input class="input" type="email" placeholder="Votre matricule ..."/>
                        <span class="icon is-small is-left">
                        <i class="fas fa-user"></i>
                        </span>
                        <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
                    </p>
                </div>
                </div>
                <div className="gestion-container">
                    
                <div className="data-table-container">
                    <MUIDataTable
                        title={"liste de session"}
                        data={data}
                        columns={columns}
                        options={options}
                    />
                </div>
                    
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
