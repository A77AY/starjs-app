import {Server} from 'starjs/server'

import cfg from '../cfg/server'
import routes from '_/pages/routes'
import {Template} from '_/pages'

const server = new Server(cfg.server.port, cfg.server.host);

server.setRoutes(routes, Template);
server.setPublic(cfg.absPathFromRoot(cfg.structure.public));
server.run();