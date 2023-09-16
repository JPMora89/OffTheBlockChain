import React from "react";
import { render, screen } from "@testing-library/react";
import Homepage from "./Homepage";

test("renders About section", () => {
  render(<Homepage />);
  const aboutSection = screen.getByText("About Off the Blockchain");
  expect(aboutSection).toBeInTheDocument();
});

test("renders Sign Up and Log In buttons", () => {
  render(<Homepage />);
  const signUpButton = screen.getByText("Sign Up");
  const logInButton = screen.getByText("Log in");
  expect(signUpButton).toBeInTheDocument();
  expect(logInButton).toBeInTheDocument();
});

test("renders Join us paragraph", () => {
  render(<Homepage />);
  const joinUsParagraph = screen.getByText("Join us and create an account to manage your watchlist");
  expect(joinUsParagraph).toBeInTheDocument();
});

test("renders blockchainLink image", () => {
  render(<Homepage />);
  const blockchainLinkImage = screen.getByAltText("blockchainLink");
  expect(blockchainLinkImage).toBeInTheDocument();
});

test("renders the homepage header", () => {
  render(<Homepage />);
  const homepageHeader = screen.getByText("Welcome to Off the Blockchain");
  expect(homepageHeader).toBeInTheDocument();
});
