import * as APIUtil from "../util/dm_membership_api_util";
import { receiveErrors, RECEIVE_SESSION_ERRORS } from "./session_actions";

export const RECEIVE_DM_MEMBERSHIP = "RECEIVE_DM";
export const RECEIVE_DM_MEMBERSHIPS = "RECEIVE_DM_MEMBERSHIPS";

export const receiveDmMembership = dm => ({
  type: RECEIVE_DM_MEMBERSHIP,
  dm_membership
});

export const receiveDmMemberships = dm_memberships => ({
  type: RECEIVE_DM_MEMBERSHIPS,
  dm_memberships
});

export const fetchDmMemberships = () => dispatch => {
  return APIUtil.fetchMemberships().then(
    dm_memberships => dispatch(receiveDmMemberships(dm_memberships)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const createDmMembership = dm_membership => dispatch => {
  return APIUtil.createDmMembership(dm_membership).then(
    dm_membership => dispatch(receiveDmMembership(dm_membership)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};
