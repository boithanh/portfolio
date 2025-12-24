import Link from "next/link";
import React, { useState } from "react";

type Props = {};

const CTA = (props: Props) => {
  return (
    <section className="cta">
      <div className="cta-diamond"></div>
      <div className="container-fluid">
        <div className="row justify-content-end">
          <div className="col">
            <div className="cta-content mx-auto text-left"></div>
          </div>
        </div>
      </div>
      <div className="position-absolute bottom-0 py-5">
        {" "}
        <Link href={"/contact"} className="btn btn-outline-light p-sm-3">
          Contact Now
        </Link>
      </div>
    </section>
  );
};

export default CTA;
