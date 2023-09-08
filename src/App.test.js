import userEvent from '@testing-library/user-event';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from "react-router-dom";
import "@testing-library/react";

// Tests for loading the page successfully: 
describe("Loading the landing page successfully", () => {
  it('should render React and Morty', () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    expect(screen.getByText(/React and Morty/i)).toBeInTheDocument();
  });

  it('should render the button for characters', () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    const buttonCharacters = screen.getByRole("button", {name: "Characters"});
    expect(buttonCharacters).toBeInTheDocument();
  });

  it('should render the button for locations successfully', () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    const buttonLocations = screen.getByRole("button", {name: "Locations"});
    expect(buttonLocations).toBeInTheDocument();
  });
});

// Tests for redirections from Landing-Page:
describe('Redirections from the Landing-Page', () => {

  it('should lead to Character-Page when clicking the Character-Button', async () => {
    render(<MemoryRouter><App /></MemoryRouter>);

    await userEvent.click(screen.getByRole("button", {name: "Characters"})); 

    await screen.findByText(/characters/);

    expect(screen.getByText(/characters/)).toBeInTheDocument();
  });

  it('should lead to Locations-Page when clicking the Locations-Button', async () => {
    render(<MemoryRouter><App /></MemoryRouter>);

    await userEvent.click(screen.getByRole("button", {name: "Locations"})); 

    await screen.findByText(/locations/);

    expect(screen.getByText(/locations/)).toBeInTheDocument();
  });

});

// Tests for redirection to Character-Page and further redirections from there:
describe('Redirection to Character-Page and further redirections from there', () => {

  it('should lead to Landing-Page when clicking on HOME', async () => {
    render(<MemoryRouter><App /></MemoryRouter>);

    await userEvent.click(screen.getByRole("button", {name: "Characters"})); 

    await screen.findByText(/HOME/);

    await userEvent.click(screen.getByText(/HOME/));

    expect(screen.getByRole("button", {name: "Characters"})).toBeInTheDocument();
  });
});


/*
// Tests for redirection to Character-Page and further redirections from there:
describe('Redirection to Character-Page and Card-Functionality', () => {

  it('should show additional infos after click on Character-Card-Frontside', async () => {
    render(<MemoryRouter><App /></MemoryRouter>);

    await userEvent.click(screen.getByRole("button", {name: "Characters"})); 

    await screen.findByText(/Name: Rick Sanchez/);

    const cardFrontside = screen.getByTestId('frontside');

    fireEvent.click(cardFrontside);

    await screen.findByText(/Characters/i);

    expect(screen.getByText("Additional infos")).toBeInTheDocument();
  });
});
*/
/*
  it('should lead to Locations-Page when clicking on locations', async () => {
    render(<MemoryRouter><App /></MemoryRouter>);

    await userEvent.click(screen.getByRole("button", {name: "Characters"})); 

    await screen.findByText(/HOME/i);

    expect(screen.getByText(/locations/i)).toBeInTheDocument();

    await userEvent.click(screen.getByText("locations"));

    expect(screen.getByText(/locations/i)).toBeInTheDocument();

  });

  it('should lead to Characters-Page when clicking on characters', async () => {
    render(<MemoryRouter><App /></MemoryRouter>);

    await userEvent.click(screen.getByRole("button", {name: "Locations"})); 

    await screen.findByText(/HOME/i);

    expect(screen.getByText(/characters/i)).toBeInTheDocument();

    await userEvent.click(screen.getByText("characters"));

    expect(screen.getByText("Characters")).toBeInTheDocument();

  });
*/



// FUNCTIONING: 
/*
// test for redirecting to Characters-Page:
test('redirect to Characters-Page successfully by clicking the Characters-Button', async () => {
  render(<MemoryRouter><App/></MemoryRouter>);

  const buttonCharacters = screen.getByRole("button", {name: "Characters"});

    userEvent.click(buttonCharacters);

  

  await waitFor(() => expect(screen.getByText(/Overview/)).toBeInTheDocument())
});
*/












/*
// test for redirecting to Locations-Page:
test('redirect to Locations-Page successfully by clicking the Locations-Button', () => {
  render(<MemoryRouter><App/></MemoryRouter>);
  const buttonLocations = screen.getByRole("button", {name: "Locations"});
  userEvent.click(buttonLocations);
  
  setTimeout( () => expect(screen.getByText(/Locations Overview/)).toBeInTheDocument(), 100);
});
*/
/*
// test for showing additional infos when clicking on a Character-Card: 
test('shows additional infos by clicking on Character-Card', () => {
  render(<MemoryRouter><App/></MemoryRouter>);
  const buttonCharacters = screen.getByRole("button", {name: "Characters"});
  userEvent.click(buttonCharacters);
  
  setTimeout( () => {
    userEvent.click(screen.getByText(/Rick Sanchez/)); 
    setTimeout( () => expect(screen.getByText(/Peter/)).toBeInTheDocument(), 100)
  }, 100);
});
*/

/*



test('redirect to Characters-Page when clicking the Character-Button', () => {
  const {getByText} = render(<MemoryRouter><App /></MemoryRouter>);
  const buttonCharacters = screen.getByRole("button", {name: "Characters"});

  fireEvent.click(buttonCharacters); 
  expect(getByText(/Overview/i)).toBeInTheDocument();
});
*/


/*
test('redirect to Characters-Page successfully', () => {
  render(<BrowserRouter><App/></BrowserRouter>);
  const buttonCharacters = screen.getByRole("button", {name: "Characters"});

  userEvent.click(buttonCharacters);
  expect(screen.getByText(/Characters Overview/)).toBeInTheDocument();
});

*/
/*
test('redirect to Characters Page', async () => {
  render(<App />, {wrapper: BrowserRouter})
  const user = userEvent.setup()

  expect(screen.getByText(/React and Morty/i)).toBeInTheDocument()

  await user.click(screen.getByText(/Characters/i))
  expect(screen.getByText(/home/i)).toBeInTheDocument()
})
*/

// _____________________________________________________________________

/*

test('redirect to Characters-Page successfully', () => {
  render(<BrowserRouter><App/></BrowserRouter>);

  userEvent.click(screen.getByRole("link", { name: /Characters/i }));
  expect(screen.findByText(/Overview/)).toBeInTheDocument();
});
*/
/*
test('should redirect and update history', () => {
  const history = createMemoryHistory();

  render(<Router history={history}><App/></Router>);

  userEvent.click(screen.getByText(/Characters/));

  expect(history.location.pathname).toEqual('/characters');
});

test('full app rendering/navigating', async () => {
  render(<BrowserRouter><App/></BrowserRouter>);
  const user = userEvent.setup()
  const buttonCharacters = screen.getByRole("button", {name: "Characters"});
  /*
  // verify page content for default route
  expect(screen.getByText(/React and Morty/i)).toBeInTheDocument()
  */
  // verify page content for expected route after navigating
/*
  await user.click(buttonCharacters);
  expect(screen.getByText(/Characters/i)).toBeInTheDocument();
})
*/
/*

test("full app rendering/navigating", async () => {
  const history = createMemoryHistory();

  render(
    <BrowserRouter location={history.location} navigator={history}>
      <App />
    </BrowserRouter>
  );
  const user = userEvent.setup();
  // verify page content for expected route
  // often you'd use a data-testid or role query, but this is also possible
  expect(screen.getByText(/Characters/i)).toBeInTheDocument();

  await user.click(screen.getByText(/Characters/i));

  expect(screen.getByText(/Overview/i)).toBeInTheDocument();
});
*/