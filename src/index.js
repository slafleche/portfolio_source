// Test import of a JavaScript module
import { example } from '@/js/example'

// // Test import of an asset
// import webpackLogo from '@/images/webpack-logo.svg'

// Test import of styles
import '@/styles/index.scss';

const heading = document.createElement('h1');
heading.textContent = example();

const app = document.querySelector('#root');
app.append(heading);
