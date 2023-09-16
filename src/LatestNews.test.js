import React from "react";
import { render, waitFor } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import LatestNews from "./LatestNews";

const mockAxios = new MockAdapter(axios);

const mockArticles = [
  {
    title: "Article 1",
    publishedAt: "2023-09-01T10:00:00Z",
  },
  {
    title: "Article 2",
    publishedAt: "2023-09-02T11:00:00Z",
  },
];

mockAxios.onGet("https://newsapi.org/v2/everything?q=crypto&apiKey=aa38df6ade6f4268bb8484a411245302").reply(200, {
  articles: mockArticles,
});

test("renders LatestNews component with articles", async () => {
  const { getByText } = render(<LatestNews />);
  
  await waitFor(() => {
    getByText("Article 1"); 
    getByText("Article 2"); 
  });
});

test("renders LatestNews component with loading state", async () => {
  const { getByText } = render(<LatestNews />);
  
  await waitFor(() => {
    getByText("Loading..."); 
  });
});
