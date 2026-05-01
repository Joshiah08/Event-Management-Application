import { useState } from 'react' 
export default function Login({ onLogin, onBack }) {
    const [email, setEmail] = useState('') 
    const [password, setPassword] = useState('') 
    const [remember, setRemember] = useState(false) 
    const [error, setError] = useState(null) 
    const handleSubmit = (event) => { 
        event.preventDefault() 
        setError(null) 

        if (!email.trim() || !password) { 
            setError('Please enter your email and password.') 
            return 
        } 
        
        onLogin(email) 
    } 
    
    return ( 
        <div className="login-page"> 
            <div className="login-card"> 
                <div className="login-brand"> 
                    <span className="login-brand-accent">Event</span> 
Manager 
    </div>

    <div className="login-header"> 
        <h1>Welcome back</h1> 
        <p>Sign in to manage your events, tickets, and attendees.</p> 
    </div> 
    
    <form className="login-form" onSubmit={handleSubmit}> 
        <label> 
            Email address 
            <input type="email" placeholder="you@example.com" value={email} onChange={(event) => setEmail(event.target.value)} /> </label> <label> Password <input type="password" placeholder="Enter your password" value={password} onChange={(event) => setPassword(event.target.value)} /> </label> <div className="login-row"> <label className="checkbox-label"> <input type="checkbox" checked={remember} onChange={(event) => setRemember(event.target.checked)} /> Remember me </label> <button type="submit">Log in</button> </div> {error && <div className="login-error">{error}</div>} </form> {onBack && ( <button className="back-button" onClick={onBack}> ← Back to Home </button> )} </div> </div> ) }