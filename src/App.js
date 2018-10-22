import React, { Component } from 'react';
import './App.css';
import   text    from './text';
import Selected  from "./selected";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "this should display",
            isToggleOn: true,
            items: [],
            paragraph: ''
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleTextareaChange = this.handleTextareaChange.bind(this);
    }


    addItem(e){
        if (this._inputElement.value !== ""){
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
        }
        this._inputElement.value = "";
        console.log(this.state.items);
        e.preventDefault();
    }


    handleClick( paragraph ) {
        this.setState({
            text: paragraph,
            isToggleOn: false,
        });
    }


    deleteItem(key){
        var filteredItems = this.state.items.filter(function(item){
            return (item.key !== key )
        });

        this.setState({
            items: filteredItems
        });
    }

    handleTextareaChange(e) {
        const text = e.target.value;
        this.setState({text: text})
    }


    render( ) {
        console.log(this.state.text)
        return (
            <div className="App">

                <div className="textbox">
                    <div className='header'>
                        <div>
                            {this.state.isToggleOn ? "" :
                                    <form onSubmit={this.addItem}>
                                    <textarea
                                        ref={(a) => this._inputElement = a}
                                        onChange={this.handleTextareaChange}
                                        value={this.state.text}
                                    >
                                    </textarea>

                                        <button type='submit'>add to selections</button>
                                    </form>
                            }
                        </div>
                    </div>


                    <div onClick={this.handleClick}>
                        <h1>Google Pixel phones to be unveiled October 4
                        </h1>
                    </div>


                    <div>
                        <p>
                            {text.block1.split('\n')
                                .map(paragraph =>
                                    <ul className={'paragraph'} onClick={() => this.handleClick(paragraph)}>
                                        {paragraph}
                                    </ul>)
                            }
                        </p>
                    </div>

                </div>
                <Selected
                    entries={this.state.items}
                    delete={this.deleteItem}
                />

            </div>
        );
    }
}

export default App;

