import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchInput from './SearchInput';
import UsersResults from './usersResults';
import clientList from './data.json';
import FilterUserList from './filterUsers';
// import sortByName from './usersSorting';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterUserList: FilterUserList(clientList, ''),
        };
    }
    handleSearchChange= (input) => {
        this.setState({
            filterUserList: FilterUserList(clientList, input.target.value),
        });
    }

    clearAllButton = () => {
        const searchField = document.getElementById('search'); // как адекватно передавать ИД елемента, если он рендерится в другом компоненте?
        searchField.form.reset();
        this.setState({
            filterUserList: FilterUserList(clientList, ''),
        });
    }

    // sortbyAsc =() => {
    //     const arr = sortByName(0, clientList);
    //     console.log('sortbyAsc');
    //     console.log(arr);
    //     this.setState({
    //         filterUserList: FilterUserList(arr, ''),
    //     });
    // };

    // sortbyDesc =() => {
    //     const arr = sortByName(1, clientList);
    //     console.log('sortbyDesc');
    //     console.log(arr);
    //     this.setState({
    //         filterUserList: FilterUserList(arr, ''),
    //     });
    // }


    componentDidMount() {
        // 测试 devServer 的代理功能
        // fetch('/api/category')
        //     .then(resp => resp.json())
        //     .then(res => console.log('here here', res));
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <form id="find_form">
                    <SearchInput textChange={this.handleSearchChange} />
                </form>
                <div className="button-block">
                    <button onClick={this.sortbyAsc} type="button" value="SortAsc" id="sort-button-asc">Sort Asc</button>
                    <button onClick={this.sortbyDesc} type="button" value="SortDesc" id="sort-button-desc">Sort Desc</button>
                    <button onClick={this.clearAllButton} type="button" value="Clear" id="clear-button">Clear All</button>
                </div>
                <div>
                    <UsersResults dataList={this.state.filterUserList} />
                </div>
            </div>
        );
    }
}

export default App;
