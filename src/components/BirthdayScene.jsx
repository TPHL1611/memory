import React from "react";
import Dolphin from "./Dolphin";
import CakeFloating from "./CakeFloating";

const BirthdayScene = () => {
    return (
        <div className="ocean overflow-hidden">
            <div className="bubbles">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            {/* Chiếc bánh sinh nhật */}
            <CakeFloating />

            <Dolphin src="/images/dolphin.svg" width={100} />

            <div className="fish">
                {/* <!-- eyes --> */}
                <span></span>
                <span></span>
                {/* <!-- mouth --> */}
                <span></span>
                {/* <!-- bubbles --> */}
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default BirthdayScene;
