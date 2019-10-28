import React from 'react';
import ReactDOM from 'react-dom';
import api from './services/api'
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('expects API to respond', async () => {
  const response = await api.get(`breeds/search?q=poodle`)
  expect(response.status != 502).toBeTruthy()
})

it('expects results from "sia" to be 4', async () => {
  const response = await api.get(`breeds/search?q=sia`)
  const length = response.data.length
  expect(4).toEqual(length)
})

it('expects results from "poodle" to be 0', async () => {
  const response = await api.get(`breeds/search?q=poodle`)
  const length = response.data.length
  expect(0).toEqual(length)
})