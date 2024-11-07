import React, { useState } from 'react';
import './Form.css';

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [submittedData, setSubmittedData] = useState(null);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData({ name, email, subject, message });
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
    };

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder="Assunto" value={subject} onChange={(e) => setSubject(e.target.value)} />
                <textarea placeholder="Mensagem" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                <button type="submit">Enviar</button>
                {showSuccess && <div className="success-message">Mensagem enviada com sucesso!</div>}
            </form>
            
            {submittedData && (
                <div className="submitted-data">
                    <h3>Dados Enviados:</h3>
                    <p><strong>Nome:</strong> {submittedData.name}</p>
                    <p><strong>Email:</strong> {submittedData.email}</p>
                    <p><strong>Assunto:</strong> {submittedData.subject}</p>
                    <p><strong>Mensagem:</strong> {submittedData.message}</p>
                </div>
            )}
        </div>
    );
}

export default Form;