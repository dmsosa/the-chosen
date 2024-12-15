import IconListe from "../Widgets/IconListe";
import Robot from "./Robot";
import Section from "../Section";
// import  baffle  from "baffle";
import { useEffect } from "react";

function UberMich() {

    // useEffect(() => {
    //     const tags = baffle(".p-tag");
    //     tags.start();
    //     tags.reveal(4000);
    // }, [])
    return (
        <Section name="funf" secondary={true}>
            <div className="container container-lg">
                <h1 id="uber" className="fw-bold text-center pt-5">About me</h1>
                <div className="row justify-content-center align-items-center mx-auto">
                    <div className="col-md col-md-6">
                        <p className="description my-5">My name is Durian Sosa, a self-taught frontend developer, I spent the last 4 years making it up to build scalable frontend services with pleasant user experience. But I also have solid backend knowledge and regularly work with cloud-based tools. My favorite activity of development is finding solutions to problems by breaking them into pieces... (that's the key!).</p>
                    </div>
                    <div className="col-md col-md-6">
                        <Robot />
                        <p className="p-tag">Hey now, you're rockstar</p>
                        <p className="p-tag">Hey now, you're rockstar</p>
                        <p className="p-tag">Hey now, you're rockstar</p>
                    </div>
                </div>
                <h5 className="text-center mt-5 mt-md-0">Follow me</h5>
                <IconListe icons={["linkedin", "github", "youtube"]}/>
            </div>
        </Section>  
    )
}

export default UberMich;