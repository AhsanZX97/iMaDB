import React, { Component } from 'react';

export default class Navbar extends Component {

    render() {

        console.log(this.props.token)

        const notOnline = (
            <div>
                <td>
                    <button onClick={this.props.onOpenModalLogin}>Log In</button>
                </td>
                <td>
                    <button onClick={this.props.onOpenModal}>Sign Up</button>
                </td>
            </div>
        )

        const online = (
            <div>
                <td>
                    <button>{this.props.username}</button>
                </td>
                <td>
                    <button onClick={this.props.logOut}>Log Out</button>
                </td>
            </div>
        )

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
                            {this.props.token ? online : notOnline}
                        </tr>
                    </tbody>
                </table>

            </div>
        )
    }
}
