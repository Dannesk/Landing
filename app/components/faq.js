import React from "react";
import ReactDOM from "react-dom";

const FaqModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center px-4">
      <div
        className="
          bg-cyan-50 border border-cyan-100 rounded-lg 
          p-8 max-w-3xl w-full font-sans text-sm text-gray-900 relative shadow-lg
          max-h-[90vh] overflow-y-auto
        "
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-900 hover:text-white transition"
          aria-label="Close FAQ"
        >
          ✕
        </button>

        {/* --- Blockchain Comparison Table --- */}
        <table className="w-full mb-8 border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-gray-400 text-gray-900">
              <th className="py-2 px-3 w-1/4">Blockchain</th>
              <th className="py-2 px-3 font-semibold">XRPL</th>
              <th className="py-2 px-3 font-semibold">Bitcoin</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300">
            <tr>
              <td className="py-2 px-3 font-semibold">Fees</td>
              <td className="py-2 px-3">
                Fraction of a cent per transaction — usually less than{" "}
                <strong>$0.001</strong>.
              </td>
              <td className="py-2 px-3">
                Recommended minimum: <strong>300 satoshis</strong> to avoid mempool drops.
              </td>
            </tr>
            <tr>
              <td className="py-2 px-3 font-semibold">Tokens</td>
              <td className="py-2 px-3">
                <strong>XRP</strong> (native), plus issued tokens like{" "}
                <strong>RLUSD</strong> and <strong>EUROP</strong>.
              </td>
              <td className="py-2 px-3">
                <strong>BTC</strong> only (native asset).
              </td>
            </tr>
            <tr>
              <td className="py-2 px-3 font-semibold">Trading & Liquidity</td>
              <td className="py-2 px-3">
                On-chain — all liquidity comes from decentralized order books.
              </td>
              <td className="py-2 px-3">NA</td>
            </tr>
            <tr>
              <td className="py-2 px-3 font-semibold">Speed</td>
              <td className="py-2 px-3">~3–5 seconds per transaction.</td>
              <td className="py-2 px-3">~10 minutes average block time.</td>
            </tr>
            <tr>
              <td className="py-2 px-3 font-semibold">Security Model</td>
              <td className="py-2 px-3">
                Consensus via trusted validators — fast finality.
              </td>
              <td className="py-2 px-3">
                Proof-of-Work — highly secure, slower as a result.
              </td>
            </tr>
          </tbody>
        </table>

        {/* --- Known Issues Section --- */}
        <table className="w-full mb-8 border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-gray-400 text-gray-900">
              <th className="py-2 px-3 w-1/4">Known Issues</th>
              <th className="py-2 px-3 font-semibold">Issue</th>
              <th className="py-2 px-3 font-semibold">Notes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300">
            <tr>
              <td className="py-2 px-3 font-semibold">Blockbook</td>
              <td className="py-2 px-3">
                Blockbook has a few quirks, especially under load.
              </td>
              <td className="py-2 px-3">
                In rare cases where you're out of sync, reimport your wallet.
              </td>
            </tr>
            <tr>
              <td className="py-2 px-3 font-semibold">Mempool</td>
              <td className="py-2 px-3">Choose your fee wisely.</td>
              <td className="py-2 px-3">
                Otherwise it may sit in mempool for hours, even days.
              </td>
            </tr>
            <tr>
              <td className="py-2 px-3 font-semibold">Latency</td>
              <td className="py-2 px-3">Our servers are in Singapore.</td>
              <td className="py-2 px-3">
                For example, latency is about 290 ms slower from NYC, 20 ms from
                Bangkok, and ~220 ms from Germany.
              </td>
            </tr>
          </tbody>
        </table>

     {/* --- Security Section --- */}
<table className="w-full mb-8 border-collapse text-left text-sm">
  <thead>
    <tr className="border-b border-gray-400 text-gray-900">
      <th className="py-2 px-3 w-1/4">Security</th>
      <th className="py-2 px-3 font-semibold" colSpan={2}>
        Overview
      </th>
    </tr>
  </thead>
  <tbody className="divide-y divide-gray-300">
    <tr>
      <td className="py-2 px-3 font-semibold">Encryption</td>
      <td className="py-2 px-3" colSpan={2}>
        Client storage is protected with{" "}
        <strong>AES-256</strong> — a symmetric cipher with{" "}
        <code>2<sup>256</sup></code> possible combinations (~10<sup>77</sup>),
        making brute-force attacks implausible.
      </td>
    </tr>
    <tr>
      <td className="py-2 px-3 font-semibold">Hardware Enclave</td>
      <td className="py-2 px-3" colSpan={2}>
        By default encrypted keys are isolated in a
        tamper-resistant hardware enclave, shielded from the OS and
        system memory. This prevents physical and side-channel attacks.
      </td>
    </tr>
    <tr>
      <td className="py-2 px-3 font-semibold">Cold Storage</td>
      <td className="py-2 px-3" colSpan={2}>
        Users may choose to delete their encrypted key from the device entirely with one click.
        This offers a true cold storage option for maximum security.
      </td>
    </tr>
    <tr>
      <td className="py-2 px-3 font-semibold">Best Practices</td>
      <td className="py-2 px-3" colSpan={2}>
        Never store your passphrase or 25th word on the same device as your
        encrypted key. Without your passphrase, an attacker faces a{" "}
        <code>2<sup>256</sup></code>-sized keyspace. And without the 25th word, even if the mnemonic was somehow decrypted, the attacker would still fail.
      </td>
    </tr>
   <tr>
  <td className="py-2 px-3 font-semibold">25th Word vs Passphrase</td>
  <td className="py-2 px-3" colSpan={2}>
    ⚠️ The <strong>BIP39 25th word</strong> should never be identical to your
    passphrase. If they are the same and your passphrase is compromised,
    you effectively lose an entire layer of protection. Treat the 25th word
    and passphrase as <em>independent secrets</em> to maintain full security
    separation.
    
  </td>
</tr>
    
  </tbody>
</table>


        {/* --- General Section --- */}
        <table className="w-full border-collapse text-left text-sm">
          <tbody className="divide-y divide-gray-300">
            <tr>
              <td className="py-2 px-3 font-semibold w-1/4">Open source</td>
              <td className="py-2 px-3" colSpan={2}>
                You can review or contribute on{" "}
                <a
                  href="https://github.com/niminypiminy/Dannesk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-800 hover:text-cyan-900 underline"
                >
                  GitHub
                </a>.
              </td>
            </tr>
            <tr>
              <td className="py-2 px-3 font-semibold">Contact</td>
              <td className="py-2 px-3" colSpan={2}>
                Signal: <span className="font-semibold">@dannesk.01</span>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-3 font-semibold">Our Fees</td>
              <td className="py-2 px-3" colSpan={2}>
                We don’t charge fees.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>,
    document.body
  );
};

export default FaqModal;
