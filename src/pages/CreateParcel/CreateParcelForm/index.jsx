/* eslint-disable no-nested-ternary */
import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import '../../../css/createParcel.scss';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import InputField from '../../../components/Input';
import Button from '../../../components/styledComponent/Button';
import BackgroundImg from '../../../components/styledComponent/BackgroundImg';

let CreateParcelForm = ({
  handleSubmit,
  submitting,
  isLoading,
  quantity,
  weight
}) => (
  <main>
    <BackgroundImg className="create-parcel-bg">
      {isLoading && (
        <div id="loader-container">
          <Loader type="Puff" color="#FFFFFF" height="100" width="100" />
        </div>
      )}
      <div className="p-3">
        <div className="user-actions-results">
          <main className="container">
            <div className="form-card">
              <form id="form" onSubmit={handleSubmit}>
                <h2>Create a parcel order</h2>
                <div className="d-inline col-9">
                  <div className="row">
                    <div className="col-3">
                      <label className="label" htmlFor="packageName">
                        Package name
                      </label>
                    </div>
                    <div className="col-9">
                      <Field
                        type="text"
                        name="packageName"
                        id="packageName"
                        placeholder="Enter package name..."
                        component={InputField}
                        required
                      />
                    </div>
                  </div>
                  {/*  */}
                  <div className="row">
                    <div className="col-3">
                      <label className="label" htmlFor="parcelLocation">
                        Pickup location
                      </label>
                    </div>
                    <div className="col-9">
                      <Field
                        type="text"
                        name="pickupLocation"
                        id="pickupLocation"
                        component={InputField}
                        placeholder="Enter pickup location..."
                        required
                      />
                    </div>
                  </div>
                  {/*  */}
                  <div className="row">
                    <div className="col-3">
                      <label className="label" htmlFor="dropOffLocation">
                        Destination
                      </label>
                    </div>
                    <div className="col-9">
                      <Field
                        type="text"
                        name="dropOfflocation"
                        id="dropOfflocation"
                        component={InputField}
                        placeholder="Enter parcel destination..."
                        required
                      />
                    </div>
                  </div>
                  {/*  */}
                  <div className="row">
                    <div className="col-3">
                      <label className="label" htmlFor="quantity">
                        Parcel quantity
                      </label>
                    </div>
                    <div className="col-9">
                      <Field
                        type="number"
                        name="quantity"
                        id="quantity"
                        component={InputField}
                        placeholder="Enter parcel quantity"
                        required
                      />
                    </div>
                  </div>
                  {/*  */}
                  <div className="row">
                    <div className="col-3">
                      <label className="label" htmlFor="weight">
                        Weight (kg)
                      </label>
                    </div>
                    <div className="col-9">
                      <Field
                        type="number"
                        name="weight"
                        id="weight"
                        component={InputField}
                        placeholder="Enter parcel weight"
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-3" />
                    <div className="col-9">
                      <Button
                        type="submit"
                        id="submit"
                        disabled={submitting}
                        className="btn w-100 ht-6">
                        Create
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="d-inline col-3 t-center">
                  <h2>PRICE</h2>
                  <h3 id="parcelPrice">
                    ₦{quantity && weight && quantity * weight * 500}
                  </h3>
                </div>
                {/*  */}
              </form>
            </div>
          </main>
          {/* The Modal */}
        </div>
      </div>
    </BackgroundImg>
  </main>
);
const selector = formValueSelector('create-parcel-form');
CreateParcelForm = connect(state => {
  const { quantity, weight } = selector(state, 'quantity', 'weight');
  return {
    quantity,
    weight
  };
})(CreateParcelForm);

CreateParcelForm.propTypes = {
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  isLoading: PropTypes.bool,
  quantity: PropTypes.number,
  weight: PropTypes.number
};

export default reduxForm({
  form: 'create-parcel-form'
})(CreateParcelForm);
