const environments = {};
environments.staging = {
    port : 3000,
    envName: 'staging',
};
environments.production = {
    port : 5000,
    envName: 'staging',
};
//determine which environment was passed
const currentEnvironment = typeof(process.env.NODE_ENV) === 'string' ? process.env.NODE_ENV : 'staging';

//export corresponding environment object
const environmentToExport = typeof(environ[currentEnvironment]) === 'object' ? environ[currentEnvironment] : environments.staging; 

//export module
module.exports = environmentToExport;