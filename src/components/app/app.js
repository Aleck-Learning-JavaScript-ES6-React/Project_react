import React, {Component} from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';
import './app.css';
import styled from 'styled-components';
import nextId from "react-id-generator";

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`
/*const StyledAppBlock = styled(AppBlock)`
    background-color: grey;
`*/

export default class App extends Component {
    state={
        data: [
            {label: "Going to learn React", important: true, id: nextId()},
            {label: "That is good!", important: false, id: nextId()},
            {label: "I need a break...", important: false, id: nextId()}
        ]
    }
   
    deleteItem = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id)
            const newArr = [...data.slice(0,index), ...data.slice(index+1)];
            return {
                data: newArr
            }
        })
    }

    addItem = (body) => {
        const newItem = {
            label: body, 
            important:false,
            id: nextId()
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    render() {
        return (
            <AppBlock>
                <AppHeader/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList posts={this.state.data}
                 onDelete={this.deleteItem} />
                <PostAddForm
                 onAdd={this.addItem} />
            </AppBlock>
        )
    }
}
