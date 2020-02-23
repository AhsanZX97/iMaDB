import React, { Component } from 'react';

export default class Navbar extends Component {

    render() {

        console.log(this.props.token)

        const notOnline = (
            <div>
                <td>
                    <button onClick={this.props.onOpenModalLogin} class="btn btn-outline-success my-2 my-sm-0">Log In</button>
                </td>
                <td>
                    <button class="btn btn-outline-success my-2 my-sm-0" onClick={this.props.onOpenModal} >Sign Up</button>
                </td>
            </div>
        )

        const online = (
            <div>
                <td>
                    <button class="btn btn-outline-success my-2 my-sm-0">{this.props.username}</button>
                </td>
                <td>
                    <button class="btn btn-outline-success my-2 my-sm-0" onClick={this.props.logOut}>Log Out</button>
                </td>
            </div>
        )

        return (
            <div>

                <nav class="navbar navbar-dark bg-dark">
                    <span class="navbar-brand">MangaDB Search</span>
                    <div class="my-2 my-lg-0">
                        {this.props.token ? online : notOnline}
                    </div>
                </nav>

            </div>
        )
    }
}

/*

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

*/
