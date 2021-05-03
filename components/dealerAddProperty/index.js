import React from "react";
import Head from 'next/head'
import { NavLogo } from "components/commons";
import { Navigation } from "components/home/components";

import Form from './form'

const Registration = () => {

    return (
        <React.Fragment> 
            <NavLogo className={true} />
            <Navigation />
            <div id="full-page">
                <div className="container-fluid main-page">
                    <Form />
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
            </div>
        </React.Fragment>
    )
}
export default Registration