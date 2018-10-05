import React, { PureComponent } from 'react';
// import './userResultsRow.css';

class UsersResultsRow extends PureComponent {
    render() {
        return (
            <div className="component-user-row">
                <img alt="user pic" src={(`./images/${this.props.image}.svg`)} />
                <span className="user-name"> {this.props.name} </span>
                <span className="user-age">{this.props.age}</span>
            </div>
        );
    }
}


export default UsersResultsRow;
