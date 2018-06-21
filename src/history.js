import createBrowserHistory from 'history/createBrowserHistory';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import RootStore from './stores';

const store = new RootStore();

const browserHistory = createBrowserHistory();

const routingStore = new RouterStore();

const history = syncHistoryWithStore(browserHistory, routingStore);

export { history, store };