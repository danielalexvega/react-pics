import axios from 'axios';

export default axios.create({
  baseURL:'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID Hi68G68CAarJLw0fBy1BH9kg4fbSMSh5JctZQnO3K0M'
  }
});
