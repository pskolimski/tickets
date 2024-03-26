import React from 'react';

const Form = () => {
   const [customerName, setCustomerName] = React.useState('');
   const [movie, setMovie] = React.useState('Pszczółka Maja');
   const [ticketsCount, setTicketsCount] = React.useState(1);
   const [errors, setErrors] = React.useState({});
   const [success, setSuccess] = React.useState(false);

   const handleSubmit = (event) => {
      event.preventDefault();
      setErrors({});
      setSuccess(false);

      if (!customerName) {
         setErrors((prevState) => ({
            ...prevState,
            customerName: 'Pole jest wymagane',
         }));
      }

      if (ticketsCount < 1) {
         setErrors((prevState) => ({
            ...prevState,
            ticketsCount: 'Ilość biletów musi być większa od 0',
         }));
      }

      if (!movie) {
         setErrors((prevState) => ({
            ...prevState,
            movie: 'Pole jest wymagane',
         }));
      }

      if (customerName && movie && ticketsCount > 0) {
         console.log('Imię i nazwisko:', customerName);
         console.log('Film:', movie);
         console.log('Ilość biletów:', ticketsCount);
         setSuccess(true);
      }
   };

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <div className="mb-3">
               <label htmlFor="customerName" className="form-label">
                  Imię i nazwisko
               </label>
               <input
                  type="text"
                  className={`form-control ${
                     errors.customerName ? 'is-invalid' : ''
                  }`}
                  id="customerName"
                  placeholder="Jan Kowalski"
                  value={customerName}
                  onChange={(event) => setCustomerName(event.target.value)}
               />
               {errors.customerName && (
                  <div className="text-danger">{errors.customerName}</div>
               )}
            </div>
            <div className="mb-3">
               <label htmlFor="movie" className="form-label">
                  Wybierz film
               </label>
               <select
                  className={`form-select ${errors.movie ? 'is-invalid' : ''}`}
                  id="movie"
                  aria-label="Default select example"
                  value={movie}
                  onChange={(event) => setMovie(event.target.value)}
               >
                  <option value="Pszczółka Maja">Pszczółka Maja</option>
                  <option value="Kubuś Puchatek">Kubuś Puchatek</option>
                  <option value="Krzyś">Krzyś</option>
                  <option value="Król Lew">Król Lew</option>
                  <option value="Kraina Lodu">Kraina Lodu</option>
               </select>
               {errors.movie && (
                  <div className="text-danger">{errors.movie}</div>
               )}
            </div>
            <div className="mb-3">
               <label htmlFor="ticketsCount" className="form-label">
                  Ilość biletów
               </label>
               <input
                  type="number"
                  className={`form-control ${
                     errors.ticketsCount ? 'is-invalid' : ''
                  }`}
                  id="ticketsCount"
                  placeholder="1"
                  value={ticketsCount}
                  onChange={(event) => setTicketsCount(event.target.value)}
               />
               {errors.ticketsCount && (
                  <div className="text-danger">{errors.ticketsCount}</div>
               )}
            </div>

            <button type="submit" className="btn btn-primary mt-3">
               Rezerwuj
            </button>

            {success && (
               <div className="alert alert-success mt-3">
                  Rezerwacja przebiegła pomyślnie
               </div>
            )}
         </form>
      </div>
   );
};

export default Form;
