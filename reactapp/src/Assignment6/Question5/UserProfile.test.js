import React from "react";
import { render, screen } from "@testing-library/react";
import UserProfile from "./UserProfile";

test("user profile with props", () => {
  const user = {
    name: "Varun Pratap",
    email: "varun1@gmail.com",
    phoneNumber: "6322134449",
  };

  render(<UserProfile {...user} />);

  expect(screen.getByText(/Varun Pratap/i)).toBeInTheDocument();
  expect(screen.getByText(/varun1@gmail.com/i)).toBeInTheDocument();
  expect(screen.getByText(/6322134449/i)).toBeInTheDocument();
});
