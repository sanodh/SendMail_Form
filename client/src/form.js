import React, {Component} from 'react'

export default class from extends Component{

state={
    name:'',
    lastname:'',
    email:'',
    message:'',
    sent:false
}

//handle inputs
handleName=(e)=>{
    this.setState({
        name:e.target.value
    })
}

handleLastname=(e)=>{
    this.setState({
        lastname:e.target.value
    })
}

handleEmail=(e)=>{
    this.setState({
        email:e.target.value
    })
}

handleMessage=(e)=>{
    this.setState({
        message:e.target.value
    })
}
//end of the input handle



    render(){
        return(
            <div className='container'>
                <form>
                    {/*single item*/}
                    <div className='singleItem'>
                        <label htmlFor='name'>Name</label>
                        <input type='text' name='name' className='name' placeholder='your first name....' value={this.state.name} onChange={this.handleName}/>
                    </div>
                    {/*end of th esingle item*/}

                    {/*second single item*/}
                    <div className='singleItem'>
                        <label htmlFor='lastname'>Lastname</label>
                        <input type='text' name='lastname' className='lastname' placeholder='your last name....' value={this.state.lastname} onChange={this.handleLastname} />
                    </div>
                    {/*end of the second single item*/}

                    {/*third single item*/}
                    <div className='singleItem'>
                        <label htmlFor='email'>Email</label>
                        <input type='text' name='email' className='email' placeholder='your email....' value={this.state.email} onChange={this.handleEmail}/>
                    </div>
                    {/*end of the third single item*/}

                    {/*forth single item*/}
                    <div className='textArea singleItem'>
                        <label htmlFor='message'>Message</label>
                        <textarea name='message' id='' cols='30' rows='10' placeholder='enter your message....' value={this.state.message} onChange={this.handleMessage}></textarea>
                    </div>
                    {/*end of the forth single item*/}

                    {/*popup message*/}
                    <div className='msg'>message has been sent</div>

                    {/*submit button*/}
                    <div className='btn'>
                        <button type='submit'>submit</button>
                    </div>
                </form>
            </div>
        )
    }
}