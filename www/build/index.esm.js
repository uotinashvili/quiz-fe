import { A as ActiveRouter } from './active-router-12f88a8e.js';
import './match-path-02f6df12.js';
import './index-a2ee93c8.js';
import './location-utils-6419c2b3.js';

function injectHistory(Component) {
    ActiveRouter.injectProps(Component, ['history', 'location']);
}
