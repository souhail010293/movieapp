import React, { useState } from 'react';

import Modal from 'react-modal';

import './AddMovie.css';
import Rate from '../Rate';

Modal.setAppElement('#root');

const AddMovie = ({ addMovie }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [image, setImage] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setName('');
    setRating('');
    setImage('');
    setDate('');
    setDescription('');
  }

  const handleSubmit = (e) => {
    let newMovie = {
      name: name,
      rating: rating,
      image: image,
      date: date,
      description: description,
    };
    addMovie(e, newMovie);
    setIsOpen(false);
    setName('');
    setRating('');
    setImage('');
    setDate('');
    setDescription('');
  };

  return (
    <div className="Add-btn-container">
      <button className="Add-btn" onClick={openModal}>
        +
      </button>
      <Modal
        className="add-modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <h1 className="addMovie-h1">Add A Movie</h1>
        <form>
          <label>Movie Name</label>
          <input
            value={name}
            type="text"
            name="name"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <label>Movie Rate</label>
          {/*<input
            value={rating}
            type="text"
            name="rating"
            required
            onChange={(e) => setRating(e.target.value)}
         />*/}
          <Rate rating={rating} starIndex={setRating} />

          <label>Movie Release Date</label>
          <input
            value={date}
            type="number"
            name="date"
            required
            onChange={(e) => setDate(e.target.value)}
          />
          <label>Movie Image</label>
          <input
            value={image}
            type="url"
            name="image"
            required
            onChange={(e) => setImage(e.target.value)}
          />
          <label>Movie Summary</label>
          <textarea
            value={description}
            type="text"
            name="description"
            required
            onChange={(e) => setDescription(e.target.value)}
          />
        </form>
        <button className="Modal-btn" onClick={handleSubmit}>
          Submit
        </button>
        <button className="Modal-btn" onClick={closeModal}>
          close
        </button>
      </Modal>
    </div>
  );
};

export default AddMovie;