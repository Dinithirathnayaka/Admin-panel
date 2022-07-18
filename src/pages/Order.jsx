import React from "react";
import SideBar from "../components/SideBar";
import { AnimatePresence, motion } from "framer-motion";
import { BiSearch } from "react-icons/bi";

function Order() {
  return (
    <>
      <SideBar>
        <div className="menudiv">
          <div className="row">
            <div className="col-6">profile</div>
            <div className="col-6">
              {" "}
              <div className="search">
                <div className="search_icon">
                  <BiSearch />
                </div>
                <AnimatePresence className="search">
                  <motion.input
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    type="text"
                    placeholder="Search"
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>
          Order List
          <br />
          <br />
          <hr />
          <div className="orderlist">
            <div className="detail">
              <div className="row">
                <div className="col-2">
                  <p>Order Id :</p>
                  <p>Customer Name :</p>
                  <p>Order List :</p>
                  <p>Address :</p>
                  <p>Telephone number :</p>
                  <p>Status :</p>
                  <p>Note :</p>
                </div>

                <div className="col-10">
                  <p>0001</p>
                  <p>R.M.D.N.Rathnayaka</p>
                  <p>Pizza</p>
                  <p> no2, katubadda,balangoda</p>
                  <p>0700000000</p>
                  <p>Dilivered</p>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eaque ullam laudantium consequuntur ab natus eligendi velit
                    culpa sapiente incidunt dolorum?
                  </p>
                </div>
                <div className="date">Date :07/18/2022</div>
              </div>
            </div>
          </div>
        </div>
      </SideBar>
    </>
  );
}

export default Order;
