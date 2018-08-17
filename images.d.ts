declare module 'react-dom'
declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module 'styled-theming';
// https://github.com/apollographql/graphql-tag/issues/59#issuecomment-302393028
declare module '*.graphql' {
    import { DocumentNode } from 'graphql';

    const value: DocumentNode;
    export = value;
}
