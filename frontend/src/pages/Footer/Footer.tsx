import React, { useEffect } from 'react';

const Footer: React.FC = () => {
  // Load external scripts once when the component mounts
  useEffect(() => {
    const loadScript = (src: string) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
      return script;
    };

    const jqueryScript = loadScript('webjars/jquery/1.9.1/jquery.min.js');
    const bootstrapScript = loadScript('webjars/bootstrap/3.3.6/js/bootstrap.min.js');

    // Cleanup on unmount
    return () => {
      if (jqueryScript.parentNode) {
        jqueryScript.parentNode.removeChild(jqueryScript);
      }
      if (bootstrapScript.parentNode) {
        bootstrapScript.parentNode.removeChild(bootstrapScript);
      }
    };
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <p className="text-muted">© 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;