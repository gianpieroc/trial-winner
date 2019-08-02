import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Input from "../../components/Input";
import Button from "../../components/Button";
import { updateParty } from "../../redux/actions";
import { validateCorrectRoles, calculatePoints } from "../../utils";
import "./party.scss";

const PartyContainer = ({
  party,
  changePartySignature,
  addPartySignature,
  deleteLastSignature,
  ...props
}) => {
  const { name, signatures = "" } = party;

  return (
    <div className="party-container column" {...props}>
      <h4>{name}</h4>
      <div className="row">
        <Button
          type="button"
          label="Add K"
          onClick={addPartySignature({ name, signatures, charToAdd: "K" })}
        />
        <Button
          type="button"
          label="Add V"
          onClick={addPartySignature({ name, signatures, charToAdd: "V" })}
        />
        <Button
          type="button"
          label="Add N"
          onClick={addPartySignature({ name, signatures, charToAdd: "N" })}
        />
        <Button
          type="button"
          label="<"
          onClick={deleteLastSignature({ name, signatures })}
        />
      </div>
      <div className="row">
        <Input
          type="text"
          value={signatures}
          onChange={changePartySignature(name)}
        />
      </div>
      <p>Points: {calculatePoints(signatures)}</p>
    </div>
  );
};

PartyContainer.propTypes = {
  party: PropTypes.shape({
    name: PropTypes.string,
    signatures: PropTypes.string,
    points: PropTypes.number
  })
};

const mapDispatchToProps = dispatch => ({
  changePartySignature: name => event =>
    dispatch(
      updateParty({
        name,
        signatures: validateCorrectRoles(event.target.value.toUpperCase())
      })
    ),
  addPartySignature: ({ name, signatures, charToAdd }) => () =>
    dispatch(updateParty({ name, signatures: signatures + charToAdd })),
  deleteLastSignature: ({ name, signatures }) => () =>
    dispatch(
      updateParty({
        name,
        signatures: signatures.length > 0 ? signatures.slice(0, -1) : signatures
      })
    )
});

export default connect(
  null,
  mapDispatchToProps
)(PartyContainer);
