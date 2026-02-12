import Link from "next/link";
import React from "react";

export default function Footer(){
    return (
       <>
        <Link href="/">
            Home
        </Link>       
        <Link href="/services">
            Services
        </Link>       
        <Link href="/portfolio">
            Portfolio
        </Link>       
        <Link href="/about">
            About Us
        </Link>       
        <Link href="/contact">
            Contact Us
        </Link>       
       </>
    );
}