
import './button.styles.scss';

const TableButton = (props) => {

    const { destination } = props;

    return (
        <div>
            <button type="button" 
            className="mt-8 cursor-pointer flex items-center rounded-md border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            onClick={() => checkAndDecreaseMin()}
            >
                {destination}
            </button>
        </div>
    )
}

export default TableButton;