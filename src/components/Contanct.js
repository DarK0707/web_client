import React from "react";
import axios from "axios";
function Contanct() {
  return (
    <div className="container">
      <div id="contact_form" className="row">
        <div className="col-md-12">
          <h2>İLETİŞİM</h2>
          <form
            role="form"
            id="feedbackForm"
            data-toggle="validator"
            data-disable="false"
          >
            <div className="form-group">
              <label className="control-label" htmlFor="name">
                Adınız
              </label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Adınızı giriniz"
                  required
                />
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-unchecked form-control-feedback" />
                </span>
              </div>
              <span className="help-block" style={{ display: "none" }}>
                Lütfen Adınızı Giriniz
              </span>
            </div>

            <div className="form-group">
              <label className="control-label" htmlFor="email">
                İletişim sebebi
              </label>
              <input type="text" className="form-control" />
              <span className="help-block" style={{ display: "none" }}>
                Lütfen geçerli bir email adresi giriniz
              </span>
            </div>
            <div className="form-group">
              <label className="control-label" htmlFor="email">
                Email adresinizi giriniz
              </label>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Email adresinizi giriniz"
                  required
                />
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-unchecked form-control-feedback" />
                </span>
              </div>
              <span className="help-block" style={{ display: "none" }}>
                Lütfen gecerli bir email adresi giriniz
              </span>
            </div>
            <div className="form-group">
              <label className="control-label" htmlFor="message">
                Mesajınız
              </label>
              <div className="input-group">
                <textarea
                  rows={5}
                  cols={30}
                  className="form-control"
                  id="message"
                  name="message"
                  placeholder="Lüffen mesajınızı giriniz"
                  required
                  defaultValue={""}
                />
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-unchecked form-control-feedback" />
                </span>
              </div>
              <span className="help-block" style={{ display: "none" }}>
                Lüffen mesajınızı giriniz
              </span>
            </div>

            <button
              type="submit"
              id="feedbackSubmit"
              className="btn btn-primary btn-lg"
              data-loading-text="Gönderiyor..."
              style={{ display: "block", marginTop: "10px" }}
            >
              Gönder
            </button>
          </form>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Contanct;
