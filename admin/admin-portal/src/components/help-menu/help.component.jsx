
const Help = () => {

    return (
        <> 
            <div className="mt-8 ml-2">
                <div className="border rounded-2xl py-10 pl-10 max-h-96  overflow-y-scroll">
                    <ul className="list-decimal">
                        <h4 className="font-semibold">Editing</h4>
                        <li>Enter the ID of the record you wish to update.</li>
                        <li>Click Fetch.</li>
                        <li>Edit the fields as necessary.</li>
                        <li>Note: Resource URL must be trimmed as the full version will be returned.</li>
                        <li>Click update to save changes.</li>
                        <li>(optional) Refresh table to reflect changes made.</li>
                    </ul>
                    <ul className="mt-8 list-decimal">
                        <h4 className="font-semibold">Adding a record for Obituary</h4>
                        <li>Enter the information of the person and the publication.</li>
                        <li>Click Publish to save changes to database.</li>
                        <li>(Optional) Click refresh button on table top right to see changes.</li>
                    </ul>
                    <ul className="mt-8 list-decimal">
                        <h4 className="font-semibold">Adding a record non-obituary</h4>
                        <li>Enter the information of the publication.</li>
                        <li>Click Publish to save changes to database.</li>
                        <li>(Optional) Click refresh button on table top right to see changes.</li>
                        <li>Note: Only enter the file path starting in the nested directory.</li>
                        <li>Note: See 'Completed Resource URL' for which directory to start at.</li>
                    </ul>
                    <ul className="mt-8 list-decimal">
                        <h4 className="font-semibold">Tip for adding publications</h4>
                        <li>Triple click the text in 'Completed Resource URL' and copy it.</li>
                        <li>Verify it goes in to the file by navigating to it in the address bar.</li>
                    </ul>
                    <ul className="mt-8 list-decimal">
                        <h4 className="font-semibold">Copying ID of a record</h4>
                        <li>Note: Table supports side scrolling (shift+scroll)</li>
                        <li>Click 'Copy ID' on desired record.</li>
                    </ul>
                    <ul className="mt-8 list-decimal">
                        <h4 className="font-semibold">Deleting a record</h4>
                        <li>Note: This is a permanent action!</li>
                        <li>Note: Table supports side scrolling (shift+scroll)</li>
                        <li>Click 'Delete' on desired record.</li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Help;