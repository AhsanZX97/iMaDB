import React from 'react'

export default class MangaRow extends React.Component {
  add() {
    this.props.add();
  }

  render() {
    return <table key={this.props.manga.id}>
    <tbody>
      <tr>
        <td>
          <img alt="poster" width="120" src={this.props.manga.image_url}/>
        </td>
        <td>
          <h3>{this.props.manga.title}</h3>
          <p>{this.props.manga.synopsis}</p>
          <input type="button" onClick={this.add} value="Add"/>
        </td>
      </tr>
    </tbody>
  </table>
  }
}