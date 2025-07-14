import  { useState } from "react";
import {
  Copy,
  Check,
  Info,
  Gift,
  Shield,
  Clock,
  Star,
  Zap,
  Award,
  ArrowLeft,
  Home,
} from "lucide-react";

const DepositeComponent = () => {
  const [selectedCrypto, setSelectedCrypto] = useState("BTC");
  const [copied, setCopied] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const cryptoOptions = {
    BTC: {
      name: "Bitcoin",
      address: "bc1q46aspj5n6avdl5zu7k2vdcrmuyxgrcdy3jrxvc",
      network: "Bitcoin network only",
      color: "from-orange-400 to-orange-600",
      icon: "₿",
    },
    ETH: {
      name: "Ethereum",
      address: "0xEf0fe7fc0Cf0c4fa5755B957B547F59D8A308147",
      network: "Ethereum network only",
      color: "from-blue-400 to-blue-600",
      icon: "Ξ",
    },
    BTCT: {
      name: "Bitcoin (TRC20)",
      address: "TEaSqWy5NsS5mbkTgnNSmT5pem9NmxTY7e",
      network: "TRON network only",
      color: "from-red-400 to-red-600",
      icon: "₿",
    },
  };

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(
        cryptoOptions[selectedCrypto].address
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy address:", err);
    }
  };

  return (
    <div className="h-auto bg-gradient-to-br from-gray-50 to-gray-100 lg:px-10  px-2 md:px-6 py-4 space-y-6 lg:mt-20 md:mt-30  sm:mt-40 mt-16">
      {/* Header Navigation */}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Page Title Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Instant Crypto Deposit
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Fund your Stack365 account instantly with cryptocurrency and unlock
            exclusive bonuses
          </p>
          <p className="text-gray-500">
            Secure, fast, and rewarding - join thousands of players who choose
            crypto for the ultimate betting experience.
          </p>
        </div>

        {/* Welcome Bonus Banner */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-6 mb-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <Star className="w-7 h-7" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-1">
                    🎊 Welcome Bonus Package
                  </h2>
                  <p className="text-emerald-100 mb-1">
                    Get 100% match bonus up to $500 + 50 free spins
                  </p>
                  <p className="text-sm text-emerald-200">
                    Valid for first-time depositors only
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold">$500</p>
                <p className="text-sm text-emerald-100">Max Bonus</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Payment Section */}
          <div className="space-y-6">
            {/* Minimum Deposit Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">$</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Minimum Deposit
                  </h3>
                  <p className="text-3xl font-bold text-purple-600">$100 USD</p>
                </div>
              </div>
              <p className="text-gray-600">
                Start your winning journey with just $100 and receive instant
                bonus credits to boost your gameplay.
              </p>
            </div>

            {/* Crypto Selection */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Zap className="w-6 h-6 mr-3 text-purple-600" />
                Choose Your Cryptocurrency
              </h3>
              <p className="text-gray-600 mb-4">
                Select your preferred cryptocurrency for instant deposits. All
                transactions are processed within minutes.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {Object.entries(cryptoOptions).map(([key, crypto]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedCrypto(key)}
                    className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                      selectedCrypto === key
                        ? "border-purple-500 bg-purple-50 shadow-lg scale-105"
                        : "border-gray-200 hover:border-gray-300 hover:shadow-md"
                    }`}
                  >
                    <div className="text-center">
                      <div
                        className={`w-10 h-10 rounded-full bg-gradient-to-r ${crypto.color} flex items-center justify-center mx-auto mb-3`}
                      >
                        <span className="text-white font-bold text-lg">
                          {crypto.icon}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-gray-800">
                        {key}
                      </p>
                      <p className="text-xs text-gray-500">{crypto.name}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* QR Code Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Info className="w-6 h-6 mr-3 text-purple-600" />
                Scan QR Code
              </h3>
              <p className="text-gray-600 mb-4">
                Simply scan the QR code below with your crypto wallet app to
                initiate the deposit instantly.
              </p>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 text-center">
                <div className="w-64 h-64 bg-white rounded-2xl mx-auto shadow-lg border-4 border-gray-200 flex items-center justify-center">
                  <img
                    src="https://www.easewithdraw.com/btct.jpg"
                    alt="Image"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>

                <p className="text-sm text-gray-600 mt-4 font-medium">
                  Compatible with all major crypto wallets
                </p>
              </div>
            </div>

            {/* Address Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Copy className="w-6 h-6 mr-3 text-purple-600" />
                Or Copy Wallet Address
              </h3>
              <p className="text-gray-600 mb-4">
                Manually copy the wallet address below and paste it into your
                crypto wallet to send the deposit.
              </p>

              <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-8 h-8 rounded-full bg-gradient-to-r ${cryptoOptions[selectedCrypto].color} flex items-center justify-center`}
                    >
                      <span className="text-white font-bold text-sm">
                        {cryptoOptions[selectedCrypto].icon}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">
                        {cryptoOptions[selectedCrypto].name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {cryptoOptions[selectedCrypto].network}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 bg-white rounded-xl p-4 border">
                  <code className="flex-1 text-sm text-gray-800 break-all font-mono">
                    {cryptoOptions[selectedCrypto].address}
                  </code>
                  <button
                    onClick={handleCopyAddress}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                      copied
                        ? "bg-green-500 text-white"
                        : "bg-purple-500 text-white hover:bg-purple-600"
                    }`}
                  >
                    {copied ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                    <span className="text-sm font-medium">
                      {copied ? "Copied!" : "Copy"}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Benefits & Terms */}
          <div className="space-y-6">
            {/* Benefits Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Award className="w-6 h-6 mr-3 text-purple-600" />
                Your Exclusive Benefits
              </h3>
              <p className="text-gray-600 mb-6">
                Unlock premium features and bonuses when you make your first
                crypto deposit with Stack365.
              </p>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 border border-purple-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                      <Gift className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-purple-800">
                        100% Welcome Bonus
                      </p>
                      <p className="text-sm text-purple-600">
                        Double your first deposit up to $500
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-blue-800">
                        50 Free Spins
                      </p>
                      <p className="text-sm text-blue-600">
                        Bonus spins on popular slot games
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border border-green-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-green-800">
                        Instant VIP Status
                      </p>
                      <p className="text-sm text-green-600">
                        Skip the queue with priority access
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 border border-orange-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-orange-800">
                        24/7 Priority Support
                      </p>
                      <p className="text-sm text-orange-600">
                        Dedicated support team assistance
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Information */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Info className="w-6 h-6 mr-3 text-yellow-600" />
                Important Information
              </h3>
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-4">
                <ul className="space-y-2 text-sm text-yellow-800">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Send only {cryptoOptions[selectedCrypto].name} to this
                    address
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Minimum deposit amount is $100 USD equivalent
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Deposits are processed automatically within 10-30 minutes
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Welcome bonus will be credited automatically after
                    confirmation
                  </li>
                </ul>
              </div>
            </div>

            {/* Terms Agreement */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Terms & Conditions
              </h3>
              <label className="flex items-start space-x-3 cursor-pointer p-4 bg-gray-50 rounded-xl border border-gray-200 hover:bg-gray-100 transition-colors">
                <input
                  type="checkbox"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="mt-1 w-5 h-5 text-purple-600 rounded focus:ring-purple-500"
                />
                <div className="text-sm text-gray-700">
                  <p className="font-medium mb-2">
                    I agree to Stack365 Terms & Conditions
                  </p>
                  <p className="text-xs text-gray-600">
                    By proceeding with this deposit, you acknowledge that you
                    have read and agree to our{" "}
                    <a
                      href="#"
                      className="text-purple-600 hover:underline font-medium"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="text-purple-600 hover:underline font-medium"
                    >
                      Privacy Policy
                    </a>
                    . You confirm that you are of legal age to participate in
                    online betting activities.
                  </p>
                </div>
              </label>
            </div>

            {/* Confirm Button */}
            <button
              disabled={!agreedToTerms}
              className={`w-full py-5 rounded-2xl font-bold text-white transition-all duration-300 text-lg ${
                agreedToTerms
                  ? "bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 hover:from-purple-700 hover:via-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transform hover:scale-105"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              {agreedToTerms
                ? "🚀 Confirm Deposit & Claim Your Bonus"
                : "Accept Terms to Continue"}
            </button>

            {/* Security Footer */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <div className="text-center space-y-3">
                <div className="flex items-center justify-center text-sm text-gray-600">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>Average processing time: 15 minutes</span>
                </div>

                <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Shield className="w-4 h-4 mr-2" />
                    <span>SSL </span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-2" />
                    <span>Licensed Platform</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-4 h-4 mr-2" />
                    <span>Trusted by 100K+ players</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    
    </div>
  );
};

export default DepositeComponent;