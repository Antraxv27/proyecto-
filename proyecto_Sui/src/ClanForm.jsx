import { useState } from "react"

function ClanForm({ ClientCall, estado, setClanCreado }) {
    const funcion = "crear_empresa"
    const [nombre, cambiarNombre] = useState("")

    function enviar() {
        if (!nombre.trim()) {
            alert("Soldier, we need a clan name!");
            return;
        }
        ClientCall({
            funcion,
            args: [nombre]
        })
    }
    
    return(
        <div className="hero-section">
            <h1 className="hero-title">ESTABLISH NEW CLAN</h1>
            <p className="hero-subtitle">
                Register your elite squad in the blockchain network. 
                Coordinate missions, track performance, and dominate the warzone.
            </p>
            
            <div style={{maxWidth: '500px', margin: '0 auto'}}>
                <div className="form-group">
                    <label className="form-label">CLAN DESIGNATION</label>
                    <input 
                        type="text" 
                        placeholder="Ej: TASK FORCE 141"
                        className="form-input"
                        value={nombre}
                        onChange={(e) => cambiarNombre(e.target.value)}
                        style={{textAlign: 'center', textTransform: 'uppercase'}}
                    />
                </div>

                <button 
                    className="btn-primary"
                    type="button"
                    disabled={estado}
                    onClick={enviar}
                    style={{marginBottom: '1rem'}}
                >
                    {estado ? (
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'}}>
                            <div className="loading-spinner"></div>
                            DEPLOYING...
                        </div>
                    ) : (
                        "🎯 ACTIVATE CLAN"
                    )}
                </button>

                <p style={{textAlign: 'center', color: '#b0b0b0', fontSize: '0.9rem', fontFamily: 'Rajdhani'}}>
                    Already have a clan registered?{' '}
                    <span 
                        style={{ color: "#ff6b00", cursor: "pointer", textDecoration: "underline", fontWeight: "700" }}
                        onClick={() => setClanCreado(true)}
                    >
                        ACCESS COMMAND CENTER
                    </span>
                </p>
            </div>
        </div>
    )
}

export default ClanForm