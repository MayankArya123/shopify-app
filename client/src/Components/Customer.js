import React, { useEffect, useState } from "react";
import { FormLayout, TextField } from "@shopify/polaris";
import { Button } from "@shopify/polaris";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Customer = () => {
  let { id } = useParams();
  const [customer, setCustomer] = useState();
  const navigate = useNavigate();

  const saveData = () => {
    var phoneno = /^\d{10}$/;

    console.log(customer.phone);

    if (!customer.phone) {
      return alert("enter 10 digit number");
    }

    if (!customer.phone.match(phoneno)) {
      return alert("enter valid 10 digit phone  number without country code ");
    }

    console.log("ll");
    axios
      .post("http://localhost:5000/update", customer)
      .then((data) => {
        console.table("updated", data);
        alert("updated");
        navigate("/");
        // setCustomers(data.data);
      })
      .catch((e) => {
        console.log(e);
        return e;
      });
  };

  const changeFirstName = (value) => {
    console.log(value);
    setCustomer({
      ...customer,
      first_name: value,
    });
  };
  const changeLastName = (value) => {
    console.log(value);
    setCustomer({
      ...customer,
      last_name: value,
    });
  };
  const changeEmail = (value) => {
    console.log(value);
    setCustomer({
      ...customer,
      email: value,
    });
  };
  const changePhone = (value) => {
    console.log(value);
    setCustomer({
      ...customer,
      phone: value,
    });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/customer/${id}`)
      .then((data) => {
        console.table(data);
        setCustomer(data.data);
      })
      .catch((e) => {
        console.log(e);
        return e;
      });
  }, []);

  return (
    customer && (
      <div className="edit-form">
        <FormLayout>
          <TextField
            label="first Name"
            value={customer.first_name}
            onChange={(e) => changeFirstName(e)}
            autoComplete="off"
          />
          <TextField
            label="Last Name"
            value={customer.last_name}
            onChange={(e) => changeLastName(e)}
            autoComplete="off"
          />
          <TextField
            type="email"
            value={customer.email}
            label="email"
            onChange={(e) => changeEmail(e)}
          />
          <TextField
            type="phone"
            value={customer.phone}
            label="Phone"
            onChange={(e) => changePhone(e)}
          />
          <TextField
            type="text"
            value={customer.orders_count}
            disabled
            label="Orders Count"
            onChange={() => {}}
          />
          <TextField
            type="text"
            value={customer.total_spent}
            disabled
            label="Total Spent"
            onChange={() => {}}
          />

          <Button
            monochrome
            outline
            onClick={() => {
              saveData();
            }}
          >
            {" "}
            save{" "}
          </Button>
        </FormLayout>
      </div>
    )
  );
};

export default Customer;
