import React, { Component } from 'react';
import { LoginModal, SignModal } from './Modals'

export default class Navbar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            sign: false,
            login: false,

        }
    }

    onOpenModal = () => {
        this.setState({ sign: true });
    };

    onOpenModalLogin = () => {
        this.setState({ login: true });
    };

    onCloseModal = () => {
        this.setState({ sign: false });
    };

    onCloseModalclose = () => {
        this.setState({ login: false });
    };

    render() {
        const { login, sign } = this.state;
        return (
            <div>
                <table className="titleBar">
                    <tbody>
                        <tr>
                            <td>
                                <img alt="app icon" width="50" src="green_app_icon.svg" />
                            </td>
                            <td width="8" />
                            <td>
                                <h1>MangaDB Search</h1>
                            </td>
                            <td>
                                <button onClick={this.onOpenModalLogin}>Log In</button>
                            </td>
                            <td>
                                <button onClick={this.onOpenModal}>Sign Up</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <LoginModal login = {login} onClose = {this.onCloseModalclose}/>
                <SignModal sign = {sign} onClose = {this.onCloseModal}/>
            </div>
        )
    }
}
