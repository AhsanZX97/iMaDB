import React from 'react';


export const Navbar = (props) => {
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
                            <h1>MoviesDB Search</h1>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
