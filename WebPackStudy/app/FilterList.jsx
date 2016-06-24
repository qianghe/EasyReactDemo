import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './FilterList.css';


class FilterList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            showListArray: []
        };

        this.changeHandler = this.changeHandler.bind(this);
    }

    componentWillMount(){
        this.setState({
            showListArray: this.props.data
        });
    }

    changeHandler(event){
        let searchVal = event.target.value.toLowerCase();

        if(searchVal == ''){
            this.setState({
                showListArray : this.props.data
            });

            return false;
        }

        this.setState({
            showListArray:this.props.data.filter(function(value){

                if(value['data'].toLowerCase().indexOf(searchVal) !=-1 ) return 1;

             })
        });
    }

    render(){
        let FilterList = [];

        this.state.showListArray.forEach(function(elem,index){
            FilterList.push(<li key={"itemLi"+index} >{elem.data}</li>);
        });

        return(
            <div styleName="FilterCopmonent">
                <input placeholder="search" onChange={this.changeHandler} />
                <ul styleName="FilterList">
                    {FilterList}
                </ul>
            </div>
        );
    }
}

export default CSSModules(FilterList,styles);