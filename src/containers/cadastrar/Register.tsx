import * as React from 'react';
import Formulario from '../../components/Formulario/Formulario';
import * as MutationRegister from './MutationRegister.graphql';
import { graphql } from 'react-apollo';

class Register extends React.Component {

    
    render() {
        return (
            <form action="" method="POST" role="form">
                <legend>Form title</legend>
                <Formulario {...this.props} />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}
export default graphql(MutationRegister, {
    name: 'MutationRegister'
})(Register);