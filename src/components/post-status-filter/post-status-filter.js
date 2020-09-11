import React, {Component} from 'react';
import { Button } from 'reactstrap';
import './post-status-filter.css';

export default class PostStatusFilter extends Component {
    buttons = [
        {name: 'all', label: 'Все'},
        {name: 'like', label: 'Понравилось'}
    ]
    
    render() {
        const buttons = this.buttons.map(({name, label}) => {
            const {filter, onFilterSelect} = this.props; 
            const active = filter === name,
                  clazz = active ? 'primary' : 'outline-primary'
            return (
                <Button key={name} color={clazz}
                 onClick={() => onFilterSelect(name)}>{label}</Button>
            )
        });
        
        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}
