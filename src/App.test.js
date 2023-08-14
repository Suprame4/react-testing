/** @jest-environment jsdom */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { App } from './App';

/**
 * Verify something should render
 */
test('App should render', () => {
  render(<App />);

  // see the HTML output with debug()
  screen.debug();

  expect(screen.getByText('Welcome, party people!')).toBeInTheDocument();
});

test('Button should render', () => {
  // TODO: change the expect to actually test something 😉
  expect('no test written').toBe('tested');
});

/**
 * Verify clicking button should change theme
 * hint: use fireEvent.click(element) to trigger a click event on an element
 */
test('theme button should update button text', () => {
  // TODO: change the expect to actually test something 😉
  expect('no test written').toBe('tested');
});

// BONUS
// hint: there is a `.toHaveStyle` method.
// e.g.: expect(element).toHaveStyle('color: #FFF');
test('theme button should toggle styles', () => {
  // TODO: change the expect to actually test something 😉
  expect('no test written').toBe('tested');
});

/**
 * Verify clicking button should toggle hidden content
 *
 * hint: you can check if something does not exist by using .not
 * e.g. expect(element).not.toBeInTheDocument()
 *
 * hint: use `queryByText` instead of `getByText` to check if something is _not_ rendered
 * (getByText will throw an error if it is not rendered)
 */
test('hidden button should toggle hidden content', () => {
  // TODO: change the expect to actually test something 😉
  expect('no test written').toBe('tested');
});


/**
 * Want more? Try these:
 *   - check for the presence of a specific element, like the paragraph containing the text "Click the button to toggle the theme"
 *   - check the for the class name .container on the surrounding div
 *   - after clicking the toggle hidden content button, check for the button text to update to "hide" instead of "show"
 */


/** 
 *  REACT TESTING LIBRARY 
 *
 */
describe( 'App', () => {

  it('render App component', () => {

    // Arrange 
    render(<App/>);

    // Assert
    // implicit assertion
    // because getByText would throw error
    // if element wouldn't be there
    screen.getByText('Search:');

    // explicit assertion
    // recommended
    expect(screen.getByText('Search:')).toBeInTheDocument();

    /*
      the getByText function accepts a string as an argument, but also a regular expression

        Whereas a string argument is used for the exact match, a regular expression can be
        used for a partial match which is often more convenient 
    */

    // fails
    expect(screen.getByText('Search')).toBeInTheDocument();

    // succeeds
    expect(screen.getByText('Search:')).toBeInTheDocument();

    // succeeds
    expect(screen.getByText(/Search/)).toBeInTheDocument();
  })

  /**
   * SEARCH Types
   *    Text is often the common way to select elements with React Testing Library,
   *    another strong is Role with getByRole
   * 
   *    The getByRole function is usually used to retrieve elements by aria-label attributes.
   *    However, there are also implicit roles on HTML elements -- like button for a button
   *    element 
   * 
   *      The neat thing about getByRole: it shows all the selectable roles if you provide a role
   *      that isn't available in the rendered component's HTML
   */
  it('getByRole search type', () => {
    
    // Arrange
    render(<App/>);


    //implicit assert
    screen.getByRole('');
  })

  
})