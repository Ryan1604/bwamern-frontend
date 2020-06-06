import React from "react";
import Fade from "react-reveal/Fade";

import { InputText, InputFile } from "elements/Form";

import BCA from "assets/images/bca.jpg";
import Mandiri from "assets/images/mandiri.jpg";

export default function Payment(props) {
  const { data, ItemDetails, checkout } = props;

  const tax = 100;
  const subTotal = ItemDetails.price * checkout.duration;
  const grandTotal = (subTotal * tax) / 100 + subTotal;

  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-5 border-right py-5" style={{ paddingRight: 80 }}>
            <Fade delay={300}>
              <p className="mb-4">Transfer Pembayaran</p>
              <p>Tax: {tax}</p>
              <p>Sub Total: ${subTotal} USD</p>
              <p>Total : ${grandTotal} USD</p>
              <div className="row mt-4">
                <div className="col-3 text-right">
                  <img src={BCA} alt="Bank Central Asia" width="60" />
                </div>
                <div className="col">
                  <ol>
                    <dd>Bank Central Asia</dd>
                    <dd>1604 1998</dd>
                    <dd>Ryan Aprianto</dd>
                  </ol>
                </div>
              </div>

              <div className="row">
                <div className="col-3 text-right">
                  <img src={Mandiri} alt="Mandiri" width="60" />
                </div>
                <div className="col">
                  <ol>
                    <dd>Bank Mandiri</dd>
                    <dd>1604 1998</dd>
                    <dd>Ryan Aprianto</dd>
                  </ol>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-5 py-5" style={{ paddingLeft: 80 }}>
            <Fade delay={600}>
              <label htmlFor="proofPayment">Upload Bukti Transfer</label>
              <InputFile
                accept="image/*"
                id="proofPayment"
                name="proofPayment"
                value={data.proofPayment}
                onChange={props.onChange}
              />

              <label htmlFor="bankName">Asal Bank</label>
              <InputText
                id="bankName"
                name="bankName"
                type="text"
                value={data.bankName}
                onChange={props.onChange}
              />

              <label htmlFor="bankHolder">Nama Pengirim</label>
              <InputText
                id="bankHolder"
                name="bankHolder"
                type="text"
                value={data.bankHolder}
                onChange={props.onChange}
              />
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
}
