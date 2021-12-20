import dark from "../assets/loadingfordark.gif";
import light from "../assets/loadingforlight.gif";

export default (props: { width: string; isDark: boolean }) => (
  <img width={props.width} src={props.isDark ? dark : light} alt="" />
);
