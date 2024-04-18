import React from "react";
import "./Assignment5.css";
import FetchData from "./Question1/FetchData";
import FetchWrongApi from "./Question2/FetchWrongApi";
import Spinner from "./Question3/Spinner";
import FetchApp from "./Question4/FetchApp";
import AxiosFetch from "./Question5/AxiosFetch";
import AxiosFail from "./Question6/AxiosFail";
import Form from "./Question7/Form";
import GraphqlIndex from "./Question8/GraphqlIndex";
import GraphqlPaginationIndex from "./Question9/GraphqlPaginationIndex";
import GraphQlIndex from "./Question11/GraphQlIndex";
import ButtonApp from "./Question12/ButtonApp";
import ModalComp from "./Question13/ModalComp";
import AuthApp from "./Question14/AuthApp";
import CheckComponent from "./Question15/CheckComponent";
import DataApp from "./Question16/DataApp";

function Assignment5() {
  return (
    <>
      <div id="mainid">
        <div id="w1" className="class1">
          <h2>Question1</h2>
          <FetchData />
        </div>

        <div id="w2" className="class1">
          <h2>Question2</h2>
          <FetchWrongApi />
        </div>

        <div id="w3" className="class1">
          <h2>Question3</h2>
          <Spinner />
        </div>

        <div id="w4" className="class1">
          <h2>Question4</h2>
          <FetchApp />
        </div>

        <div id="w5" className="class1">
          <h2>Question5</h2>
          <AxiosFetch />
        </div>

        <div id="w6" className="class1">
          <h2>Question6</h2>
          <AxiosFail />
        </div>

        <div id="w7" className="class1">
          <h2>Question7</h2>
          <Form />
        </div>

        <div id="w8" className="class1">
          <h2>Question8</h2>
          <GraphqlIndex />
        </div>
        <div id="w9" className="class1">
          <h2>Question9</h2>
          <GraphqlPaginationIndex />
        </div>
        <div id="w11" className="class1">
          <h2>Question11</h2>
          <GraphQlIndex />
        </div>

        <div id="w12" className="class1">
          <h2>Question12</h2>
          <ButtonApp />
        </div>

        <div id="w13" className="class1">
          <h2>Question13</h2>
          <ModalComp />
        </div>

        <div id="w14" className="class1">
          <h2>Question14</h2>
          <AuthApp />
        </div>

        <div id="w15" className="class1">
          <h2>Question15</h2>
          <CheckComponent />
        </div>

        <div id="w16" className="class1">
          <h2>Question16</h2>
          <DataApp />
        </div>
      </div>
    </>
  );
}

export default Assignment5;
