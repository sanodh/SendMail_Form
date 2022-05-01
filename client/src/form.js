import React, {Component} from 'react'
import axios from 'axios';
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


formSubmit=(e)=>{
    e.preventDefault();
    let data = {
        name:this.state.name,
        lastname:this.state.lastname,
        email:this.state.email,
        message:this.state.message
    }


axios.post('/api/forma',data)
.then(res=>{
    this.setState({
        sent:true,
    },this.resetForm())
})
.catch(()=>{
    console.log('message not sent');
})

}

//for resetting initial data
resetForm=()=>{
    this.setState({
        name:'',
        lastname:'',
        email:'',
        message:''
    })
//set time out to the form
    setTimeout(()=>{
      this.setState({
          sent:false,
      })  
    },3000)
}


    render(){
        return(
            <div className='container'>
                <form onSubmit={this.formSubmit}>
                    {/*single item*/}
                    <div className='singleItem'>
                        <label htmlFor='name'>Name</label>
                        <input
                         type='text'
                         name='name'
                          className='name'
                           placeholder='your first name....'
                            value={this.state.name}
                             onChange={this.handleName}/>
                    </div>
                    {/*end of th esingle item*/}

                    {/*second single item*/}
                    <div className='singleItem'>
                        <label htmlFor='lastname'>Lastname</label>
                        <input
                         type='text'
                          name='lastname'
                           className='lastname'
                            placeholder='your last name....'
                             value={this.state.lastname}
                              onChange={this.handleLastname}/>
                    </div>
                    {/*end of the second single item*/}

                    {/*third single item*/}
                    <div className='singleItem'>
                        <label htmlFor='email'>Email</label>
                        <input
                         type='text'
                          name='email'
                           className='email'
                            placeholder='your email....'
                             value={this.state.email}
                              onChange={this.handleEmail}
                               required/>
                    </div>
                    {/*end of the third single item*/}

                    {/*forth single item*/}
                    <div className='textArea singleItem'>
                        <label htmlFor='message'>Message</label>
                        <textarea
                         name='message'
                          id='' cols='30'
                           rows='10'
                            placeholder='enter your message....'
                             value={this.state.message}
                              onChange={this.handleMessage}></textarea>
                    </div>
                    {/*end of the forth single item*/}

                    {/*popup message*/}
                    <div className={this.state.sent ?'msg msgAppear':'msg'}>message has been sent</div>

                    {/*submit button*/}
                    <div className='btn'>
                        <button type='submit'>submit</button>
                    </div>
                </form>
            </div>
        )
    }
}