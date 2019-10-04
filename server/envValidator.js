const envalid = require('envalid')
const { str, email, json,port } = envalid

const env = envalid.cleanEnv(process.env, {
    NODE_SERVER_PORT :  port({default : 3000}),
    // API_KEY:            str(),
    // ADMIN_EMAIL:        email({ default: 'admin@example.com' }),
    // EMAIL_CONFIG_JSON:  json({ desc: 'Additional email parameters' })
})
