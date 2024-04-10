import React from "react";
import "./Assignment4.css";

import InputComponent from "./Question1/InputComponent";
import FormData from "./Question2/FormData";
import InputBox from "./Question3/InputBox";
import PasswordMatch from "./Question4/PasswordMatch";
import Select from "./Question5/Select";
import Todos from "./Question6/Todos";
import Search from "./Question7/Search";
import TemperatureConverter from "./Question8/TemperatureConverter";
import Routing from "./Question9/Routing";
import Form from "./Question10/Form";
import ModalUi from "./Question11/ModalUi";
import TableUi from "./Question12/TableUi";
import FormValidationYup from "./Question13/FormValidationYup";
import FormValidation from "./Question14/FormValidation";

const Assignment4 = () => {
  return (
    <>
      <div id="mainid">
        <div id="w1" className="class1">
          <h2>Question1</h2>
          <InputComponent />
        </div>

        <div id="w2" className="class1">
          <h2>Question2</h2>
          <FormData />
        </div>

        <div id="w3" className="class1">
          <h2>Question3</h2>
          <InputBox />
        </div>

        <div id="w4" className="class1">
          <h2>Question4</h2>
          <PasswordMatch />
        </div>

        <div id="w5" className="class1">
          <h2>Question5</h2>
          <Select />
        </div>

        <div id="w6" className="class1">
          <h2>Question6</h2>
          <Todos />
        </div>

        <div id="w7" className="class1">
          <h2>Question7</h2>
          <Search />
        </div>

        <div id="w8" className="class1">
          <h2>Question8</h2>
          <TemperatureConverter />
        </div>
        <div id="w9" className="class1">
          <h2>Question9</h2>
          <Routing />
        </div>
        <div id="w10" className="class1">
          <h2>Question10</h2>
          <Form />
        </div>

        <div id="w11">
          <h2>Question11</h2>
          <ModalUi />
        </div>

        <div id="w12" className="class1">
          <h2>Question12</h2>
          <TableUi />
        </div>

        <div id="w13" className="class1">
          <h2>Question13</h2>
          <FormValidationYup />
        </div>

        <div id="w14" className="class1">
          <h2>Question14</h2>
          <FormValidation />
        </div>
      </div>
    </>
  );
};

export default Assignment4;
