import 'raf/polyfill';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme';
import Async from './src';


Enzyme.configure({ adapter: new Adapter() });

class HelloWorldComponent extends React.Component {
  render() {
    return <h1>Hello world!</h1>;
  }
}

const HelloWorldFuncComponent = () => <h1>Hello world!</h1>;

describe('<Split>', () => {
  [
    ['class component',Promise.resolve(HelloWorldComponent)],
    ['function component', Promise.resolve(HelloWorldFuncComponent)],
    ['function returning a class component', () => Promise.resolve(HelloWorldComponent)],
    ['function returning a function component', () => Promise.resolve(HelloWorldFuncComponent)],
  ].forEach(([name, comp]) => it('works with a ' + name, () => {
    return new Promise((resolve) => {
      const component = <Async load={comp} />;
      const mounted = mount(component);
      setTimeout(() => {
        expect(mounted.html()).toEqual('<h1>Hello world!</h1>');
        resolve();
      }, 30);  // 30 msec should be enough for the rerender
    });
  }));
});
