import React from "react";
import SideBar from "../components/SideBar";
import { AnimatePresence, motion } from "framer-motion";
import { BiSearch } from "react-icons/bi";

function AddNewMenu() {
  return (
    <>
      <SideBar>
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
        Add/Edit Menu
        <br />
        <br />
        <div className="menutop">
          <div className="form">
            <form className="addmenu">
              <div className="form-group">
                <label for="name">Product Name</label>
                <br />
                <input
                  id="name"
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Product Name"
                />
              </div>
              <br />

              <div className="form-group">
                <label for="cars">Category:</label>
                <br />
                <select name="category" id="category">
                  <option value="Category 1">Category 1</option>
                  <option value="Category 2">Category 2</option>
                  <option value="Category 3">Category 3</option>
                  <option value="Category 4">Category 4</option>
                </select>
              </div>
              <br />

              <div className="row">
                <div className="col-6 form-group ">
                  <label for="price">Price</label>
                  <br />
                  <input
                    id="price"
                    type="text"
                    name="price"
                    className="form-control"
                    placeholder="Price"
                  />
                </div>

                <div className="col-6 form-group">
                  <label for="discount">Discount</label>
                  <br />
                  <input
                    id="discount"
                    type="text"
                    name="discount"
                    className="form-control"
                    placeholder="Discount"
                  />
                </div>
              </div>
              <br />

              <div className="form-group">
                <label for="description">Description</label>
                <br />
                <textarea
                  id="description"
                  name="description"
                  className="form-control"
                  placeholder="Description..."
                />
              </div>
              <br />
              <label for="description">Uploaded image</label>
              <br />
              <br />
              <label for="anotheriamge">Upload another image</label>
              <br />
              <input type="file" className="imgu" accept="image/*" />
              <br />

              <button type="delete" className="btnd ">
                Delete
              </button>
              <button type="submit" className="btne ">
                Edit
              </button>
              <br />
              <br />
              <button type="Button" className="btnc ">
                Cancel
              </button>
              <button type="submit" className="btns ">
                Save/Add
              </button>
            </form>
          </div>
        </div>
      </SideBar>
    </>
  );
}

export default AddNewMenu;
