import React from "react";
import ReactDOM from "react-dom";
import { Button } from "@material-ui/core";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";

function App() {
    function handleDownload() {
        console.log("hello!");
    }
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">こんにちは</div>
                        <div className="card-body">I'm an App component!</div>
                        <Button
                            variant="outlined"
                            startIcon={<CloudDownloadIcon />}
                            color="primary"
                            onClick={handleDownload}
                        >
                            CSV Download
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
