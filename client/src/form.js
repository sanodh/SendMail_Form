import React, {Component} from 'react'

export default class from extends Component{

state={
    name:'',
    lastname:'',
    email:'',
    message:false
}

// handle input
handleName=()=>{
    
}

// end of handle input


    render(){
        return(
            <div className='container'>
                <form>
                    {/*single item*/}
                    <div className='singleItem'>
                        <label htmlFor='name'>name</label>
                        <input type='text' name='name' className='name' placeholder='your first name....'/>
                    </div>
                    {/*end of th esingle item*/}

                    {/*second single item*/}
                    <div className='singleItem'>
                        <label htmlFor='lastname'>last name</label>
                        <input type='text' name='lastname' className='lastname' placeholder='your last name....'/>
                    </div>
                    {/*end of the second single item*/}

                    {/*third single item*/}
                    <div className='singleItem'>
                        <label htmlFor='email'>Email</label>
                        <input type='text' name='email' className='email' placeholder='your email....'/>
                    </div>
                    {/*end of the third single item*/}

                    {/*forth single item*/}
                    <div className='textArea singleItem'>
                        <label htmlFor='message'>message</label>
                        <textarea name='message' id='' cols='30' rows='10' placeholder='enter your message....'></textarea>
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