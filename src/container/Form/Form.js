import React, { useState } from "react";
import Input from "../../component/Input";
const Form = () => {
  const [fieldArr, setFieldArr] = useState([
    { id: 1, pinCode: "", country: "" },
  ]);
  const [formData, setFormData] = useState({});
  const handleAddField = () => {
    setFieldArr([
      ...fieldArr,
      { id: fieldArr.length + 1, pinCode: "", country: "" },
    ]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleFieldArrChange = (id, { name, value }) => {
    const updatedArr = fieldArr.map((item) => {
      if (id == item.id) {
        return { ...item, [name]: value };
      } else {
        return item;
      }
    });
    setFieldArr(updatedArr);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { ...formData, addresses: fieldArr };
    console.log(data, " Data");
  };
  return (
    <div>
      <div class="card">
        <div class="card-body">
          <div style={{ borderBottom: "1px solid black", marginBottom: 16 }}>
            <h5 class="card-title center">Organisation details</h5>
          </div>

          <div class="container">
            <form onSubmit={handleSubmit}>
              <div class="row">
                <div class="col-sm">
                  <Input
                    required
                    onChange={handleChange}
                    name="organisationCode"
                    id="organisationCode"
                    placeholder="Organisation code"
                    label="Organisation code"
                  />
                </div>
                <div class="col-sm">
                  <Input
                    required
                    name="organisationName"
                    id="organisationName"
                    placeholder="Organisation name"
                    label="Organisation name"
                    onChange={handleChange}
                  />
                </div>
                <div class="col-sm">
                  <Input
                    required
                    name="cinNum"
                    id="cinNum"
                    placeholder="CIN number"
                    label="CIN number"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-sm">
                  <Input
                    required
                    name="gstNum"
                    id="gstNum"
                    placeholder="GST number"
                    label="GST number"
                    onChange={handleChange}
                  />
                </div>
                <div class="col-sm">
                  <Input
                    required
                    name="domainName"
                    id="domainName"
                    placeholder="Domain name"
                    label="Domain name"
                    onChange={handleChange}
                  />
                </div>
                <div class="col-sm">
                  <Input
                    required
                    name="address1"
                    id="address1"
                    placeholder="Address line 1"
                    label="Address line 1"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-sm">
                  <Input
                    name="address2"
                    id="address2"
                    placeholder="Address line 2"
                    label="Address line 2"
                    onChange={handleChange}
                  />
                </div>
                <div class="col-sm">
                  <Input
                    required
                    name="phone"
                    id="phone"
                    placeholder="Phone"
                    label="Phone"
                    onChange={handleChange}
                  />
                </div>
                <div class="col-sm">
                  <Input
                    required
                    name="city"
                    id="city"
                    placeholder="City"
                    label="City"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-sm">
                  <Input
                    required
                    name="state"
                    id="state"
                    placeholder="State"
                    label="State"
                    onChange={handleChange}
                  />
                </div>
                <div class="col-sm">
                  {fieldArr.map((item) => {
                    return (
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <>
                          <div style={{ marginRight: 8 }}>
                            <Input
                              required
                              onChange={(e) => {
                                handleFieldArrChange(item.id, e.target);
                              }}
                              name="pinCode"
                              id="pinCode"
                              placeholder="Pin code"
                              label="Pincode"
                            />
                          </div>
                          <Input
                            required
                            onChange={(e) => {
                              handleFieldArrChange(item.id, e.target);
                            }}
                            name="country"
                            id="country"
                            placeholder="Country"
                            label="Country"
                          />
                        </>
                      </div>
                    );
                  })}
                  <div>
                    <button
                      type="button"
                      class="btn btn-primary"
                      onClick={handleAddField}
                    >
                      Add
                    </button>
                  </div>
                </div>
                <div class="col-sm"></div>
              </div>
              <button type="submit" class="btn btn-primary">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
