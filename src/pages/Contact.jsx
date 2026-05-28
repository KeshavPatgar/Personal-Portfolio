
import { Mail, Phone, Send } from 'lucide-react';
import { useMemo, useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  const [name, setName] = useState('');
  const [fromEmail, setFromEmail] = useState('');
  const [message, setMessage] = useState('');

  const toEmail = 'keshavpatagar86@gmail.com';

  const mailtoHref = useMemo(() => {
    const subject = `Portfolio message from ${name || 'Someone'}`;
    const bodyLines = [
      `Name: ${name || '-'}`,
      `Email: ${fromEmail || '-'}`,
      '',
      message || '',
    ];

    const params = new URLSearchParams({
      subject,
      body: bodyLines.join('\n'),
    });

    return `mailto:${toEmail}?${params.toString()}`;
  }, [fromEmail, message, name]);

  const contactMethods = [
    {
      icon: <Mail className="text-brand-orange" size={24} />,
      label: "Email",
      value: toEmail,
      link: `mailto:${toEmail}`
    },
    {
      icon: <FaLinkedin className="text-brand-orange" size={24} />,
      label: "LinkedIn",
      value: "in/keshavpatgar",
      link: "https://www.linkedin.com/in/keshavpatgar"
    },
    {
      icon: <Phone className="text-brand-orange" size={24} />,
      label: "WhatsApp",
      value: "+91 6362935262",
      link: "https://wa.me/916362935262"
    }
  ];

  return (
    <section className="min-h-screen pt-32 pb-20 px-8 flex items-center justify-center relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute -top-10 left-10 w-96 h-96 bg-brand-orange/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter">Let's <span className="text-brand-orange">Connect</span></h2>
          <p className="opacity-70 mb-10 text-lg md:text-xl leading-relaxed max-w-md">
            Currently looking for <span className="font-bold text-brand-orange">SDE-1</span> or <span className="font-bold text-brand-orange">Full Stack</span> roles in Bengaluru. 
            Whether you have a question or just want to say hi, my inbox is always open!
          </p>

          <div className="flex flex-col gap-6">
            {contactMethods.map((method, index) => (
              <a 
                key={index} 
                href={method.link} 
                target={method.link.startsWith('mailto:') ? undefined : "_blank"}
                rel={method.link.startsWith('mailto:') ? undefined : "noreferrer"}
                className="flex items-center gap-5 p-6 rounded-2xl border border-gray-500/10 bg-gray-500/5 hover:bg-brand-orange/5 hover:border-brand-orange/30 hover:-translate-y-1 transition-all group backdrop-blur-sm shadow-sm"
              >
                <div className="p-4 bg-white/5 rounded-xl group-hover:scale-110 transition-transform">{method.icon}</div>
                <div>
                  <p className="text-xs opacity-50 uppercase tracking-widest font-bold mb-1">{method.label}</p>
                  <p className="text-sm font-medium group-hover:text-brand-orange transition-colors">{method.value}</p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center"
        >
          <form
            className="w-full p-8 md:p-10 rounded-3xl border border-gray-500/20 bg-white/5 backdrop-blur-xl shadow-2xl flex flex-col gap-6"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = mailtoHref;
            }}
          >
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase opacity-50 tracking-wider">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-black/20 border border-white/10 rounded-xl p-4 outline-none transition-all focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase opacity-50 tracking-wider">Email</label>
              <input
                type="email"
                placeholder="email@example.com"
                value={fromEmail}
                onChange={(e) => setFromEmail(e.target.value)}
                className="bg-black/20 border border-white/10 rounded-xl p-4 outline-none transition-all focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase opacity-50 tracking-wider">Message</label>
              <textarea
                rows="4"
                placeholder="How can I help you?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-black/20 border border-white/10 rounded-xl p-4 outline-none transition-all focus:border-brand-orange focus:ring-1 focus:ring-brand-orange resize-none"
              />
            </div>
            <button type="submit" className="bg-brand-orange text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:brightness-110 active:scale-95 shadow-[0_10px_30px_rgba(252,128,25,0.3)] mt-2">
              Send Message <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;