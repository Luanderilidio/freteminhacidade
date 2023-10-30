import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function isMobile() {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return matches;
}
