var React = require('react');
var Validation = require('./index.jsx');

var Login = React.createClass({
    getInitialState: function() {
        return {
            email: '',
            password: '',
        }
    },

    onSubmit: function(event) {
        event.preventDefault();
        console.log(event.currentTarget);
    },

    onEmailChange: function(event) {
        this.setState({
            ...this.state,
            email: event.target.value
        })
    },
    
    onPasswordChange: function(event) {
        this.setState({
            ...this.state,
            email: event.target.value
        })
    },

    render: function() {
        return (
            <Validation.Form onSubmit={this.onSubmit}>
                <label>
                    Email
                    <Validation.Input value={this.state.email} onChange={this.onEmailChange} className='ui-input' placeholder='' name='email' validations={[
                        {
                            rule: 'isRequired'
                        },
                        {
                            rule: 'isEmail'
                        }
                    ]} />
                </label>
                <label>
                    Password
                    <Validation.Input value={this.state.password} onChange={this.onPasswordChange} className='ui-input' placeholder='' name='password' type='password' validations={[
                        {
                            rule: 'isRequired'
                        }
                    ]} />
                </label>
                <br/>
                <Validation.Button type='submit' value='login' />
            </Validation.Form>
        );
    }
});

module.exports = Login;
