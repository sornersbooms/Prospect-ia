import React, { useState, useEffect } from 'react';
import {
    Zap,
    Users,
    MessageSquare,
    ShieldCheck,
    Check,
    Rocket,
    Clock,
    Target,
    Star,
    ChevronDown,
    ChevronUp,
    CreditCard,
    Play
} from 'lucide-react';

function App() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    // Timer State
    const [timeLeft, setTimeLeft] = useState({ hours: 16, minutes: 24, seconds: 45 });

    useEffect(() => {
        // Cuenta regresiva falsa (Evergreen Timer)
        // Se reinicia cada vez para causar urgencia inmediata
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
                if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                return prev;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const handleCheckout = () => {
        // Link real de Hotmart
        window.location.href = "https://pay.hotmart.com/Y104204633R?checkoutMode=10";
    };

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    }

    const testimonials = [
        {
            name: "Carlos R.",
            role: "Agencia de Marketing",
            text: "Antes pasaba 4 horas al día buscando leads. Ahora Prospect IA lo hace en 10 minutos. He cerrado 5 clientes nuevos esta semana.",
            stars: 5
        },
        {
            name: "Laura M.",
            role: "Network Marketer",
            text: "Me daba miedo que bloquearan mi cuenta, pero el sistema de delay humano es increíble. Llevo 3 meses usándolo sin problemas.",
            stars: 5
        },
        {
            name: "David S.",
            role: "Consultor B2B",
            text: "La mejor inversión que he hecho. Es como tener un asistente virtual trabajando 24/7. El CRM visual me ayuda a no perder el hilo.",
            stars: 5
        }
    ];

    const faqs = [
        {
            q: "¿Es seguro para mi cuenta de Facebook?",
            a: "Sí. Prospect IA utiliza tecnología de 'Humanización' con tiempos de espera aleatorios (Delays) que simulan el comportamiento humano real. Además, incluye un Video Curso de Seguridad para enseñarte a calentar tu cuenta."
        },
        {
            q: "¿Funciona en Mac y Windows?",
            a: "Sí. Al ser una extensión de Google Chrome, funciona en cualquier sistema operativo que soporte el navegador Chrome, Brave o Edge."
        },
        {
            q: "¿Tengo que pagar mensualidad?",
            a: "No. Esta es una oferta especial de Licencia Vitalicia. Pagas una sola vez y tienes acceso de por vida, incluyendo actualizaciones futuras."
        },
        {
            q: "¿Qué pasa si no me funciona?",
            a: "Ofrecemos una garantía incondicional de 7 días. Si no logras generar leads o simplemente no te gusta, te devolvemos el 100% de tu dinero sin preguntas."
        }
    ];

    return (
        <div className="app-container">
            {/* --- URGENCY BANNER (TOP) --- */}
            <div className="urgency-banner">
                <p>⚠️ <strong>OFERTA DE LANZAMIENTO:</strong> El precio subirá a $197 en:
                    <span className="timer-box">{String(timeLeft.hours).padStart(2, '0')}h</span> :
                    <span className="timer-box">{String(timeLeft.minutes).padStart(2, '0')}m</span> :
                    <span className="timer-box">{String(timeLeft.seconds).padStart(2, '0')}s</span>
                </p>
            </div>

            {/* --- NAVBAR --- */}
            <nav>
                <div className="container nav-content">
                    <div className="logo">
                        <Zap size={28} fill="currentColor" className="text-primary" style={{ color: '#6366f1' }} />
                        <span style={{ color: 'white' }}>Prospect<span style={{ color: '#6366f1' }}>IA</span></span>
                    </div>
                    <button onClick={handleCheckout} className="btn btn-secondary nav-btn" style={{ padding: '8px 20px', fontSize: '0.9rem', borderRadius: '30px' }}>
                        Comprar Ahora
                    </button>
                </div>
            </nav>

            {/* --- HERO SECTION --- */}
            <section className="hero">
                <div className="container">
                    <div style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '50px', color: '#818cf8', fontWeight: '600', marginBottom: '24px', fontSize: '0.9rem', border: '1px solid rgba(99, 102, 241, 0.2)' }}>
                        🚀 Nueva Versión 2.0 Lanzada
                    </div>
                    <h1>
                        Automatiza tu Prospección en <br />
                        <span className="gradient-text">Facebook al 100%</span>
                    </h1>
                    <p>
                        Deja de perder tiempo copiando y pegando. Extrae miles de leads cualificados de grupos y envíales mensajes personalizados mientras duermes. El arma secreta de las agencias B2B.
                    </p>

                    {/* --- VIDEO SALES LETTER (VSL) CONTAINER --- */}
                    <div className="vsl-container">
                        <div className="vsl-wrapper">
                            {/* --- VIDEO: Reemplaza 'VIDEO_ID' con el ID de tu video de YouTube o Vimeo --- */}

                            {/* OPCIÓN 1: YOUTUBE (ACTIVA) */}
                            {/* ⚠️ IMPORTANTE: Reemplaza 'TU_ID_AQUI' en la URL de abajo con el ID de tu video */}
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/WhwZNBTVhIk?rel=0&modestbranding=1&autoplay=0"
                                title="Prospect IA Demo"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>

                            {/* PLACEHOLDER (Oculto) */}
                            {/* <div className="video-placeholder">
                                <div className="play-button">
                                    <Play size={40} fill="currentColor" />
                                </div>
                                <span>Video Cargando...</span>
                            </div> */}
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '40px' }}>
                        <button onClick={handleCheckout} className="btn btn-primary btn-pulse btn-large">
                            <Rocket size={24} /> SÍ, QUIERO AUTOMATIZAR MIS VENTAS
                        </button>
                    </div>
                    <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '10px' }}>Acceso inmediato • Pago único • Garantía de satisfacción</p>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <h3>+10k</h3>
                            <p>Leads Generados</p>
                        </div>
                        <div className="stat-item">
                            <h3>50h</h3>
                            <p>Ahorradas / Mes</p>
                        </div>
                        <div className="stat-item">
                            <h3>300%</h3>
                            <p>Más Respuestas</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- PROBLEM SECTION --- */}
            <section className="problem-section">
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '60px' }}>¿Sigues prospectando como en 2015?</h2>
                    <div className="features-grid" style={{ padding: '0' }}>
                        <div className="feature-card" style={{ background: 'rgba(239, 68, 68, 0.05)', borderColor: 'rgba(239, 68, 68, 0.1)' }}>
                            <div className="feature-icon" style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#f87171' }}>
                                <Clock />
                            </div>
                            <h3>Pérdida de Tiempo</h3>
                            <p style={{ color: '#94a3b8', marginTop: '10px' }}>Copiar nombres y perfiles a un Excel manual te roba horas valiosas que deberías usar para cerrar ventas.</p>
                        </div>
                        <div className="feature-card" style={{ background: 'rgba(239, 68, 68, 0.05)', borderColor: 'rgba(239, 68, 68, 0.1)' }}>
                            <div className="feature-icon" style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#f87171' }}>
                                <ShieldCheck />
                            </div>
                            <h3>Bloqueos de Cuenta</h3>
                            <p style={{ color: '#94a3b8', marginTop: '10px' }}>Enviar mensajes idénticos hace que Facebook te marque como SPAM y restrinja tu cuenta publicitaria.</p>
                        </div>
                        <div className="feature-card" style={{ background: 'rgba(239, 68, 68, 0.05)', borderColor: 'rgba(239, 68, 68, 0.1)' }}>
                            <div className="feature-icon" style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#f87171' }}>
                                <Users />
                            </div>
                            <h3>Leads de Mala Calidad</h3>
                            <p style={{ color: '#94a3b8', marginTop: '10px' }}>Disparar a ciegas sin saber si son tu cliente ideal llena tu agenda de reuniones con gente sin dinero.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FEATURES SECTION --- */}
            <section className="container">
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon"><Target /></div>
                        <h3>Extracción Quirúrgica</h3>
                        <p style={{ color: 'var(--text-secondary)', marginTop: '10px' }}>Entra a cualquier Grupo de Facebook (incluso privados) y extrae a todos los miembros nuevos en segundos. Filtra por antigüedad.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon"><MessageSquare /></div>
                        <h3>Mensajería IA Humanizada</h3>
                        <p style={{ color: 'var(--text-secondary)', marginTop: '10px' }}>El único sistema con "Spintax" real y pausas aleatorias. Meta pensará que eres un humano tecleando muy rápido.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon"><Zap /></div>
                        <h3>CRM Integrado</h3>
                        <p style={{ color: 'var(--text-secondary)', marginTop: '10px' }}>Olvida los Excel. Gestiona tus prospectos en un tablero Kanban visual: Contactado, Interesado, Cerrado.</p>
                    </div>
                </div>
            </section>

            {/* --- TESTIMONIALS SECTION --- */}
            <section className="testimonials-section">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '2.5rem' }}>Lo que dicen los usuarios</h2>
                        <p style={{ color: 'var(--text-secondary)' }}>Más de 500 emprendedores ya automatizaron sus ventas.</p>
                    </div>
                    <div className="testimonials-grid">
                        {testimonials.map((t, i) => (
                            <div key={i} className="testimonial-card">
                                <div style={{ color: '#fbbf24', marginBottom: '15px', display: 'flex' }}>
                                    {[...Array(t.stars)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                                </div>
                                <p style={{ marginBottom: '20px', fontStyle: 'italic' }}>"{t.text}"</p>
                                <div className="user-info">
                                    <div className="user-avatar" style={{ background: `hsl(${i * 60}, 70%, 50%)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem' }}>
                                        {t.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 'bold' }}>{t.name}</div>
                                        <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{t.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- COMPARISON SECTION --- */}
            <section className="comparison-section">
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2.5rem' }}>¿Por qué Prospect IA?</h2>
                    <div className="comparison-table">
                        <div className="comparison-header">
                            <div className="col-feature">Característica</div>
                            <div className="col-competitor">Otras Herramientas</div>
                            <div className="col-us">Prospect IA ⚡</div>
                        </div>

                        <div className="comparison-row">
                            <div className="col-feature">Precio</div>
                            <div className="col-competitor text-red">$49 - $99 / mes</div>
                            <div className="col-us text-green">$67 (Pago Único)</div>
                        </div>

                        <div className="comparison-row">
                            <div className="col-feature">Seguridad</div>
                            <div className="col-competitor">Alta probabilidad de Spam</div>
                            <div className="col-us">Algoritmo Anti-Baneo Humanizado</div>
                        </div>

                        <div className="comparison-row">
                            <div className="col-feature">Extracción</div>
                            <div className="col-competitor">Lenta / Manual</div>
                            <div className="col-us">Masiva e Instantánea</div>
                        </div>

                        <div className="comparison-row">
                            <div className="col-feature">Actualizaciones</div>
                            <div className="col-competitor">Cobran por versión 2.0</div>
                            <div className="col-us">Gratis de por vida</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- LIFESTYLE / FUTURE PACING SECTION --- */}
            <section className="lifestyle-section" style={{ padding: '100px 0', background: 'linear-gradient(to bottom, #0f172a, #1e1b4b)' }}>
                <div className="container">
                    <div className="lifestyle-content" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>Visualiza tu negocio el próximo Lunes...</h2>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', textAlign: 'left', marginTop: '50px' }}>

                            {/* The Old Way */}
                            <div style={{ opacity: 0.6, border: '1px solid rgba(255,255,255,0.1)', padding: '30px', borderRadius: '20px' }}>
                                <h3 style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '10px' }}><Clock size={20} /> Sin Prospect IA</h3>
                                <ul style={{ listStyle: 'none', marginTop: '20px' }}>
                                    <li style={{ marginBottom: '15px', display: 'flex', gap: '10px' }}>❌ Copiando y pegando 3 horas al día.</li>
                                    <li style={{ marginBottom: '15px', display: 'flex', gap: '10px' }}>❌ Estrés por no saber de dónde vendrá el próximo cliente.</li>
                                    <li style={{ marginBottom: '15px', display: 'flex', gap: '10px' }}>❌ "Visto" en tus mensajes sin respuesta.</li>
                                </ul>
                            </div>

                            {/* The New Way */}
                            <div style={{ background: 'rgba(99, 102, 241, 0.1)', border: '1px solid #6366f1', padding: '30px', borderRadius: '20px', transform: 'scale(1.05)', boxShadow: '0 20px 50px rgba(99, 102, 241, 0.2)' }}>
                                <h3 style={{ color: 'white', display: 'flex', alignItems: 'center', gap: '10px' }}><Rocket size={20} color="#6366f1" /> Con Prospect IA</h3>
                                <ul style={{ listStyle: 'none', marginTop: '20px' }}>
                                    <li style={{ marginBottom: '15px', display: 'flex', gap: '10px' }}>✅ Te despiertas con 10-15 respuestas positivas.</li>
                                    <li style={{ marginBottom: '15px', display: 'flex', gap: '10px' }}>✅ Tu calendario se llena automáticamente.</li>
                                    <li style={{ marginBottom: '15px', display: 'flex', gap: '10px' }}>✅ Tienes TIEMPO libre para disfrutar.</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* --- PRICING SECTION --- */}
            <section className="pricing-section">
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Una Inversión, Retorno Infinito</h2>
                    <p style={{ color: 'var(--text-secondary)' }}>Deja de pagar mensualidades absurdas de $99/mes.</p>

                    <div className="pricing-card">
                        <div className="pricing-badge">OFERTA LIMITADA</div>
                        <h3>Licencia Vitalicia</h3>
                        <div className="price-meta">Normal: $197</div>
                        <div className="price-tag">$67 <span style={{ fontSize: '1.5rem', fontWeight: '400', color: 'var(--text-secondary)' }}>USD</span></div>
                        <p style={{ color: '#94a3b8', marginBottom: '30px' }}>Pago único. Acceso de por vida.</p>

                        <button onClick={handleCheckout} className="btn btn-primary btn-pulse" style={{ width: '100%' }}>
                            ACTIVAR MI LICENCIA AHORA
                        </button>

                        {/* TRUST BADGES */}
                        <div className="trust-badges" style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '15px', opacity: 0.7 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.8rem' }}><ShieldCheck size={16} /> Pago Seguro SSL</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.8rem' }}><CreditCard size={16} /> Acceso Inmediato</div>
                        </div>

                        <p style={{ fontSize: '0.8rem', marginTop: '15px', color: '#64748b', display: 'flex', justifyContent: 'center', gap: '5px', alignItems: 'center' }}>
                            <ShieldCheck size={14} /> Garantía de 7 días o te devolvemos tu dinero.
                        </p>

                        <div className="feature-list">
                            <div className="feature-item"><Check size={20} color="#10b981" /> <span>Extensión de Chrome Prospect IA</span></div>
                            <div className="feature-item"><Check size={20} color="#10b981" /> <span>Extracciones Ilimitadas</span></div>
                            <div className="feature-item"><Check size={20} color="#10b981" /> <span>Mensajería Automática (DMs)</span></div>
                            <div className="feature-item"><Check size={20} color="#10b981" /> <span>Actualizaciones Gratuitas de por vida</span></div>
                            <div className="feature-item"><Check size={20} color="#10b981" /> <span>BONUS: Curso de Estrategia Anti-Baneo</span></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FAQ SECTION --- */}
            <section className="accordion-section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2rem' }}>Preguntas Frecuentes</h2>
                    {faqs.map((faq, i) => (
                        <div key={i} className="accordion-item" onClick={() => toggleFaq(i)}>
                            <div className="accordion-header">
                                {faq.q}
                                {openFaq === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </div>
                            {openFaq === i && (
                                <div className="accordion-content">
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* --- FOOTER --- */}
            <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '60px 0', textAlign: 'center' }}>
                <div className="container">
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                        © 2026 Prospect IA. Todos los derechos reservados.<br />
                        Esta herramienta no está afiliada ni respaldada por Meta Platforms, Inc.
                    </p>

                    <div className="legal-links" style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '20px', fontSize: '0.8rem', color: '#64748b' }}>
                        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Política de Privacidad</a>
                        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Términos de Uso</a>
                        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Descargo de Responsabilidad</a>
                    </div>

                    <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', opacity: 0.5 }}>
                        <CreditCard style={{ margin: '0 5px' }} />
                    </div>
                </div>
            </footer>

            {/* --- STICKY CTA (DESKTOP & MOBILE) --- */}
            <div className="sticky-cta">
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Oferta Especial:</span>
                    <span style={{ fontWeight: 'bold', color: 'white' }}>$67 USD <span style={{ fontSize: '0.7rem', textDecoration: 'line-through', color: '#64748b' }}>$197</span></span>
                </div>
                <button onClick={handleCheckout} className="btn-primary" style={{ padding: '10px 20px', borderRadius: '30px', fontSize: '0.9rem', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    COMPRAR <Rocket size={16} />
                </button>
            </div>

        </div>
    )
}

export default App
