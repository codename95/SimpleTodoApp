import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import MainApp from "../MainApp";

describe("MainApp", () => {
  it("displays the todo item text", () => {
    const { getByText, getByPlaceholderText } = render(<MainApp />);

    const titleText = getByText("Todo App");
    expect(titleText).toBeTruthy();

    const inputElement = getByPlaceholderText("Enter a new task");
    expect(inputElement).toBeTruthy();
    const addButton = getByText("Add");
    expect(addButton).toBeTruthy();
  });

  it("displays the todo item text", () => {
    const todo = { key: "1", text: "Buy groceries" };
    const { getByText, getByPlaceholderText } = render(<MainApp />);

    const inputElement = getByPlaceholderText("Enter a new task");
    fireEvent.changeText(inputElement, todo.text);

    const addButton = getByText("Add");
    fireEvent.press(addButton);

    const addedTodo = getByText(todo.text);

    expect(addedTodo).toBeTruthy();
  });

  it("adds a todo item to the todos", () => {
    const { getByText, getByPlaceholderText } = render(<MainApp />);

    const inputElement = getByPlaceholderText("Enter a new task");
    fireEvent.changeText(inputElement, "Sample Task");

    const addButton = getByText("Add");
    fireEvent.press(addButton);

    const addedTodo = getByText("Sample Task");
    expect(addedTodo).toBeTruthy();
  });

  it("calls the onRemove function when a todo item is removed", () => {
    const { getByText, getByPlaceholderText, queryByText } = render(
      <MainApp />
    );

    const inputElement = getByPlaceholderText("Enter a new task");
    fireEvent.changeText(inputElement, "Sample Task");
    const addButton = getByText("Add");
    fireEvent.press(addButton);

    const addedTodo = getByText("Sample Task");
    fireEvent.press(addedTodo);

    const removedTodo = queryByText("Sample Task");
    expect(removedTodo).toBeNull();
  });
});
