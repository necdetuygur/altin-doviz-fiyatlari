import dark from "../loadingfordark.gif";
import light from "../loadingforlight.gif";

export default (props: { width: string }) => (
  <img width={props.width} src={dark} alt="" />
);
