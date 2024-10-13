const data = new Date();
const month = ["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"];
const host = location.hostname;

class Html extends React.Component {
    header() {
        return (
            <h1>Ho creato un server con Node.js</h1>
        );
    }

    InfoContainer() {

        let bootStrap = "/bootstrap.png";
        let node = "/nodeJS.png";
        let plotly = "/plotly.png";
        let reactPng = "/react.png";

        return (
        <>
        <div className="modal-dialog">
        <div className="modal-content">
        <div className="modal-header">
        <h1 className="modal-title fs-5">Informazioni</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
        <h3>Realizzato da:</h3>
        <h3>Tumminia Pietro</h3>
        <p><span>&#128077;</span> Powered by:</p>
        <img title="Bootstrap" src={bootStrap} className="logo"/>
        <img title="Node.js" src={node} className="logo"/>
        <img title="Plotly" src={plotly} className="logo"/>
        <img title="React" src={reactPng} className="logo"/>
        </div>
        </div>
        </div>
        </>
        );
    }

    Footer() {
        return (
        <>
        <p>La vita è come andare in bicicletta. Per restare in equilibrio devi muoverti.</p>
        <p>Albert Einstein</p>
        <h3>{data.getDate()+" "+month[data.getMonth()]+" "+data.getFullYear()}</h3>
        </>
        );
    } 
}

const html = new Html() 
ReactDOM.createRoot(document.getElementById('welcome')).render(<html.header/>);
ReactDOM.createRoot(document.getElementById('infoContainer')).render(<html.InfoContainer/>);
ReactDOM.createRoot(document.getElementById('citazione')).render(<html.Footer/>);