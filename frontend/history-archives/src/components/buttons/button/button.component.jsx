import './button.styles.scss';

const Button = (props) => {

    const {button_text, button_style} = props;
    return (
        <div>
            <button 
                type="button" 
                className={`btn ${button_style}`}
                >
                {button_text}
            </button>
        </div>
    )
}

export default Button;