import { MainTitle } from "./MainTitle/MainTitle";
import { Tabs } from "./Tabs/Tabs";
import { BigPost } from "./Posts/BigPost/BigPost";
import { MediumPost } from "./Posts/MediumPost/MediumPost";
import { SmallmPost } from "./Posts/SmallPost/SmallPost";
import styles from './Main.styles.module.scss'

export const Main = () => {
    return (
        <div className={styles.main}>
            <MainTitle/>
            <Tabs/>
            <BigPost post={{
                id: 0,
                date: "April 20, 2021",
                title: "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
                description: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
                image: ""
            }}/>
            <MediumPost post={{
                id: 0,
                date: "April 20, 2021",
                title: "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
                description: "",
                image: ""
            }}/>
            <SmallmPost post={{
                id: 0,
                date: "April 20, 2021",
                title: "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
                description: "",
                image: ""
            }}/>
        </div>
    )
}