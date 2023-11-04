const { authHostInsance } = require('api');

export const fetchAllContacts = async () => {
  const { data } = await authHostInsance.get('contacts');
  return data;
};

export const createContact = async formData => {
  const { data } = await authHostInsance.post('contacts', formData);
  return data;
};

export const deleteContact = async id => {
  const { data } = await authHostInsance.delete(`contacts/${id}`);
  return data;
};

export const updateContact = async formData => {
  const { data } = await authHostInsance.patch(
    `contacts/${formData.id}`,
    formData
  );
  return data;
};
