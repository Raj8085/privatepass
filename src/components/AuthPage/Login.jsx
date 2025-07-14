/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, Phone, ArrowRight, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const navigate = useNavigate()

  // In-memory storage (replace with localStorage in your environment)
  const [users, setUsers] = useState([]);

  // Validation rules
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\+?[\d\s\-()]{10,}$/;
    return phoneRegex.test(phone);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const validateForm = () => {
    const newErrors = {};

    if (isSignUp) {
      if (!formData.firstName.trim()) {
        newErrors.firstName = 'First name is required';
      }
      if (!formData.lastName.trim()) {
        newErrors.lastName = 'Last name is required';
      }
      if (!formData.phone.trim()) {
        newErrors.phone = 'Phone number is required';
      } else if (!validatePhone(formData.phone)) {
        newErrors.phone = 'Please enter a valid phone number';
      }
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (!validatePassword(formData.password)) {
      newErrors.password = 'Password must be at least 8 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }

    // Clear general message
    if (message.text) {
      setMessage({ type: '', text: '' });
    }
  };

  const handleBlur = (fieldName) => {
    setTouched(prev => ({
      ...prev,
      [fieldName]: true
    }));
  };

  const checkExistingUser = (email) => {
    return users.some(user => user.email === email);
  };

  const handleSignUp = async () => {
    if (checkExistingUser(formData.email)) {
      setMessage({ type: 'error', text: 'User already exists with this email' });
      return;
    }

    try {
      const response = await fetch('https://sheetdb.io/api/v1/zhc52uzcu7n5t', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          password: formData.password, // In production, hash the password
          createdAt: new Date().toISOString()
        })
      });

      if (response.ok) {
        const userData = {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone
        };

        // Store in memory (replace with localStorage.setItem('user', JSON.stringify(userData)) in your environment)
        // For storing user
localStorage.setItem('user', JSON.stringify(userData));

// For checking existing user
const existingUser = JSON.parse(localStorage.getItem('user') || '{}');
        setUsers(prev => [...prev, userData]);
        
        setMessage({ type: 'success', text: 'Account created successfully!' });
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          password: '',
          confirmPassword: ''
        });
        
        setTimeout(() => {
          setIsSignUp(false);
        }, 2000);
      } else {
        throw new Error('Failed to create account');
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to create account. Please try again.' });
    }
  };

  const handleSignIn = async () => {
    // Check in-memory storage first (replace with  Storage.getItem('user') in your environment)
    const existingUser = users.find(user => user.email === formData.email);
    
    if (!existingUser) {
      // Check SheetDB for user
      try {
        const response = await fetch(`https://sheetdb.io/api/v1/zhc52uzcu7n5t/search?email=${formData.email}`);
        const data = await response.json();
        
        if (data.length > 0) {
          const user = data[0];
          if (user.password === formData.password) {
            const userData = {
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
              phone: user.phone
            };
            
            // Store in memory (replace with localStorage.setItem('user', JSON.stringify(userData)) in your environment)
            setUsers(prev => [...prev, userData]);
            
            setMessage({ type: 'success', text: 'Signed in successfully!' });
            
            // Reset form
            setFormData({
              firstName: '',
              lastName: '',
              email: '',
              phone: '',
              password: '',
              confirmPassword: ''
            });
          } else {
            setMessage({ type: 'error', text: 'Invalid password' });
          }
        } else {
          setMessage({ type: 'error', text: 'User not found' });
        }
      } catch (error) {
        setMessage({ type: 'error', text: 'Failed to sign in. Please try again.' });
      }
    } else {
      setMessage({ type: 'success', text: 'Welcome back!' });
      
    }
    navigate("/")
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setMessage({ type: '', text: '' });

    try {
      if (isSignUp) {
        await handleSignUp();
      } else {
        await handleSignIn();
      }
    } finally {
      setIsLoading(false);
    }
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: ''
    });
    setErrors({});
    setTouched({});
    setMessage({ type: '', text: '' });
  };

  const getFieldError = (fieldName) => {
    return touched[fieldName] && errors[fieldName];
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-red-700/8 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Auth Container */}
      <div className="relative w-full max-w-md mt-16">
        {/* Glass Card */}
        <div className="bg-gray-900/50 backdrop-blur-xl border border-red-500/20 rounded-2xl shadow-2xl p-8 transition-all duration-500 hover:shadow-red-500/20">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500/20 to-red-700/20 rounded-2xl mb-4 backdrop-blur-sm border border-red-500/20">
              <div className="w-8 h-8 bg-gradient-to-br from-red-400 to-red-600 rounded-lg"></div>
            </div>
            <h1 className="text-3xl font-bold text-red-400 mb-2">
              {isSignUp ? 'Create Account' : 'Welcome Back'}
            </h1>
            <p className="text-gray-300">
              {isSignUp ? 'Sign up to get started' : 'Sign in to your account'}
            </p>
          </div>

          {/* Message Display */}
          {message.text && (
            <div className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${
              message.type === 'success' 
                ? 'bg-green-500/10 border border-green-500/20 text-green-400' 
                : 'bg-red-500/10 border border-red-500/20 text-red-400'
            }`}>
              {message.type === 'success' ? (
                <CheckCircle className="h-5 w-5 flex-shrink-0" />
              ) : (
                <AlertCircle className="h-5 w-5 flex-shrink-0" />
              )}
              <span className="text-sm">{message.text}</span>
            </div>
          )}

          {/* Form */}
          <div className="space-y-6">
            {/* First Name and Last Name Fields (Sign Up Only) */}
            {isSignUp && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400 group-focus-within:text-red-400 transition-colors" />
                  </div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur('firstName')}
                    className={`w-full pl-10 pr-4 py-3 bg-gray-800/50 border rounded-xl text-white placeholder-gray-400 focus:outline-none transition-all duration-200 ${
                      getFieldError('firstName')
                        ? 'border-red-500/50 focus:border-red-500/70 focus:bg-gray-800/70'
                        : 'border-red-500/20 focus:border-red-500/50 focus:bg-gray-800/70'
                    }`}
                    required
                  />
                  {getFieldError('firstName') && (
                    <p className="mt-1 text-sm text-red-400">{errors.firstName}</p>
                  )}
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400 group-focus-within:text-red-400 transition-colors" />
                  </div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur('lastName')}
                    className={`w-full pl-10 pr-4 py-3 bg-gray-800/50 border rounded-xl text-white placeholder-gray-400 focus:outline-none transition-all duration-200 ${
                      getFieldError('lastName')
                        ? 'border-red-500/50 focus:border-red-500/70 focus:bg-gray-800/70'
                        : 'border-red-500/20 focus:border-red-500/50 focus:bg-gray-800/70'
                    }`}
                    required
                  />
                  {getFieldError('lastName') && (
                    <p className="mt-1 text-sm text-red-400">{errors.lastName}</p>
                  )}
                </div>
              </div>
            )}

            {/* Email Field */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-red-400 transition-colors" />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                onBlur={() => handleBlur('email')}
                className={`w-full pl-10 pr-4 py-3 bg-gray-800/50 border rounded-xl text-white placeholder-gray-400 focus:outline-none transition-all duration-200 ${
                  getFieldError('email')
                    ? 'border-red-500/50 focus:border-red-500/70 focus:bg-gray-800/70'
                    : 'border-red-500/20 focus:border-red-500/50 focus:bg-gray-800/70'
                }`}
                required
              />
              {getFieldError('email') && (
                <p className="mt-1 text-sm text-red-400">{errors.email}</p>
              )}
            </div>

            {/* Phone Field (Sign Up Only) */}
            {isSignUp && (
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-gray-400 group-focus-within:text-red-400 transition-colors" />
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  onBlur={() => handleBlur('phone')}
                  className={`w-full pl-10 pr-4 py-3 bg-gray-800/50 border rounded-xl text-white placeholder-gray-400 focus:outline-none transition-all duration-200 ${
                    getFieldError('phone')
                      ? 'border-red-500/50 focus:border-red-500/70 focus:bg-gray-800/70'
                      : 'border-red-500/20 focus:border-red-500/50 focus:bg-gray-800/70'
                  }`}
                  required
                />
                {getFieldError('phone') && (
                  <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
                )}
              </div>
            )}

            {/* Password Field */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-red-400 transition-colors" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                onBlur={() => handleBlur('password')}
                className={`w-full pl-10 pr-12 py-3 bg-gray-800/50 border rounded-xl text-white placeholder-gray-400 focus:outline-none transition-all duration-200 ${
                  getFieldError('password')
                    ? 'border-red-500/50 focus:border-red-500/70 focus:bg-gray-800/70'
                    : 'border-red-500/20 focus:border-red-500/50 focus:bg-gray-800/70'
                }`}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-red-400 transition-colors"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
              {getFieldError('password') && (
                <p className="mt-1 text-sm text-red-400">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password Field (Sign Up Only) */}
            {isSignUp && (
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-red-400 transition-colors" />
                </div>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  onBlur={() => handleBlur('confirmPassword')}
                  className={`w-full pl-10 pr-12 py-3 bg-gray-800/50 border rounded-xl text-white placeholder-gray-400 focus:outline-none transition-all duration-200 ${
                    getFieldError('confirmPassword')
                      ? 'border-red-500/50 focus:border-red-500/70 focus:bg-gray-800/70'
                      : 'border-red-500/20 focus:border-red-500/50 focus:bg-gray-800/70'
                  }`}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-red-400 transition-colors"
                >
                  {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
                {getFieldError('confirmPassword') && (
                  <p className="mt-1 text-sm text-red-400">{errors.confirmPassword}</p>
                )}
              </div>
            )}

            {/* Forgot Password (Sign In Only) */}
            {!isSignUp && (
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-sm text-red-400 hover:text-red-300 transition-colors"
                >
                  Forgot Password?
                </button>
              </div>
            )}

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 disabled:from-red-800 disabled:to-red-900 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-red-500/25 flex items-center justify-center gap-2 group"
            >
              {isLoading ? (
                <>
                  <Loader className="h-5 w-5 animate-spin" />
                  {isSignUp ? 'Creating Account...' : 'Signing In...'}
                </>
              ) : (
                <>
                  {isSignUp ? 'Create Account' : 'Sign In'}
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </div>

    
          {/* Toggle Form */}
          <div className="text-center mt-10">
            <span className="text-gray-400">
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}
            </span>
            <button
              onClick={toggleForm}
              className="ml-2 text-red-400 hover:text-red-300 font-semibold transition-colors"
            >
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}   