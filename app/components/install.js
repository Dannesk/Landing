import React from "react";
import ReactDOM from "react-dom";
import { FaWindows, FaLinux, FaApple } from "react-icons/fa";

const InstallModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center px-4">
      <div
        className="
          bg-cyan-50 border border-cyan-100 font-sans rounded-lg p-8 
          max-w-3xl w-full text-sm text-gray-900 relative shadow-lg
          max-h-[90vh] overflow-y-auto
        "
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-900 hover:text-white transition"
          aria-label="Close modal"
        >
          ✕
        </button>

        <table className="w-full mb-8  text-left text-sm">
          <thead>
            <tr className="border-b border-gray-400 text-gray-900">
              <th className="py-2 px-3 w-1/4">Platform</th>
              <th className="py-2 px-3 text-center">Status</th>
              <th className="py-2 px-3">Notes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300">
            <tr >
              <td className="py-2 px-3 font-semibold flex items-center gap-2">
                <FaWindows /> Windows
              </td>
              <td className="py-2 px-3 text-green-700 font-semibold text-center">
                ✅
              </td>
              <td className="py-2 px-3">
Download and run <code>Dannesk-Install.exe</code>. Windows may show a SmartScreen warning due to self-signed certificate—click {"More info > Run anyway"}.
              </td>
            </tr>

            <tr>
              <td className="py-2 px-3 font-semibold flex items-center gap-2">
                <FaLinux /> Linux 
              </td>
              <td className="py-2 px-3 text-green-700 font-semibold text-center">
                ⏳
              </td>
              <td className="py-2 px-3">Not Available Yet</td>

            </tr>

            <tr>
              <td className="py-2 px-3 font-semibold flex items-center gap-2">
                <FaApple /> macOS
              </td>
              <td className="py-2 px-3 text-yellow-600 font-semibold text-center">
                ⏳
              </td>
              <td className="py-2 px-3">Not Available Yet</td>
            </tr>
          </tbody>
        </table>

        {/* Verification Section */}
    
        <div className="bg-yellow-50 border-l-4 border-yellow-800 rounded-md p-3 mb-4">
        <p className="text-gray-800 mb-3 leading-relaxed">
  Always download from our official site. Verify domain is <strong className="text-gray-800">https://dannesk.com</strong>.
</p>
</div>

<div className="bg-cyan-100 border-l-4 border-cyan-400 rounded-md p-3 mb-4">
  <p className="text-gray-900 leading-relaxed">
    <strong>Optional (for devs):</strong> Verify the signature using our public certificate. Requires <a
                  href="https://www.openssl.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-800 hover:text-cyan-900 underline"
                >
                  OpenSSL
                </a> and <a
                  href="https://github.com/mtrojnar/osslsigncode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-800 hover:text-cyan-900 underline"
                >
                  osslsigncode
                </a>.
  </p>
</div>
        <div className="bg-blue-900 border-l-4 border-blue-300 rounded-md p-3 mb-4">
          <a
            href="https://github.com/niminypiminy/Dannesk/blob/main/dannesk.cert.pem"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-100 hover:text-blue-200"
          >
            Download: dannesk.cert.pem
          </a>
        </div>

       
      <div className="space-y-3">
  {/* Windows via WSL */}
  <div className="bg-gray-800 text-gray-100 border rounded-lg p-4">
    <div className="flex items-center gap-2 font-semibold text-gray-100 mb-2">
      <FaWindows /> Windows (via WSL)
    </div>
    <p className="text-xs mb-2">Install WSL (run <code>wsl --install</code> in PowerShell as admin), then Ubuntu.</p>
    <pre className="text-sm overflow-x-auto font-mono p-3 rounded-md">
      <code>
{`sudo apt update && sudo apt install osslsigncode -y
cd /mnt/c/path/to/downloads
osslsigncode verify -in Dannesk-Install.exe -CAfile dannesk.cert.pem`}
      </code>
    </pre>
  </div>

  
</div>


        </div>
      </div>,
    document.body
  );
};

export default InstallModal;