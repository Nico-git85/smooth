import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

class RandTabel extends Component {
  render() {
    const { operator, corectezOper, stergOper } = this.props;
    const { nume, numePrenume, email, locatie, id } = operator;
    return (
      <tr>
        <td>{nume}</td>
        <td>{numePrenume}</td>
        <td>{email}</td>
        <td>{locatie}</td>
        <td>
          <button className="btn btn-link" onClick={corectezOper} id={id}>
            <FontAwesomeIcon icon={faUserEdit} />
          </button>
          <button className="btn btn-link" onClick={stergOper} id={id}>
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </td>
      </tr>
    );
  }
}

export default RandTabel;
