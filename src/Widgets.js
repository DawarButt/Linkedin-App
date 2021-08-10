import React from 'react';
import "./Widgets.css";
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleleft">
            <FiberManualRecordIcon />
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>

        </div>
    )


    return (
        <div className="widgets">
                <div className="widgets__header">
                    <h2>Linkedin News</h2>
                    <InfoIcon />
                </div>

                {newsArticle("React is back", "Top news - 9099 readers")}
                {newsArticle("Corona Virus: UK updates", "Top news - 886 readers")}
                {newsArticle("Tesal hits new highs", "Car & auto - 300")}
                {newsArticle("Bitcoin Breaks $22k", "Crypto - 800")}
                {newsArticle("Is Redux too good", "Code - 123 readers")}
                {newsArticle("PAPA React launches course? ", "Top news - 6293")}
                
                

        </div>
    );
}

export default Widgets
