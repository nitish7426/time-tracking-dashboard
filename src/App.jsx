import React, { useState } from "react";
import mobile_bg from "./assets/bg-intro-mobile.png";
import desktop_bg from "./assets/bg-intro-desktop.png";
const App = () => {
  const [formValues, setFormValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const inputFields = [
    {
      id: 1,
      name: "first_name",
      value: formValues.first_name,
      onChange: handleChange,
      placeholder: "first name",
      type: "text",
    },
    {
      id: 2,
      name: "last_name",
      value: formValues.last_name,
      onChange: handleChange,
      placeholder: "last name",
      type: "text",
    },
    {
      id: 3,
      name: "email",
      value: formValues.email,
      onChange: handleChange,
      placeholder: "email address",
      type: "email",
    },
    {
      id: 4,
      name: "password",
      value: formValues.password,
      onChange: handleChange,
      placeholder: "password",
      type: "password",
    },
  ];
  return (
    <section className="bg-primary-1 min-h-screen px-6 py-20 md:py-12 text-white space-y-12 md:space-y-0 relative md:flex items-center md:px-12 lg:px-20 gap-20">
      {/* background image */}
      <img className="fixed inset-0 md:hidden" src={mobile_bg} alt="" />
      <img className="fixed inset-0 hidden md:block" src={desktop_bg} alt="" />
      <div className="text-center space-y-4 isolate md:text-start">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Learn to code by watching others
        </h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>

      <div className="space-y-8 isolate w-full max-w-lg">
        <p className="bg-accent text-white p-6 rounded-lg text-center shadow">
          <span className="font-semibold">Try it free 7 days</span> then
          <br className="md:hidden" /> $20/mo. thereafter
        </p>

        {/* form */}
        <div className="bg-white p-6 rounded-xl shadow space-y-4">
          <form className="flex flex-col gap-4">
            {inputFields.map((input) => (
              <input
                key={input.id}
                {...input}
                className="p-4 border rounded-md font-bold placeholder:capitalize text-neutral-1 placeholder:text-neutral-1/70 border-neutral-2 outline-primary-1"
              />
            ))}
            <button className="p-4 bg-primary-2 text-white uppercase font-semibold tracking-widest rounded-md button">
              claim your free trial
            </button>
          </form>
          <p className="text-center text-neutral-2 font-semibold text-xs">
            By clicking the button, you are agreeing to out{" "}
            <a className="text-primary-1 font-bold" href="">
              Terms and Services
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default App;
