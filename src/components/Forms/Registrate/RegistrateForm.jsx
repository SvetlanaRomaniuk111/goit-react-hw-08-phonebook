import { Button } from '@mui/material';
import Notiflix from 'notiflix';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registrateThunk } from 'store/auth/actions';

const RegistrateForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
  });

  const hangleChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(registrateThunk(formData))
      .unwrap()
      .then(data => console.log(data))
      .catch(err => {
        Notiflix.Notify.failure('Such an email exists!');
      });
  };

  return (
    <div className="card p-4 mx-auto mt-4" style={{ width: 500 }}>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            onChange={hangleChange}
            className="form-control"
            id="exampleInputName"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            onChange={hangleChange}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            name="password"
            type="password"
            onChange={hangleChange}
            className="form-control"
            id="exampleInputPassword1"
            required
          />
        </div>
        <Button type="submit" variant="contained">
          Registration
        </Button>
      </form>
    </div>
  );
};

export default RegistrateForm;
