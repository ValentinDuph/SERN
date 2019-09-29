import React, {Component} from 'react';
import axios from 'axios';

import Array from './Array';
import DropdownComponent from './DropdownComponent';

class Page extends Component {
    state = {
        selectedColumn: null,
        columns: [],
        columnInfo: null
    }

    componentDidMount(){
        this.getColumnNames();
    }

    getColumnNames = () => {
        axios.get('api/columns')
            .then(res => {
            if(res.data){
                this.setState({
                columns: res.data.columnName
                })
            }
            })
            .catch(err => console.log(err))
    }

    getColumnInfo = (name) => {
        axios.get('api/columns/'+name)
            .then(res => {
            if(res.data){
                this.setState({
                    columnInfo: res.data.result
                })
            }
            })
            .catch(err => console.log(err))
    }

    selectColumn = (name) => {
        this.setState({
            selectedColumn: name
        })
        this.getColumnInfo(name);
        console.log("Column selected : " + name);
    }
    
    render(){
        let { columns } = this.state; 
        let { selectedColumn } = this.state; 
        let { columnInfo } = this.state; 
        return (
            <div class="container">
                <div class="row justify-content-around">
                    <div class="col-sm-3">
                        <DropdownComponent selectedColumn={selectedColumn} columns={columns} selectColumn={this.selectColumn}/> 
                    </div>
                    <div class="col-sm-6">
                        <Array columnInfo={columnInfo}/>
                    </div>
                </div>
            </div>
        );
    }    
}
export default Page