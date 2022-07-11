import React, { Component } from 'react'
import './Tabs.css'
export default class Tabs extends Component {
    constructor(props){
        super(props);
        this.state = {
            content : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
        }
    }
  render() {
    
    return (
        <div>
            <h1 style={{textAlign:'center', margin:'50px'}}>BUTTON TABS</h1>
            <div className='tabs_container row'>
                <button className='tabs_items col-3' onClick={() => this.setState({content : 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.'})}>History</button>
                <button className='tabs_items col-3' onClick={() => this.setState({content : 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?'})}>Approach</button>
                <button className='tabs_items col-3' onClick={() => this.setState({content : 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est.'})}>CulTure</button>
                <button className='tabs_items col-3' onClick={() => this.setState({content : 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.'})}>Method</button>
            </div>
            <div className='tabs_content'>
               {this.state.content}
            </div>
      </div>
    )
  }
}
