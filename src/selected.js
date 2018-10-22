import React  from 'react';
import './App.css';
import FlipMove from 'react-flip-move'

class Selected extends React.Component {
    constructor(props){
        super(props);

        this.createTasks = this.createTasks.bind(this);
        this.delete = this.delete.bind(this);
    }

    createTasks(item){
        return <li onClick={() => this.delete(item.key)}

            key={item.key}>{item.text}</li>
    }

    delete(key){
        this.props.deleteItem(key);
    }


    render() {
        console.log(this.props.entries);
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);

        return(
            <div className="selection">
                <h1>Selections</h1>
            <li className='thelist'>
                <FlipMove duration={250} easing='ease-out' >
                {listItems}
                </FlipMove>
            </li>
         </div>
            );
    }

}

export default Selected;
