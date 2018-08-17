import * as React from 'react';
import { IDataProps } from '../../containers/home/Types';
export default class Lista extends React.Component<IDataProps> {
	render() {
		const { data } = this.props;
		const { allTodoes } = data;

		return (
			<div>
				<ul>
					<li>
						{allTodoes.map(element => element.name)}
					</li>
				</ul>
			</div>
		)
	}
}
