import { Fragment ,useState, useEffect } from 'react';
import axios from 'axios';
import { showSuccessMessage, showErrorMessage } from '../../helpers/alerts';
import Router, { withRouter } from 'next/router';
import jwt from 'jsonwebtoken';

const ResetPassword = ({ router }) => {
    const [state, setState] = useState({
        firstName: '',
        token: '',
        newPassword: '',
        buttonText: 'Reset Password',
        success: '',
        error: ''
    });
    const { firstName, token, newPassword, buttonText, success, error } = state;
    useEffect(() => {
        const decoded = jwt.decode(router.query.id);
        if (decoded) setState({ ...state, firstName: decoded.firstName, token: router.query.id });
    }, [router]);
    const handleChange = e => {
        setState({ ...state, newPassword: e.target.value, success: '', error: '' });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        // console.log('post email to ', email);
        setState({...state, buttonText:'Updating'});
        try {
            const response = await axios.put(`http://localhost:8000/api/reset-password`, { resetPasswordLink:token, newPassword });
            // console.log('FORGOT PASSWORD', response);
            setState({
                ...state,
                newPassword: '',
                buttonText: 'Done',
                success: response.data.message
            });
        } catch (error) {
            console.log('RESET PW ERROR', error);
            setState({
                ...state,
                buttonText: 'Reset Password',
                error: error.response.data.error
            });
        }
    };

    // const passwordResetForm = () => (
    //     <form onSubmit={handleSubmit}>
    //         <div className="mb-3">
    //             <input
    //                 type="password"
    //                 className="form-control"
    //                 onChange={handleChange}
    //                 value={newPassword}
    //                 placeholder="Type new password"
    //                 required
    //             />
    //         </div>
    //         <div>
    //             <button className="btn btn-outline-warning">{buttonText}</button>
    //         </div>
    //     </form>
    // )
    return (
        <Fragment>
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
                    <h1>Hi {firstName}, Ready to reset Password</h1>
                            {success && showSuccessMessage(success)}
                            {error && showErrorMessage(error)}
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input 
                                        type="password"
                                        className="form-control"
                                        onChange={handleChange}
                                        value={newPassword}
                                        placeholder="Type new password"
                                        required
                                    />
                                </div>
                                <div>
                                    <button className="btn">{buttonText}</button>
                                </div>
                            </form>
            </div>
        </Fragment>
    )
}
export default withRouter(ResetPassword);