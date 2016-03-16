import {Client} from 'starjs/client'
import routes from '_/pages/routes'

const client = Client.Id('app');
client.setRoutes(routes);
client.render();