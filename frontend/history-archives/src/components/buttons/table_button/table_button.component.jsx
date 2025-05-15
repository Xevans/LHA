
import './button.styles.scss';

const TableButton = (props) => {

    const { destination } = props;

    return (
        <div>
            <button type="button" 
            className="mt-8 cursor-pointer flex items-center rounded-md border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none
                dark:text-white dark:hover:text-black dark:hover:bg-slate-300 dark:hover:border-white dark:focus:text-black dark:focus:bg-slate-300 dark:focus:border-slate-800 dark:active:border-slate-800 dark:active:text-black dark:active:bg-slate-500"
            onClick={() => checkAndDecreaseMin()}
            >
                {destination}
            </button>
        </div>
    )
}

export default TableButton;