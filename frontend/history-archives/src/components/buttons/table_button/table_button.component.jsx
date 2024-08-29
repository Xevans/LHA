
import './button.styles.scss';

const TableButton = (props) => {

    const { destination } = props;

    return (
        <button type="button" class="btn btn-outline-secondary"> {destination} </button>
    )
}

export default TableButton;