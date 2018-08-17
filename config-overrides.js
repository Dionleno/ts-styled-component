const path = require('path');
const configPaths = require('react-scripts-ts/config/paths');

const RewireGraphQL = (config, env) => {
    const graphqlLoader = {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, "src"),
        loader: 'graphql-tag/loader'
    };

    config.resolve.extensions = config.resolve.extensions.concat(['.gql', '.graphql']);

    config.module.rules = config.module.rules.map((rule) => {
        const { oneOf } = rule;

        if (Array.isArray(oneOf)) {
            rule.oneOf = [graphqlLoader].concat(rule.oneOf);
        }
        return rule;
    });

    return config;
};
module.exports = function override(config, env) {
    config = RewireGraphQL(config, env)
    return config;
}