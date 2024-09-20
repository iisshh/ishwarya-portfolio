import React from "react";
import Header from "../Components/header";
import { Outlet, Link } from "react-router-dom";

const ContactMe=()=>{
    return(
        <>
        <Header/>
        <h2 className="contact-me-style-1">Let us start a conversation!</h2>

        <div class="contact-me-content-cards">
        <div class="contact-me-card">
      <div class="head">
        <h2 class="title">Ishwarya Hidkimath Basavaraj</h2>
        <h4 class="title" style={{fontSize:"20px"}}>Tempe, Arizona</h4>
        <div style={{marginTop:"60px"}}>
        <a href="https://www.linkedin.com/in/ishwaryahidkimath101196" target="_blank" rel="noreferrer">
        <i class="fa-brands fa-linkedin contact-me-icon-style fa-2x"></i>
        </a>

        <a href="tel:602-931-7006" target="_blank" rel="noreferrer">
        <i class="fa-solid fa-phone contact-me-icon-style fa-2x"></i>
        </a>


        <a href="mailto:ishwarya1011.hidkimath@gmail.com" target="_blank" rel="noreferrer">
        <i class="fa-solid fa-envelope contact-me-icon-style fa-2x"></i>
        </a>

        <a href="https://leetcode.com/u/ImC0dish/" target="_blank" rel="noreferrer">
        <i class="fa-solid fa-code contact-me-icon-style fa-2x"></i>
        </a>

        <a href="https://www.github.com/iisshh/" target="_blank" rel="noreferrer">
        <i class="fa-brands fa-github contact-me-icon-style fa-2x"></i>
        </a>
        </div>
        
        {/* <p class="subtitle">Subtitle ...</p> */}
      </div>
      {/* <div class="body">
        <p class="content">Text explication ...</p>
      </div> */}
    </div>
  </div>
    </>
    )
}

export default ContactMe