import React, { Component } from 'react';

import { Select, TextField, FormControl, MenuItem, InputLabel, Button } from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';
export default class Menace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        }
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        this.setState({ isLoading: true });
    }
    handleChange = (event) => {
        this.setState({ type: event.target.value });
    }
    render() {
        const { isLoading, type } = this.state;
        return (

            <>
                <div class="menace-container">
                    
                    <FormControl className="form-control-trait">
                        <label htmlFor="">Type : </label>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={type}
                            onChange={this.handleChange}
                            displayEmpty
                        >
                            <MenuItem value="">Type :</MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className="form-control-trait">
                        <label htmlFor="">acteur : </label>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={type}
                            onChange={this.handleChange}
                            displayEmpty
                        >
                            <MenuItem value="">Type :</MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className="form-control-trait">
                        <label htmlFor="">Motivation : </label>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={type}
                            onChange={this.handleChange}
                            displayEmpty
                        >
                            <MenuItem value="">Type :</MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className="form-control-trait">
                        <label htmlFor="">Resultat : </label>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={type}
                            onChange={this.handleChange}
                            displayEmpty
                        >
                            <MenuItem value="">Type :</MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className="form-control-trait">
                        <label htmlFor="">Incident passé : </label>
                        <TextField id="standard-basic" multiline rowMax={4} label="Incident passé : " />
                    </FormControl>
                    <div className="btn-menace">
                    <Button variant="contained" color="primary">Enregistrer</Button>
                    <Button variant="contained" color="primary">Ajouter encore</Button>
                    </div>
                </div>
            </>
        );
    }
}