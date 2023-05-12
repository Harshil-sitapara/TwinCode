import React, { useState } from "react";
import { useEffect } from "react";
import Button from "@mui/material/Button";

const Contact = () => {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    select: "",
    msg: "",
  });

  const onChangeEvent = (event) => {
    // console.log(event.target.value);
    const { value, name } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const SubmitEvent = () => {
    alert(
      `Heyy ${data.fname} ${data.lname}!. We know you are intrested in ${data.select}. We catch you through ${data.email}.\nYour Message: ${data.msg}.\nYour form is submitted!`
    );
  };

  useEffect(() => {
    document.title = "Contact - TwinCode";
  }, []);

  return (
    <>
      <div
        classNameName="container"
        style={{ backgroundColor: " #d2cbcb", height: "100vh" }}
      >
        <h2
          classNameName="text-center py-5"
          style={{ textAlign: "center", padding: "12px" }}
        >
          Let's talk!
        </h2>
        <div classNameName="row">
          <div classNameName="col-10 mx-auto">
            <form style={{ margin: "0px 3%" }}>
              <div class="form-group">
                <label for="exampleFormControlInput1">First name</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onChange={onChangeEvent}
                  placeholder="First name"
                  name="fname"
                  value={data.fname}
                />
              </div>
              <br />
              <div class="form-group">
                <label for="exampleFormControlInput1">Last name</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onChange={onChangeEvent}
                  placeholder="Last name"
                  name="lname"
                  value={data.lname}
                />
              </div>
              <br />
              <div class="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onChange={onChangeEvent}
                  placeholder="name@example.com"
                  name="email"
                  value={data.email}
                />
              </div>
              <br />
              <div class="form-group">
                <label for="exampleFormControlSelect1">select service</label>
                <select
                  class="form-control"
                  id="exampleFormControlSelect1"
                  name="select"
                  value={data.select}
                  onChange={onChangeEvent}
                >
                  <option>Mobile Application Development</option>
                  <option>Wesite Development</option>
                  <option>Game Development</option>
                  <option>UI/UX Design</option>
                  <option>Web Design</option>
                  <option>Logo Design</option>
                  <option>QA Service</option>
                  <option>Other</option>
                </select>
              </div>
              <br />
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  onChange={onChangeEvent}
                  name="msg"
                  value={data.msg}
                  placeholder="Share your thoughts, dreams, or even a secret recipe with us. We're all ears!"
                ></textarea>
              </div>
              <br />
              <Button
                variant="outlined"
                style={{ color: "black", border: "1px solid black" }}
                onClick={SubmitEvent}
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
