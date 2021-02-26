import React from 'react';

function Item(props) {
    return (
        <div className="item">
              <div className="container">
                <div className="row">
                  <div className="col-12 articleTitle pb-2">{props.title}</div>
                  <div className="col-12 articleSubtitle pb-3">{props.subTitle}</div>
                  <div className="col-12 articleDate pb-3">{props.date} <br/>ver.ge/5MbXo3</div>
                  <div className="col-12 bg-light text-dark p-3 articleBody">{props.firstBlock}</div>
                  <div className="col-12 bg-light text-dark p-3 articleBody">{props.secondBlock}</div>
                </div>
              </div>
          </div>
    );
}

export default Item