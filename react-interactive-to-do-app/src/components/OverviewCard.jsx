import "../styles/OverviewCard.css";

function OverviewCard({ title, count, type, active, onClick }) {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-pressed = {active}
            className={`overview-card ${type} ${active ? "active" : ""}`}>
            <h3>{title}</h3>
            <p>{count}</p>
        </button>
    );
}

export default OverviewCard;