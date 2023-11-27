import { useState } from "react";
import { Burger } from "./Burger";
import { Menu } from "./Menu";

export const MenuWrapper = () => {
    const [open, setOpen] = useState(false)
    const toggle = () => setOpen(!open)

    return (
        <>
        <Burger open={open} onClick={toggle}/>
        <Menu open={open}/>
        </>
    )
}