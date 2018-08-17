import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpUri = process.env.REACT_APP_HTTP_URI;

const httpLink = new HttpLink({
    uri: httpUri
});

export const defaultClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink
});

export interface IStoreProviderProps {
    children: React.ReactNode;
    client?: ApolloClient<{}>;
}

export const StoreProvider: React.SFC<IStoreProviderProps> = ({
    children,
    client = defaultClient,
}) => {
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    );
};

export default StoreProvider;