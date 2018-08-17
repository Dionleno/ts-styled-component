import * as React from 'react';
import { graphql, ChildProps } from 'react-apollo';
import { Link } from 'react-router-dom';
import * as listUsersQuery from './listUsersQuery.graphql';
import Lista from '../../components/Lists/Lista';
import { IDataProps } from './Types';

class Home extends React.Component<ChildProps<IDataProps>> {

	render() {
		const { data } = this.props;
		const { loading } = data;
		if (loading) {
			return 'carregando ...';
		}
		return (
			<div>
				<Lista {...this.props} />
				<Link to="/cadastrar">Ir para a página sobre \o/</Link>
			</div>
		);
	}
}


export default graphql(listUsersQuery)(Home);
