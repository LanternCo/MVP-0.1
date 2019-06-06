// Link.react.test.js
import React from "react";
import Navigation from "../components/Navigation";
// @TODO - figure out what the difference between these two are.
import renderer from "react-test-renderer";
import { render, fireEvent } from 'test-utils';

it("Navigation snapshot", () => {
    const component = renderer.create(
        <Navigation appName="Test" />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

it('Displays appname based on prop', () => {
    const component = renderer.create(
        <Navigation appName="Test" />
    );

    const componentInstance = component.root;
    const componentInstanceProps = componentInstance.props;

    expect(componentInstanceProps.appName).toEqual('Test');
  });
