export default function Card(props) {
    return (
        <>
             <h4>This is cards component data.</h4>
             <p>these cards contains the components and props data transfer chain.</p>
             <br />
             <div>
                <h3>The first subject i learnt is {props.subject_name}</h3>
                <h4><p>The topics covered in this subject so far by me are : {props.topics}</p></h4>
             </div>
        </>
    );
}