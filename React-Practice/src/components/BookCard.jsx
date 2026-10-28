function BookCard(props){
    return (
        <>
        <h2>Book Title : {props.title}</h2>

        <p>Author : {props.author}</p>

        <p>Pages : {props.pages} pages.</p>

        <p>Is Available in stock : {props.isAvailable ? "In stock" : "Out of stock"}</p>
        </>
    )
};

export default BookCard;