import React from "react";
import SideBar from "../components/SideBar";
import { AnimatePresence, motion } from "framer-motion";
import { BiSearch } from "react-icons/bi";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import img1 from "../assets/images/img1.jpg";

function MenuList() {
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
          Menu List
          <br />
          <br />
          <hr />
          <br />
          <br />
          <div className="menulist">
            <div className="row">
              <div className="col-3 menulistitem">
                <img src={img1} alt="image" className="image" />
                <h6 className="mname ">Subziyan</h6>
                <p className="mcatogory text-muted">Fish</p>
                <div className="mbtn">
                  <button className="mdel">
                    <FaRegTrashAlt />
                  </button>
                  <button className="medit">
                    <FaRegEdit />
                  </button>
                </div>
              </div>

              <div className="col-3 menulistitem">
                <img src={img1} alt="image" className="image" />
                <h6 className="mname ">Subziyan</h6>
                <p className="mcatogory text-muted">Fish</p>
                <div className="mbtn">
                  <button className="mdel">
                    <FaRegTrashAlt />
                  </button>
                  <button className="medit">
                    <FaRegEdit />
                  </button>
                </div>
              </div>

              <div className="col-3 menulistitem">
                <img src={img1} alt="image" className="image" />
                <h6 className="mname ">Subziyan</h6>
                <p className="mcatogory text-muted">Fish</p>
                <div className="mbtn">
                  <button className="mdel">
                    <FaRegTrashAlt />
                  </button>
                  <button className="medit">
                    <FaRegEdit />
                  </button>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-3 menulistitem">
                <img src={img1} alt="image" className="image" />
                <h6 className="mname ">Subziyan</h6>
                <p className="mcatogory text-muted">Fish</p>
                <div className="mbtn">
                  <button className="mdel">
                    <FaRegTrashAlt />
                  </button>
                  <button className="medit">
                    <FaRegEdit />
                  </button>
                </div>
              </div>

              <div className="col-3 menulistitem">
                <img src={img1} alt="image" className="image" />
                <h6 className="mname ">Subziyan</h6>
                <p className="mcatogory text-muted">Fish</p>
                <div className="mbtn">
                  <button className="mdel">
                    <FaRegTrashAlt />
                  </button>
                  <button className="medit">
                    <FaRegEdit />
                  </button>
                </div>
              </div>

              <div className="col-3 menulistitem">
                <img src={img1} alt="image" className="image" />
                <h6 className="mname ">Subziyan</h6>
                <p className="mcatogory text-muted">Fish</p>
                <div className="mbtn">
                  <button className="mdel">
                    <FaRegTrashAlt />
                  </button>
                  <button className="medit">
                    <FaRegEdit />
                  </button>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-3 menulistitem">
                <img src={img1} alt="image" className="image" />
                <h6 className="mname ">Subziyan</h6>
                <p className="mcatogory text-muted">Fish</p>
                <div className="mbtn">
                  <button className="mdel">
                    <FaRegTrashAlt />
                  </button>
                  <button className="medit">
                    <FaRegEdit />
                  </button>
                </div>
              </div>

              <div className="col-3 menulistitem">
                <img src={img1} alt="image" className="image" />
                <h6 className="mname ">Subziyan</h6>
                <p className="mcatogory text-muted">Fish</p>
                <div className="mbtn">
                  <button className="mdel">
                    <FaRegTrashAlt />
                  </button>
                  <button className="medit">
                    <FaRegEdit />
                  </button>
                </div>
              </div>

              <div className="col-3 menulistitem">
                <img src={img1} alt="image" className="image" />
                <h6 className="mname ">Subziyan</h6>
                <p className="mcatogory text-muted">Fish</p>
                <div className="mbtn">
                  <button className="mdel">
                    <FaRegTrashAlt />
                  </button>
                  <button className="medit">
                    <FaRegEdit />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SideBar>
    </>
  );
}

export default MenuList;
