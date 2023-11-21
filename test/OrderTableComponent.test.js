import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import OrderTableComponent from "./../src/Components/OrderComponents/OrderTableComponent";

describe("OrderTableComponent", () => {
  const orders = [
    {
      id: "1",
      customer: { name: "John Doe", city: "Example City" },
      branch: "Example Branch",
      service: "Example Service",
      status: "Active",
      reference: "Ord_1",
      addedby: "Admin",
    },
  ];

  test("renders OrderTableComponent with filters and buttons", () => {
    render(<OrderTableComponent orders={orders} />);

    expect(screen.getByText("Filter by Branch")).toBeInTheDocument();
    expect(screen.getByText("Filter by Service")).toBeInTheDocument();

    expect(screen.getByText("All")).toBeInTheDocument();
    expect(screen.getByText("Colombo")).toBeInTheDocument();
    expect(screen.getByText("Kandy")).toBeInTheDocument();
    expect(screen.getByText("Dry Cleaning")).toBeInTheDocument();
    expect(screen.getByText("Wash Only")).toBeInTheDocument();

    expect(screen.getByText("Mark as Complete (0)")).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText("Filter by Branch"), {
      target: { value: "Colombo" },
    });
    expect(screen.getByText("Colombo")).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText("Filter by Service"), {
      target: { value: "Wash Only" },
    });
    expect(screen.getByText("Wash Only")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Mark as Complete (0)"));

    expect(
      screen.getByText("0 order(s) marked as complete")
    ).toBeInTheDocument();
  });

  // Add more tests as needed for different functionalities of your component
});
