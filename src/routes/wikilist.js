import { Component } from 'preact';
import style from './wikilist.less';
import Loading from '../components/loading';
import Box from '../components/box';
import Link from '../components/link';

export default class WikiList extends Component {
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
		fetch("https://rygapi.steffo.eu/api/wiki/list/v1").then((response) => {
			return response.json();
		}).then((json) => {
			this.setState({"data": json.data});
		})
	};

	render() {
		let pages;
		if(this.state.data === null) {
			pages = <Loading/>
		}
		else {
			pages = this.state.data.map((page) => {
				return (
					<li>
						<Link href={"/wiki/" + page.page_id}>{page.title}</Link>
					</li>
				)
			})
		}

		let right = <a href={"/wiki/new"}>Nuova</a>;

		return (
			<Box left={"Indice Wiki"} right={right}>
				<ul class={style.list}>
					{pages}
				</ul>
			</Box>
		);
	}
}
