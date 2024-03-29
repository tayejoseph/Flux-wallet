import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalContent from "./ModalContent";
import DashboardHeader from "../../../layout/DashboardHeader";
import { fetchCards } from "../../../store/actions/user";
import { Button, InputGroup, RadioButton, Modal } from "../../../UI";
import Container from "./styles";

const AddCash = () => {
  const dispatch = useDispatch();
  const { cardLists } = useSelector((state) => state.user);
  const [displaySection, setDisplay] = useState(false);
  const [formData, setFormState] = useState({
    amount: "",
    cardNo: "",
    paymentMethod: "card",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  return (
    <Container>
      <Modal
        className="modal-size_sm modal-close_relative"
        modalTitle={
          formData.paymentMethod === "card" ? "Select Card" : "Payment Account"
        }
        showModal={displaySection}
        onClose={() => setDisplay(false)}
      >
        <ModalContent
          {...{ displaySection, cardLists }}
          modalTitle={"Withdraw"}
        />
      </Modal>
      <header>
        <DashboardHeader navType="small" />
        <div className="cash-header_container">
          <h1 className="u-typo_headline">Add Cash</h1>
          <p className="u-typo_normal u-color_lighter">
            Flux Wallet > <span className="u-color_dark">Add Cash</span>
          </p>
        </div>
      </header>
      <hr />
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <label>Enter amount to add?</label>
          <input
            type="text"
            placeholder="₦0.00"
            value={formData.amount}
            onChange={({ target }) =>
              setFormState((s) => ({ ...s, amount: target.value }))
            }
          />
        </InputGroup>
        <hr />
        <div className="payment-method_container">
          <p>Select Payment method</p>
          <InputGroup className="radio-btn_container">
            <label className="u-color_dark ">
              <RadioButton
                type="radio"
                onChange={(e) => {
                  setFormState({
                    ...formData,
                    paymentMethod: e.target.checked ? "card" : "transfer",
                  });
                }}
                checked={formData.paymentMethod === "card"}
              />
              Card
            </label>
          </InputGroup>
          <InputGroup className="radio-btn_container">
            <label className="u-color_dark ">
              <RadioButton
                type="radio"
                name={"paymentMethod"}
                onChange={(e) => {
                  setFormState({
                    ...formData,
                    paymentMethod: e.target.checked ? "transfer" : "card",
                  });
                }}
                checked={formData.paymentMethod === "transfer"}
              />
              Bank Transfer
            </label>
          </InputGroup>
        </div>
        <hr />

        <div className="account-summary">
          <div className="flux-row">
            <p>Amount</p>
            <p>₦0.00</p>
          </div>
          <div className="flux-row">
            <p>Processing Fee</p>
            <p>₦35.00</p>
          </div>
        </div>
        <hr />

        <div className="total-container flux-row">
          <div className="flux-row">
            <p>Total</p>
            <p>₦0.00</p>
          </div>
        </div>
        <Button rounded onClick={() => setDisplay(formData.paymentMethod)}>
          Proceed
        </Button>
      </form>
    </Container>
  );
};

export default AddCash;
