import { connect } from "react-redux";
import { createDmMembership } from "../../actions/dm_membership_actions";
import CreateDmMembershipForm from "./create_dm_membership_form";
import { removeErrors } from "../../actions/session_actions";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
  return {
    currentMemberId: state.session.id,
    dms: state.entities.dms,
    channels: state.entities.channels,
    closeModal: ownProps.closeModal,
    guildId: ownProps.guildId,
    errors: state.session.errors
  };
};

const mapDispatchToProps = dispatch => ({
  createDmMembership: dm_membership =>
    dispatch(createDmMembership(dm_membership)),
  removeErrors: () => dispatch(removeErrors())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CreateDmMembershipForm)
);
