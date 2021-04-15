import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MUIDataTable from "mui-datatables";
export default class TraitActif extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            type: '',
            columns: [],
            data: [],
            options: {}
        }
        this.handleChange = this.handleChange.bind(this);

    }

    componentDidMount() {
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
        this.setState({ isLoading: true, columns: columns, data: data, options: options });

    }
    handleChange = (event) => {
        console.log("this is handleChange");
        this.setState({ type: event.target.value });
    };
    render() {
        const { isLoading, type, data, columns, options } = this.state;
        return (
            <>
                <div className="traitement-content">
                    <h3>Traitement Actifs</h3>
                    <div>
                        <FormControl className="form-control-trait">
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
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={type}
                                onChange={this.handleChange}
                                displayEmpty

                            >
                                <MenuItem value="">Criticité affaire :</MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className="form-control-trait">
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={type}
                                onChange={this.handleChange}
                                displayEmpty
                            >
                                <MenuItem value="">CID :</MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className="form-control-trait">
                            
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={type}
                                onChange={this.handleChange}
                                displayEmpty  
                                >
                                <MenuItem value="">lieu :</MenuItem>
                                <MenuItem value={10}>Tunis</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>

                    </div>
                    <div>

                        <TextField id="standard-basic" label="Description" />


                        <TextField id="standard-basic" label="Propriétaire" />


                        <FormControl className="form-control-trait">
                            <TextField id="standard-basic" multiline rowMax={4} label="Mesure : " />
                        </FormControl>


                    </div>


                    <MUIDataTable
                        className="data-table-traitement"

                        data={data}
                        columns={columns}
                        options={options}
                    />


                </div>
            </>
        );
    }
}