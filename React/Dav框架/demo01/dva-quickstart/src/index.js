import dva from 'dva';
import './index.css';
import {createBrowserHistory as createHistory} from 'history'
//初始化
// 使用createHistory可以使用斜杠路由，而不使用hash（#）路由
const app = dva({
  history: createHistory(),
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
app.model(require('./models/indexTest').default)
// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
