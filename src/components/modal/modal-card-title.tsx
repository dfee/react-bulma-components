import classNames from "classnames";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type ModalCardTitleProps = HelpersProps;

export const ModalCardTitle = forwardRefAs<ModalCardTitleProps>(
  ({ className, ...rest }, ref) => (
    <Generic
      className={classNames("modal-card-title", className)}
      ref={ref}
      {...rest}
    />
  ),
  { as: "p" },
);

ModalCardTitle.displayName = "Modal.Card.Title";
