// import React from 'react'

const Form = () => {
  {
    /* <input
          type="hidden"
          name="access_key"
          value="bba4e540-a073-44b0-9800-38ce017387c5"
        />
          <input type="checkbox" name="botcheck" style={{ display: "none" }} />
         */
  }
  return (
    <div className="w-full ">
      <h1 className="text-4xl underline font-extrabold text-white text-center">
        Contact Form
      </h1>
      <form
        className="w-full flex flex-col align-center justify-center bg-emerald-500"
        action="https://api.web3forms.com/submit"
        method="POST"
      >
        <div className="flex w-1/2  justify-center bg-white">
          <div>
            <div>
              <label htmlFor="Name">Name : </label>
              <input type="text" name="name" id="" />
            </div>
            <div>
              <label htmlFor="Name">Contact : </label>
              <input type="number" name="name" id="" />
            </div>
            <div>
              <label htmlFor="Name">Email : </label>
              <input type="email" name="name" id="" />
            </div>
          </div>
          <div>
            <label htmlFor="message">Message : </label>
            <textarea name="message" id="" cols="30" rows="10"></textarea>
          </div>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
