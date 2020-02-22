import React from 'react';
import Modal from 'react-responsive-modal';



export const LoginModal = (props) => {
    return (
        <div>
            <Modal open={props.login} onClose={props.onClose}>

                <div className="modal-body">
                    <h2>Login and Get <span>Started</span></h2>
                    <span className="subtitle">Just fill in the form below</span>
                    <form className="contact-form form-validate4" onSubmit={props.onLoginSubmit}>
                        <div className="form-group">
                            <input className="form-control" type="text" name="loginUsername" placeholder="Username" required value={props.loginUsername} onChange={props.onChange}/>
                        </div>
                        <div className="form-group">
                            <input type="password" name="loginPassword" className="form-control" placeholder="Password" required value={props.loginPassword} onChange={props.onChange}/>
                        </div>
                        <input className="btn btn-md btn-primary btn-center" id="login_btn" type="submit" value="Login" />
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export const SignModal = props => {

    return (

        <Modal open={props.sign} onClose={props.onClose}>
            <div className="modal-body">
                <h2>Get Started Absolutely<span> Free!</span></h2>
                <form className="contact-form form-validate3" onSubmit={props.onRegisterSubmit}>
                    <div className="form-group">
                        <input className="form-control" type="text" name="registerUsername" id="username" placeholder="User Name" value={props.registerUsername} onChange={props.onChange} required/>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="email" name="registerEmail" placeholder="E-mail" value={props.registerEmail} onChange={props.onChange} required/>
                    </div>
                    <div className="form-group">
                        <input type="password" name="registerPassword" className="form-control" placeholder="Password" value={props.registerPassword} onChange={props.onChange} required/>
                    </div>
                    <input className="btn btn-md btn-primary btn-center" id="sign_up" type="submit" value="Sign Up" />
                </form>
            </div>
        </Modal>
    )
}