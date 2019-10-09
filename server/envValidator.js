const envalid = require('envalid')
const { str, email, json,port } = envalid

const env = envalid.cleanEnv(process.env, {
    NODE_SERVER_PORT :  port({default : 3000}),
    NEO4J_PROTOCOL  : str({default: 'bolt'}),
    NEO4J_HOST: str({default: 'localhost'}),
    NEO4J_USERNAME : str



    // API_KEY:            str(),
    // ADMIN_EMAIL:        email({ default: 'admin@example.com' }),
    // EMAIL_CONFIG_JSON:  json({ desc: 'Additional email parameters' })
})

NEO4J_PROTOCOL=bolt
NEO4J_HOST=localhost
NEO4J_USERNAME=neo4j
NEO4J_PASSWORD=neo4j
NEO4J_PORT=7687
