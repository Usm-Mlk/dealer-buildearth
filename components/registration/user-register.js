import {Fragment ,useState, useEffect} from 'react';
import axios from 'axios';
import Router from 'next/router';
import {showSuccessMessage, showErrorMessage} from '../../helpers/alerts';
import {isAuth} from '../../helpers/auth';



const UserRegister= (props) => {
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        address: '',
        cellPhone: '',
        cnicNumber: '',
        city: '',
        country: '',
        success: '',
        error: '',
        buttonText: 'Register'
    });
    useEffect(()=>{
        isAuth() && Router.push('/');
    }, []);
    const handleChange = (name) => (e) => {
        setState({...state, [name]: e.target.value, error:'', success:'', buttonText:'Register' })
    }
    const { firstName, lastName ,email, password, address, cellPhone, cnicNumber, city, country, error, success, buttonText} = state;
    const handleSubmit = async e =>{
        e.preventDefault();
        setState({...state, buttonText:'Registering'});
        try{
            const response = await axios.post(`http://localhost:3000/api/register`, {
                firstName,
                lastName,
                email,
                password,
                address,
                cellPhone,
                cnicNumber,
                city,
                country
            })
            console.log(response);
            setState({
                ...state,
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                address: '',
                cellPhone: '',
                cnicNumber: '',
                city: '',
                country: '',
                buttonText:'Submitted',
                success: response.data.message
            });
        }
        catch(error){
            console.log(error);
            setState({...state,
                buttonText:'Register',
                error: error.response.data.error
            });
        }
    }

    return(
        <Fragment>
            {success && showSuccessMessage(success)}
            <div className="base-container" ref={props.containerRef}>
                <div className="header">REGISTRATION FORM <hr /> </div>
            {error && showErrorMessage(error)}
                <form onSubmit={handleSubmit}>
                    <div className="content">
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input 
                                    id="firstName"
                                    type="text" 
                                    label='First Name' 
                                    placeholder="Enter your first name" 
                                    value={firstName}
                                    name="firstName"
                                    onChange={handleChange('firstName')} 
                                />
                            </div>
                        </div>
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input 
                                    id="lastName"
                                    type="text" 
                                    placeholder="Enter your last name" 
                                    value={lastName}
                                    name="lastName"
                                    onChange={handleChange('lastName')} 
                                />
                            </div>
                        </div>
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input 
                                    id="email"
                                    type="email" 
                                    placeholder="Enter your email address" 
                                    value={email}
                                    name="email"
                                    onChange={handleChange('email')} 
                                />
                            </div>
                        </div>
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input 
                                    id="password"
                                    type="password" 
                                    placeholder="Enter your password" 
                                    value={password}
                                    name="password"
                                    onChange={handleChange('password')} 
                                />
                            </div>
                        </div>
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="address">Address</label>
                                <input 
                                    id="address"
                                    type="text" 
                                    placeholder="Enter your address" 
                                    value={address}
                                    name="address"
                                    onChange={handleChange('address')} 
                                />
                            </div>
                        </div>
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="cellPhone">Cell#</label>
                                <input 
                                    id="cellPhone"
                                    type="text" 
                                    placeholder="Enter your cellphone number" 
                                    value={cellPhone}
                                    name="cellPhone"
                                    onChange={handleChange('cellPhone')} 
                                />
                            </div>
                        </div>
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="cnicNumber">CNIC#</label>
                                <input 
                                    id="cnicNumber"
                                    type="text" 
                                    placeholder="Enter your cnic number" 
                                    value={cnicNumber}
                                    name="cnicNumber"
                                    onChange={handleChange('cnicNumber')} 
                                />
                            </div>
                        </div>
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="city">City#</label>
                                <input 
                                    id="city"
                                    type="text" 
                                    placeholder="Enter your city" 
                                    value={city}
                                    name="city"
                                    onChange={handleChange('city')} 
                                />
                            </div>
                        </div>
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="country">Country</label>
                                <input 
                                    id="country"
                                    type="text" 
                                    placeholder="Enter your country" 
                                    value={country}
                                    name="country" 
                                    onChange={handleChange('country')} 
                                />
                            </div>
                        </div>
                    </div>
                    <div className="footer1">
                    <button type="submit" className="btn">{buttonText}</button>
                    </div>
                </form>
            </div>
        </Fragment>
        
    )
}
export default UserRegister