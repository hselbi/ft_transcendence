import React, { forwardRef, ReactNode } from "react";
import PropTypes from "prop-types";
import { m } from "framer-motion";
// @mui
import { Box, IconButton } from "@mui/material";
import { IconButtonProps } from "@mui/material/IconButton"; // Import IconButtonProps

interface IconButtonAnimateProps extends IconButtonProps {
  children: ReactNode;
  size?: "small" | "medium" | "large";
}
// ----------------------------------------------------------------------
// forwardRef<any, {}>(render: ForwardRefRenderFunction<any, {}>): ForwardRefExoticComponent<RefAttributes<any>>
const IconButtonAnimate = forwardRef<HTMLButtonElement, IconButtonAnimateProps>(
  ({ children, size = "medium", ...other }, ref) => (
    <AnimateWrap size={size}>
      <IconButton size={size} ref={ref} {...other}>
        {children}
      </IconButton>
    </AnimateWrap>
  )
);

IconButtonAnimate.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf([
    "inherit",
    "default",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
  ]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default IconButtonAnimate;

// ----------------------------------------------------------------------

const varSmall = {
  hover: { scale: 1.1 },
  tap: { scale: 0.95 },
};

const varMedium = {
  hover: { scale: 1.09 },
  tap: { scale: 0.97 },
};

const varLarge = {
  hover: { scale: 1.08 },
  tap: { scale: 0.99 },
};

AnimateWrap.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

function AnimateWrap({ size, children }: any) {
  const isSmall = size === "small";
  const isLarge = size === "large";

  return (
    <Box
      component={m.div}
      whileTap="tap"
      whileHover="hover"
      variants={(isSmall && varSmall) || (isLarge && varLarge) || varMedium}
      sx={{
        display: "inline-flex",
      }}
    >
      {children}
    </Box>
  );
}
