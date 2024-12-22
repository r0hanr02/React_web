// import React from 'react'

const Form = () => {
 
  return (
    <div className="bg-slate-900 text-white">
      <h1 className="text-4xl underline font-extrabold text-BLACK text-center">
        Contact Form
      </h1>
      <div className="w-full flex  flex-col align-center justify-center md:flex-row  ">
        <form
          className="w-full flex flex-col align-center justify-center  md:w-1/2 md:m-2"
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          <input
          type="hidden"
          name="access_key"
          value="bba4e540-a073-44b0-9800-38ce017387c5"
        />
          <input type="checkbox" name="botcheck" style={{ display: "none" }} />
         
          <h2 className="text-2xl font-bold">Feel free to reach out</h2>
          <p className="text-xl py-2 mr-3">
            For any inquiries, please use the form below and our team will get
            back to you as soon as possible.
          </p>

          <div className="">
            <div>
              <div className="m-5">
                <label htmlFor="Name" className="text-xl w-full">
                  Name :
                </label>
                <input
                  type="text"
                  name="name"
                  id=""
                  className="w-full bg-gray-500 p-3 rounded-md my-2 text-white"
                />
              </div>
              <div className="m-5">
                <label htmlFor="Name" className="text-xl w-full">
                  Contact :
                </label>
                <input
                  type="number"
                  name="name"
                  id=""
                  className="w-full bg-gray-500 p-3 rounded-md my-2 text-white"
                />
              </div>
              <div className="m-5">
                <label htmlFor="Name" className="text-xl w-full">
                  Email :{" "}
                </label>
                <input
                  type="email"
                  name="name"
                  id=""
                  className="w-full bg-gray-500 p-3 rounded-md my-2 text-white"
                />
              </div>
             <div className="m-5">
             <label htmlFor="message" className="text-xl w-full">
                Message :
              </label>
              <textarea
                name="message"
                id=""
                cols="30"
                rows="5"
                className="w-full bg-gray-500 p-3 rounded-md my-2 text-white"
              ></textarea>
             </div>
            </div>
          </div>
          <button 
          className="bg-black p-3 m-3 rounded-xl hover:bg-white hover:text-black hover:duration-500">Submit</button>
        </form>
        <div className="w-1/2 m-5  self-start
        md:self-center ">
          <h3 className="text-2xl">Contact Details:</h3>
          <p > <span>Phone:</span> +1234567890</p>
          <p><span >Address:</span> 123 Main St, City, State, Zip Code</p>
          <p><span >Email:</span>  info@example.com</p>
          {/* <p><a href="">Google Map here:</a></p> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14891.489733509465!2d72.88657024648971!3d19.065162752198322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1734851568529!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            className="w-[500px] h-[600px] md:w-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Form;
