import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";
import Image from "next/image";



export default function Top() {
    return( 
        <div>
            <div style={{ display: 'flex', paddingTop: 20}}>
                <div style={{ flex: "100px 0 0" }}>
                    <img 
                        src="/images/menu(hart).png" 
                        alt="logo" 
                        style={{ display:"block", width: 80 }}
                    />
                </div>
                <Header as="h1">hanul</Header>
            </div>
            <Gnb />
        </div>
    )
}