import {Fragment ,useState, useEffect} from 'react'
import jwt from 'jsonwebtoken'
import axios from 'axios'
import {showSuccessMessage, showErrorMessage} from '../../helpers/alerts'
import {withRouter} from 'next/router'


const ActivateAccount = ({router}) => {
    const [state, setState] = useState({
        firstName: '',
        token: '',
        buttonText: 'Activate Account',
        success:'',
        error:''
    })
    const {firstName, token, buttonText, success, error} = state

    useEffect(()=>{
        let token = router.query.id;
        if(token){
            const { firstName } = jwt.decode(token)
            setState({ ...state, firstName, token})
        }
    },[router])
    const clickSubmit = async e =>{
        e.preventDefault();
        // console.log('activate account');
        setState({...state, buttonText: 'Activating'})
        try{
            const response = await axios.post(`http://localhost:8000/api/register/activate`, {token})
            console.log('account activate response', response)
            setState({...state, firstName: '', token:'', buttonText:'Activated', success: response.data.message})
        }catch(error){
            setState({...state, buttonText:'Activate Account', error:error.response.data.error})
        }
    };
    return (
        <Fragment> 
            <div id="full-page">
            
                    <h1>G'day {firstName}, Ready to activate your account? <br /></h1>
                    <span>Click the button below to activate your account </span>
                    <br />
                    {success && showSuccessMessage(success)}
                    {error && showErrorMessage(error)}
                    <button type="submit" className="btn" onClick={clickSubmit}>
                        {buttonText}
                    </button>
                    <a href="/login">
                    <button type="submit" className="btn">
                        Go to Login
                    </button>
                    </a>

            </div>  
        </Fragment>
        
    )
}
export default withRouter(ActivateAccount);