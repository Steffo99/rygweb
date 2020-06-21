import style from "../Layout/Header.less";
import { concatClass } from 'bluelib';


export default function (props) {
	return (
		<img src={props.src} alt={props.alt} class={concatClass(style.icon, props.class)}/>
	);
}
