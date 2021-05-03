import { useState } from 'react';
import { NavLogo } from "components/common";
import { Navigation } from "components/home/components";
import axios from 'axios';
import { showSuccessMessage, showErrorMessage } from '../../helpers/alerts';


const ForgotPassword = () => {
    const [state, setState] = useState({
        email: '',
        buttonText: 'Forgot Password',
        success: '',
        error: ''
    });
    const { email, buttonText, success, error } = state;

    const handleChange = e => {
        setState({ ...state, email: e.target.value, success: '', error: '' });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        // console.log('post email to ', email);
        try {
            const response = await axios.put(`http://localhost:8000/api/forgot-password`, { email });
            // console.log('FORGOT PASSWORD', response);
            setState({
                ...state,
                email: '',
                buttonText: 'Done',
                success: response.data.message
            });
        } catch (error) {
            console.log('FORGOT PW ERROR', error);
            setState({
                ...state,
                buttonText: 'Forgot Password',
                error: error.response.data.error
            });
        }
    };


    return (
        <React.Fragment> 
            <NavLogo className={true} />
            <Navigation />
            <div id="full-page">
                <div className="container-fluid main-page">
                    <div className="container bg-logo">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <img
                                    className="img-fluid gallery-lion"
                                    src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/Lion+Abt.svg"
                                    alt="Center Lion"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                        <h1>Forgot Password</h1>
                        <br />
                            {success && showSuccessMessage(success)}
                            {error && showErrorMessage(error)}
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input 
                                        id="email"
                                        type="email" 
                                        placeholder="Type your email" 
                                        value={email}
                                        name="email"
                                        onChange={handleChange} 
                                    />
                                </div>
                                <div>
                                    <button type="submit" className="btn">{buttonText}</button>
                                </div>
                            </form>
                    </div>
                
        </React.Fragment>
    );
};
export default ForgotPassword;
