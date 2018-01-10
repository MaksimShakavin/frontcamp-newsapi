import App from './components/app';
import Store from './store/store'
import '../styles/main.css'

window.addEventListener('load',() => {
    const store = new Store();
    const app = new App(store);
});