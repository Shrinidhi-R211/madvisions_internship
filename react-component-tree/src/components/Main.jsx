import Card from "./Card"
export default function Main() {
    return (
        <>
            <h3>This is Main Comonents Page, and we are rendering the data of cards from the cards componenet inside this Sub-Main page inside the app function.</h3>
            <Card subject_name = "React" topics = "JSX, Components, Props, useState, Rendering lists with keys, conditional rendering."/>
            <Card subject_name = "Javascript" topics = "fundamentals in js, arrays, objs."/>
        </>
    );
}