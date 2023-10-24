import axios from 'axios';

const baseInstance = axios.create({
  baseURL: 'https://65325346d80bd20280f55879.mockapi.io/phonebook/api/v1/',
});

export const fetchContacts = async () => {
  const { data } = await baseInstance.get('contacts');
  return data;
};

export const addContact = async formData => {
  const { data } = await baseInstance.post('contacts', formData);
  return data;
};

export const deleteContact = async id => {
  const { data } = await baseInstance.delete(`contacts/${id}`);
  return data;
};
