"use client";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const text = "Say Hello";
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false
  });
  const form = useRef();

  useEffect(() => {
    let timer;
    if (status.success || status.error) {
      timer = setTimeout(() => {
        setStatus(prev => ({ ...prev, success: false, error: false }));
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [status.success, status.error]);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false });

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID, 
        process.env.NEXT_PUBLIC_TEMPLATE_ID, 
        form.current, 
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setStatus({ loading: false, success: true, error: false });
          form.current.reset();
        },
        (error) => {
          console.error('EmailJS Error:', error);
          setStatus({ loading: false, success: false, error: true });
        },
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{y: "-200vh"}}
      animate={{y: "0%"}}
      transition={{duration: 1}}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-6 md:px-8 lg:px-20 xl:px-48 overflow-hidden">
        {/* Left side - Animation */}
        <div className="flex-1 lg:h-full lg:w-1/2 flex items-center justify-center text-3xl sm:text-4xl text-center">
          <motion.div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{opacity: 1}}
                animate={{opacity: 0}}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1
                }}
              >
                {letter}
              </motion.span>
            ))}
            ☺️
          </motion.div>
        </div>
        
        {/* Right side - Form */}
        <div className="flex-1 lg:h-full lg:w-1/2 relative pb-3 flex items-center">
          <form 
            onSubmit={sendEmail} 
            ref={form} 
            className="bg-red-50 rounded-xl flex flex-col gap-4 sm:gap-6 p-6 sm:p-8 md:p-10 lg:p-12 w-full"
          >
            {/* Loading indicator */}
            {status.loading && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute top-4 sm:top-6 right-4 sm:right-6"
              >
                <div className="animate-spin rounded-full h-5 w-5 sm:h-6 sm:w-6 border-b-2 border-purple-500"></div>
              </motion.div>
            )}

            <span className="text-base sm:text-lg">Dear Fidha Fathima,</span>
            <textarea 
              name="user_message"
              rows={5} 
              required
              placeholder="Write your message here..."
              className="bg-transparent border-b-2 border-b-black outline-none resize-none min-h-[120px] sm:min-h-[150px] text-black placeholder-gray-500 p-2 text-sm sm:text-base"
            />
            <span className="text-base sm:text-lg">My mail address is</span>
            <input 
              name="user_email"
              type="email" 
              required
              placeholder="your.email@example.com"
              className="bg-transparent border-b-2 border-b-black outline-none text-black placeholder-gray-500 p-2 text-sm sm:text-base"
            />
            <input type="hidden" name="time" value={new Date().toLocaleString()} />
            <span className="text-base sm:text-lg">Regards</span>
            <button 
              type="submit"
              disabled={status.loading}
              className={`bg-purple-200 rounded font-semibold text-gray-600 py-3 px-4 sm:p-4 hover:bg-purple-300 transition-colors text-sm sm:text-base ${
                status.loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {status.loading ? 'Sending...' : 'Send'}
            </button>
          </form>

          {/* Status messages */}
          {(status.success || status.error) && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              exit={{ opacity: 0, y: -20 }}
              className={`absolute top-4 sm:top-6 right-4 sm:right-6 px-3 py-1 sm:px-4 sm:py-2 rounded-lg shadow-md text-sm sm:text-base ${
                status.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}
            >
              {status.success ? '✓ Sent!' : '✗ Failed'}
            </motion.div>
          )}
        </div>
        <div className="lg:hidden w-full px-4 py-10 text-center">
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.2, duration: 0.8 }}
    className="whitespace-nowrap overflow-hidden text-ellipsis"
  >
    <motion.span
      className="text-l md:text-2xl font-light bg-gradient-to-r from-purple-500 via-pink-400 to-orange-500 bg-clip-text text-transparent inline-flex items-center"
      animate={{ 
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      style={{
        backgroundSize: "200% 200%",
        display: 'inline-flex',
        alignItems: 'center'
      }}
    >
      Open to opportunities — let&apos;s chat 
    </motion.span>
    &nbsp;🤝
  </motion.div>
</div>
      </div>
      
    </motion.div>
  )
}

export default Contact;