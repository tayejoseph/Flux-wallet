import React from "react";
import { IoMdTrash } from "react-icons/io";
import { RiAddLine } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa";
import { Button, Table } from "../../UI";
import DashboardHeader from "../../layout/DashboardHeader";
import Container from "./styles";

const Card = () => {
  return (
    <Container>
      <DashboardHeader
        title={"Address"}
        sectionAction={
          <div className="card-action">
            <Button rounded iconRight>
              <RiAddLine />
              Add Address
            </Button>
          </div>
        }
      />
      <div className="card_content">
        <header>
          <h2 className="u-typo_title"> Saved Addresses</h2>
        </header>
        <div className="table-container">
          <Table
            tableHeader={
              <thead>
                <tr>
                  <th>Recipient</th>
                  <th>Amount</th>
                  <th className="action-cell">Action</th>
                </tr>
              </thead>
            }
            tableContent={
              <>
                {[...Array(6).keys()].map((item, index) => (
                  <tr key={index}>
                    <td>Jackson Doe</td>
                    <td>FAC16</td>
                    <td className="action-cell">
                      <Button icon className="btn-money">
                        <FaMoneyBillWave />
                      </Button>
                      <Button icon className="btn-edit">
                        <MdEdit />
                      </Button>
                      <Button icon className="btn-delete">
                        <IoMdTrash />
                      </Button>
                    </td>
                  </tr>
                ))}
              </>
            }
          />
        </div>
      </div>
    </Container>
  );
};

export default Card;
