import React from 'react';
import renderer from 'react-test-renderer';
import Navigation from '../components/Navigation';

it('Navigation snapshot', () => {
    const component = renderer.create(<Navigation appName="Test" />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

it('Displays appname based on prop', () => {
    const component = renderer.create(<Navigation appName="Test" />);

    const componentInstance = component.root;
    const componentInstanceProps = componentInstance.props;

    expect(componentInstanceProps.appName).toEqual('Test');
});
