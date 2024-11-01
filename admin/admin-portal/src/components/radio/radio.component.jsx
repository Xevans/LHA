

const Radio = (props) => {

    const { name } = props;
    return (
        <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault"></input>
            <label className="form-check-label">
                {name}
            </label>
        </div>
    );
}

export default Radio;