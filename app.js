// Boutons
class Bouton extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <button 
                type="button" 
                onClick={this.props.onClick}
                className={ `
                    btn bouton d-flex justify-content-center align-items-center fs-2 
                    ${this.props.btnColor}
                    ${this.props.couleurTexte}
                    ${this.props.long}`}
            >
                {this.props.text}
                <i className={`fa-solid ${this.props.fa}`}></i>
            </button>
        )
    }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        result: '',  
        calcul: ''
    }
  }
  handleSaisi = (n) => {
    this.setState({
        calcul: this.state.calcul + `${n}`
    })
  }
  
  handleOperat = (op) => {
    this.setState({
        calcul: this.state.calcul + `${op}`
    })
  }
  handleEgal = (e) => {
    e.preventDefault();
    try {
        const egal = eval(this.state.calcul)
        this.setState({
            result: egal
        })
      } catch (error) {
        this.setState({
            result: "Erreur"
        })
      }
  }
  handleReset = (e) => {
    e.preventDefault();
    this.setState({
        result: '',
        calcul: ''
    })
  }
  handleDeleteLeft = (e) => {
    e.preventDefault();
    this.setState({
        calcul: this.state.calcul.slice(0, -1)
    })
  }

  render() {
    return (
    <div className="pt-5">  
      <div className="d-flex justify-content-center align-items-center  ">
        <div className="bg-black text-white rounded shadow p-4">
            <div className="hauteur1 py-1 bg-dark d-flex justify-content-end shadow mb-1 pe-2 rounded">
                <p >{this.state.calcul}</p>
            </div>
            <div className="hauteur2 py-2 bg-dark d-flex justify-content-end shadow pe-2 rounded">
                <h1>{this.state.result}</h1>
            </div>
            <div className="py-4">
                <div className="d-flex pb-3 gap-3">
                    <Bouton btnColor="btn-light " text="C" couleurTexte="text-dark" onClick={this.handleReset} />
                    <Bouton btnColor="btn-light " fa="fa-delete-left" couleurTexte="text-dark" onClick={this.handleDeleteLeft} />
                    <Bouton btnColor="btn-light " text="%" couleurTexte="text-dark" onClick={() => this.handleOperat('%')} />
                    <Bouton btnColor="btn-warning " fa="fa-divide" couleurTexte="text-dark" onClick={() => this.handleOperat('/')} />
                </div>
                <div className="d-flex pb-3 gap-3">
                    <Bouton btnColor="btn-dark " text="7" couleurTexte="text-light" onClick={() => this.handleSaisi(7)} />
                    <Bouton btnColor="btn-dark " text="8" couleurTexte="text-light" onClick={() => this.handleSaisi(8)} />
                    <Bouton btnColor="btn-dark " text="9" couleurTexte="text-light" onClick={() => this.handleSaisi(9)} />
                    <Bouton btnColor="btn-warning " text="X" couleurTexte="text-dark" onClick={() => this.handleOperat('*')} />
                </div>
                <div className="d-flex pb-3 gap-3">
                    <Bouton btnColor="btn-dark " text="4" couleurTexte="text-light" onClick={() => this.handleSaisi(4)} />
                    <Bouton btnColor="btn-dark " text="5" couleurTexte="text-light" onClick={() => this.handleSaisi(5)} />
                    <Bouton btnColor="btn-dark " text="6" couleurTexte="text-light" onClick={() => this.handleSaisi(6)} />
                    <Bouton btnColor="btn-warning " text="-" couleurTexte="text-dark" onClick={() => this.handleOperat('-')} />
                </div>
                <div className="d-flex pb-3 gap-3">
                    <Bouton btnColor="btn-dark " text="1" couleurTexte="text-light" onClick={() => this.handleSaisi(1)} />
                    <Bouton btnColor="btn-dark " text="2" couleurTexte="text-light" onClick={() => this.handleSaisi(2)} />
                    <Bouton btnColor="btn-dark " text="3" couleurTexte="text-light" onClick={() => this.handleSaisi(3)} />
                    <Bouton btnColor="btn-warning " text="+" couleurTexte="text-dark" onClick={() => this.handleOperat('+')} />
                </div>
                <div className="d-flex gap-3">
                    <Bouton btnColor="btn-dark " text="0" couleurTexte="text-light" onClick={() => this.handleSaisi(0)} />
                    <Bouton btnColor="btn-dark " text="." couleurTexte="text-light" onClick={() => this.handleSaisi('.')}  />
                    <Bouton btnColor="btn-warning " text="=" couleurTexte="text-dark" long="long" onClick={this.handleEgal} />
                </div>
            </div>
        </div>
      </div>
    </div>  
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));