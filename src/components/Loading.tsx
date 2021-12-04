import dark from "../assets/loadingfordark.gif";
import light from "../assets/loadingforlight.gif";

export default (props: { width: string }) => (
  <img width={props.width} src={dark} alt="" />
);
