import {Fragment ,useState, useEffect} from 'react'
import axios from 'axios'
import Router from 'next/router'
import {showSuccessMessage, showErrorMessage} from '../../helpers/alerts'


const Form= (props) => {
    const [state, setState] = useState({
        societyName: '',
        type: '',
        marlas: '',
        minimumPrice: '',
        maximumPrice: '',
        success: '',
        error: '',
        buttonText: 'Enter new Property'
    });
    const handleChange = (name) => (e) => {
        setState({...state, [name]: e.target.value, error:'', success:'', buttonText:'Enter new Property' })
    }
    const { societyName, type, marlas ,minimumPrice , maximumPrice, error, success, buttonText} = state
    const handleSubmit = async e =>{
        e.preventDefault();
        setState({...state, buttonText:'Registering'});
        try{
            const response = await axios.post(`your endpoint`, {
                societyName,
                type,
                marlas,
                minimumPrice,
                maximumPrice
            })
            console.log(response);
            setState({
                ...state,
                societyName: '',
                marlas: '',
                type: '',
                minimumPrice: '',
                maximumPrice: '',
                buttonText:'Entered',
                success: response.data.message
            });
        }
        catch(error){
            console.log(error);
            setState({...state,
                buttonText:'Enter new Property',
                error: error.response.data.error
            });
        }
    }

    return(
        <Fragment>
            {success && showSuccessMessage(success)}
            <div className="base-container" ref={props.containerRef}>
                <div className="header">Add New Property <hr /> </div>
            {error && showErrorMessage(error)}
                <form onSubmit={handleSubmit}>
                    <div className="content">
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="society">Select Society</label>
                                <select name="society" id="society" form="societyform">
                                    <option value="Al Jalil Gardens">Al Jalil Gardens</option>
                                    <option value="Al Noor Orchard">Al Noor Orchard</option>
                                    <option value="West Marina">West Marina</option>
                                </select>
                            </div>
                        </div>
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="type">Select Type</label>
                                <select name="type" id="cars" form="typeform">
                                    <option value="Residental">Residental</option>
                                    <option value="Commercial">Commercial</option>
                                </select>
                            </div>
                        </div>
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="area">Select Marlas</label>
                                <select name="area" id="area" form="areaform">
                                    <option value="3 Marla">3 Marla</option>
                                    <option value="5 Marla">5 Marla</option>
                                    <option value="10 Marla">10 Marla</option>
                                    <option value="1 Kanal">1 Kanal</option>
                                </select>
                            </div>
                        </div>
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="password">Minimum Range</label>
                                <input type="number" id="quantity" name="quantity" min="1" max="5" />
                            </div>
                        </div>
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="password">Maximum Range</label>
                                <input type="number" id="quantity" name="quantity" min="1" max="5" />
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
export default Form