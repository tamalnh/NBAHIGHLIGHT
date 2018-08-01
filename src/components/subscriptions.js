import React, { Component } from 'react'

class Subscriptions extends Component {
    constructor(props){
        super(props);

        this.state = { 
            email: '',
            error: false,
            success: false
         }
    }

    onChangeInput = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    // Save Email
    saveSubscription = (email) => {
        const URL_EMAIL = 'http://localhost:4040/subcriptions';

        fetch(URL_EMAIL, {
            method: 'POST',
            headers: {
                'Accecpt' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({email})
        }).then(res => res.json())
            .then(data => {
                // console.log(data)

                this.setState({
                    email: '',
                    success: true
                })
            })
            .catch(err => console.log(`Error Occured: ${err}`))
    }

    // clear status message
    clearMesssages = () => {
        setTimeout(() => {
            this.setState({
                error: false,
                success: false
            })
        }, 3000)
    }

    // Validate email
    handleSubmit = (event) => {
        event.preventDefault()

        let email = this.state.email;
        let regex = /\S+@\S+\.\S+/;

        if(regex.test(email)){
            this.saveSubscription(email)
        }else{
             this.setState({
                 error: true
             })
        }

        // clear status message
        this.clearMesssages()
    }


    render() {
        return (
            <div className="subscribe-panel">
                <h3>Subscribe to us</h3>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text" 
                            placeholder="your email....."
                            value={this.state.email}
                            onChange={this.onChangeInput}/>
                            
                            <div className={this.state.error ? "error show" : "error"}>Email is not valid</div>
                            <div className={this.state.success ? "success show" : "success"}>Thank you</div>
                    </form>
                </div>
                <small>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book
                </small>
            </div>
        );
    }
}

export default Subscriptions;
