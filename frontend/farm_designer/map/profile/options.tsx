import React from "react";
import { t } from "../../../i18next_wrapper";
import { Actions } from "../../../constants";
import { ToggleButton } from "../../../controls/toggle_button";
import { ProfileOptionsProps } from "./interfaces";

/** Profile viewer settings. */
export const ProfileOptions = (props: ProfileOptionsProps) =>
  <div className={"profile-options"}>
    <label>{t("axis")}</label>
    <ToggleButton
      toggleValue={props.axis == "y"}
      toggleAction={() => props.dispatch({
        type: Actions.SET_PROFILE_AXIS,
        payload: props.axis == "x" ? "y" : "x",
      })}
      customText={{ textTrue: "x", textFalse: "y" }} />

    <label>{t("width")}</label>
    <input type={"number"} value={props.selectionWidth}
      onChange={e => props.dispatch({
        type: Actions.SET_PROFILE_WIDTH,
        payload: parseInt(e.currentTarget.value),
      })} />

    <label>{t("follow")}</label>
    <ToggleButton
      toggleValue={props.followBot}
      toggleAction={() => props.dispatch({
        type: Actions.SET_PROFILE_FOLLOW_BOT,
        payload: !props.followBot,
      })} />

    <i className={`fa fa-chevron-${props.expanded ? "down" : "up"}`}
      title={props.expanded ? t("collapse") : t("expand")}
      onClick={() => props.setExpanded(!props.expanded)} />
  </div>;
