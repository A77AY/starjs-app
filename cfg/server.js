import {Config} from 'starjs/server'
import path from 'path'

export default new Config({
    server: {
        host: 'localhost',
        port: 8080
    },
    env: {
        development: {
            server: {
                port: 80
            }
        }
    },
    rootPath: path.join(__dirname, '..')
});