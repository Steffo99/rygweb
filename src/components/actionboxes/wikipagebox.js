import { Component } from 'preact';
import style from './wikipagebox.css';
import Loading from '../loading';
import MarkdownRenderer from '../renderers/markdownrenderer';
import Box from '../box';

export default class WikiPageBox extends Component {
	constructor() {
		super();
		this.state = {
			"data": null
		};
	}

	componentDidMount() {
		this.getData();
	}

	getData = () => {
		fetch("https://rygapi.steffo.eu/api/wiki/get/v1?id=" + this.props.page_id).then((response) => {
			return response.json();
		}).then((json) => {
			this.setState({"data": json.data});
		})
	};

	render() {
		let page_contents;
		if(this.state.data === null) {
			page_contents = <Loading/>
		}
		else if(this.state.data.format === "markdown") {
			page_contents = (
				<div>
					<h1 className={style.title}>{this.props.data.title}</h1>
					<MarkdownRenderer data={this.state.data}/>
				</div>
			)
		}
		else {
			page_contents = "Formato sconosciuto: " + this.state.data.format;
		}

		let right = (
			<a href={`/wiki/${this.props.pageId}/edit`}>Modifica</a>
		);

		return (
			<Box left={"Pagina Wiki"} right={right}>
				{page_contents}
			</Box>
		);
	}
}
