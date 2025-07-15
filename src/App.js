import logo from './logo.svg';
import './App.css';
import { useMemo } from 'react';

function App() {
  const key = useMemo(() => {
    return {
      "type": "service_account",
      "project_id": "balmy-elf-464704-g8",
      "private_key_id": "784a2c5fad11ad08a54d8af2c9157424f9840bab",
      "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCYvnZLIVSEqXGP\nnLDMMPHnSHtCp9bZE3QBdxxbbyrsZecaUeF8nXIKot/Q8WuImNfPLXL8w3Kz/svs\nQCQVfRHQRqdo3lhyVSJS8+mk6uwsjZT1CvABLLU8bs/VciPErt9PFe90bN7mb8Nl\n5iO43C5ZweEuvR7jSo+SrvTzImF+1ClBaafl9UMzLghL7dsxKdRB4LYCDxCAKkWf\n5m4assgEgpx7f2Yn6nQxizR50WHLAss5iNOwxLvfF4IxsPlddiKvDsyjYp4d/L/o\n/tdOvGO6xkgeEOq0RlpOingQ2z1vXOqT7ysqF4ZW4Q1p6Q/z9PQPX9Y4fff8Ro93\nX2t9PEg5AgMBAAECggEASPASTtgQovTC3KAnMKpiqV3MNk0tZCVM7PIy4VqZdZ9H\nlyLoePg6H+gc1oqiHe1WiIEceqTeHiOavyr10CkUG4/Rm1spgxcyN8hvlqfztWa6\nbbUWXIk71irYJgXGHMKgsgQ4fzEJ06Ik/YDDKCBEJepWHFqE6GaPXq0bHQsa4VOz\nZXV9yHCsRiMR6UfM5vKf2KlzhlFYEJggODnzVXu4yDYje9zBTmvY6Lo/4s6ItPbu\nEJU/GGsq1ba+HRciOLowrwK0ogxjrLkVtzZtMnN4z4bksqJLq4y5nEP5xagjQJtO\nN/LufYLOhf9Ai9fIgTbtRfRExkrRlAA7BEio4S4lDQKBgQDRGnOj4CC581WyTLvP\nLcQMZeeCcgbciy8pWTwf+MpFCGrPC+OT0xk2f03JkCX31ieXgVNJY82/Xjcfdh9D\nyvw0bbQ4M+lTPtniAQq7vA6K4MXffyVy+7N4NPPQTkoR3y7hQIpHNV/nf2h6BE+C\ndfXnyRLuhMwpAQTBu21FrAGUlwKBgQC7ACvbH0qgzUML594scy0NdElmFecFVqBq\n+Z1HGArdzVXiebnEnJTHPfC/YZrDUCiekL7GNQb+MpySs+9cr+F9KX9DSifLkfMZ\nUyNHmZPls+RyZE7+cTsXfglsamB5W/PmqgFK7Mevp1UNhMOFxzrynT5YtQPQ+IKT\nEdD5wHOTrwKBgCGcJNZEYj5BVJbyKoXkj0yG3K1k8qFkZdI5m6Zv8OMjtTdOa+gI\n2FagI7qwRsoNTBPYH7D+L8YAuM9/xwq4h81NjNgzz98njRH8pOMEGTpNYsDHyRcw\nSeqaaE4lJ1a0Du751sAXXjDxk7N5GeaYW0xET5yzD7XPihoxrCC0wxRFAoGAV5kg\n8iiaYPFGcxFO9iuN8zuCFpwz+EA4LWR41JDipjxF+y1iZEOlPiA54qzqPowSOxU7\nCMZWXEWBKwe3HQgW7Pa/ctoOAkKASmCzqhq7OWMnpJ5wkqigMcUMzQiX4MG+Y1NH\n/70jXZlZMlf673QAnR4j0pIZE48WO6ag6h3JBmkCgYEArYetNLh244NDwC2VcwxV\nCNPuflO+0lOy4oG1jnNCBW1+b8GWQsh4valTzGiGZwTqKlv23lLdKuP2VL5z+60Y\nXCMDj0lrPPL6/QArqyQhEislZRl1VFvax86CUZYFZtprGh38/AE7UBaa1GVDQCxO\nNKGhG9CsxwbJjF6WZiHip5c=\n-----END PRIVATE KEY-----\n",
      "client_email": "googleshit@balmy-elf-464704-g8.iam.gserviceaccount.com",
      "client_id": "101369650463149174953",
      "auth_uri": "https://accounts.google.com/o/oauth2/auth",
      "token_uri": "https://oauth2.googleapis.com/token",
      "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
      "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/googleshit%40balmy-elf-464704-g8.iam.gserviceaccount.com",
      "universe_domain": "googleapis.com"
    }
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
