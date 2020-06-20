import ReactMarkdown from 'react-markdown';
import AnyLink from '../Elements/AnyLink';

export default function (props) {
	return (
		<ReactMarkdown source={props.children} renderers={{
			"link": AnyLink
		}}/>
	);
}
