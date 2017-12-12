import Template from './template.js'
import View from './view.js'
import Model  from './model.js'
import Controller from './controller.js'
import 'babel-polyfill'
import 'whatwg-fetch'
import './polyfills.js'
import '../styles/main.css'
import './test.json'

const NEWS_API_KEY ='e2d9e5feaf2a47cd823a16fd53c12359';

const template = new Template();
const view = new View(template);
const model = new Model(NEWS_API_KEY);
const controller = new Controller(view,model);

export default () => controller.initApp();

