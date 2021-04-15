import React, { Component } from 'react';
import {Link , Redirect} from 'react-router-dom';
import TopBar from '../TopBar';
import MUIDataTable from "mui-datatables";
import Sidebar from '../SideBar';
export default class GestionMenaces extends Component{

    

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
                    <label>Type : </label>
                    <div class="select">
                        <select>
                        <option>Type</option>
                        <option>this </option>
                        </select>
                    </div>
                    </div>
                    <div>
                    <label>Auteur : </label>
                    <div class="select">
                        <select>
                        <option>Type</option>
                        <option>this </option>
                        </select>
                    </div>
                    </div>
                    <div>
                    <label>Résultat : </label>
                    <div class="select">
                        <select>
                        <option>Type</option>
                        <option>this </option>
                        </select>
                    </div>
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
                    <Link to="/ajouter-session">Ajouter</Link>
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
