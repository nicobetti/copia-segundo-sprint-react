import React from "react";
import "../css/Header.css"
import DropdownMenu from "./DropdownMenu";
import HomeBankingAccess from "./HomeBankingAccess";

export default function Header() {
    return (
        <>
            <header>
                <div className="logo">
                    <a href="index.html">
                        <img src="http://localhost:3000/images/logo-itbank.png" alt="Logo del banco" />
                    </a>
                </div>
               <HomeBankingAccess></HomeBankingAccess>
            </header>
        </>
    )
}