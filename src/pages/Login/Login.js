import React, {Component} from 'react'
import {Link} from 'react-router-dom'
// mdbreact
import {MDBContainer, MDBBtn, MDBCard, MDBCardBody} from 'mdbreact';
import Input from '../../components/Form/Input/Input'
import {connect} from 'react-redux'
import {login} from '../../store/actions/authAction'
import Spinner from '../../components/Spinner/Spinner'
import './Login.css'
class Login extends Component {
    state = {
        email:"",
        password:"",
        errors:{}
    }
    changeHandler = event =>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    submitHandler = event =>{
        event.preventDefault()
        let user = {
            email:this.state.email,
            password:this.state.password
        }
        this.props.login(user, this.props.history)
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if(JSON.stringify(nextProps.error) !== JSON.stringify(prevState.error)){
            return{
             errors:nextProps.error
            }
        }
        return null
    }
    render() {
        return (
            <div className="login-page text-center">
                <MDBContainer>
                    <div className="login-form-area">
                        <MDBCard>
                            <MDBCardBody>
                                <h4 className="h4 text-center mb-4">Sign in</h4>
                                <form className="login-form" onSubmit={this.submitHandler}>
                                    <Input 
                                        type="email"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.changeHandler}
                                        label="Email" 
                                        error={this.state.errors.errors}
                                    />
                                    <Input 
                                        type="password"
                                        name="password"
                                        label="Password"
                                        onChange={this.changeHandler}
                                        value={this.state.password}
                                        error={this.state.errors.errors}
                                    />
                                    <p className="font-small blue-text d-flex justify-content-end pb-3">
                                        
                                        <a href="#!" className="blue-text ml-1">
                                        Forgot
                                        Password?
                                        </a>
                                    </p>
                                    <MDBBtn type="submit" onSubmit={this.submitHandler} className="custom-btn" block>
                                    {this.props.isloading? <Spinner /> : "Sing In"}
                                        
                                    </MDBBtn>
                                    {/* <MDBBtn type="submit" onSubmit={this.submitHandler} className="custom-btn" style={{backgroundColor:"#F96332", border: 'none'}} block>Sing In</MDBBtn> */}
                                    <p className="font-small mt-2 grey-text d-flex justify-content-start">
                                        Not a member?
                                        <Link to="/register" className="blue-text ml-1">

                                        Sign Up
                                        </Link>
                                    </p>
                                </form>
                            </MDBCardBody>
                        </MDBCard>
                    </div>
                </MDBContainer>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        error:state.error,
        isloading:state.meta.isLoading
    }
}
export default connect(mapStateToProps, {login})(Login);