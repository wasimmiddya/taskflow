import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  Shield,
  User,
  Eye,
  EyeOff,
  CheckCircle2,
  Circle,
  Check,
} from 'lucide-react'

export const SignUpPage: React.FC = () => {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1)

  // Step 1 State
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  // Step 2 State
  const [username, setUsername] = useState('')
  const [accountType, setAccountType] = useState<'administrator' | 'standard'>(
    'standard'
  )

  // Step 3 State
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [agreedToTerms, setAgreedToTerms] = useState(false)

  // Error State
  const [error, setError] = useState<string | null>(null)

  // Password validations
  const hasMinLength = password.length >= 8
  const hasNumber = /\d/.test(password)
  const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)

  // Password strength calculation
  const getPasswordStrength = () => {
    if (!password) return { level: 0, label: 'Weak' }
    let score = 0
    if (hasMinLength) score++
    if (hasNumber) score++
    if (hasSpecialChar) score++

    if (score === 3) return { level: 3, label: 'Strong' }
    if (score === 2) return { level: 2, label: 'Medium' }
    return { level: 1, label: 'Weak' }
  }

  const passwordStrength = getPasswordStrength()

  // Navigation handlers
  const handleStep1Next = (e: React.FormEvent) => {
    e.preventDefault()
    if (!firstName.trim() || !lastName.trim()) {
      setError('Please fill in both your first name and last name.')
      return
    }
    setError(null)
    setCurrentStep(2)
  }

  const handleStep2Continue = (e: React.FormEvent) => {
    e.preventDefault()
    if (!username.trim()) {
      setError('Please enter a username.')
      return
    }
    setError(null)
    setCurrentStep(3)
  }

  const handleStep3Submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim() || !password) {
      setError('Please provide your email address and password.')
      return
    }
    if (!hasMinLength || !hasNumber || !hasSpecialChar) {
      setError('Please meet all password requirements.')
      return
    }
    if (!agreedToTerms) {
      setError('You must agree to the Terms of Service and Privacy Policy.')
      return
    }
    setError(null)
    // Registration complete -> redirect to login or dashboard
    navigate('/auth/login')
  }

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-gradient-to-b from-blue-50/70 via-teal-50/30 to-slate-50/60 p-4 sm:p-6 lg:p-8">
      <div className="my-6 w-full max-w-md rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-10 shadow-xl shadow-slate-200/50">
        {/* Page Title & Subtitle */}
        <div className="text-center">
          <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            {currentStep === 1 && 'Create Account'}
            {currentStep === 2 && 'Configure your profile'}
            {currentStep === 3 && 'Security Details'}
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-slate-500">
            {currentStep === 1 && 'Join TaskFlow and optimize your workflow today.'}
            {currentStep === 2 && 'Set up your identity within the workspace.'}
            {currentStep === 3 && 'Set up your credentials to access your workspace.'}
          </p>
        </div>

        {/* Stepper Progress Indicator */}
        <div className="mt-8 mb-8 flex items-center justify-between px-2">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div
              className={`flex size-8 items-center justify-center rounded-full text-xs font-bold transition ${
                currentStep >= 1
                  ? 'bg-[#0F172A] text-white shadow-xs'
                  : 'border border-slate-300 bg-white text-slate-400'
              }`}
            >
              {currentStep > 1 ? <Check className="size-4" /> : '1'}
            </div>
            <span
              className={`mt-1.5 text-xs ${
                currentStep === 1
                  ? 'font-bold text-[#0F172A]'
                  : currentStep > 1
                  ? 'font-semibold text-slate-700'
                  : 'font-medium text-slate-400'
              }`}
            >
              Personal
            </span>
          </div>

          {/* Line 1-2 */}
          <div
            className={`h-0.5 flex-1 mx-2 -mt-4 transition ${
              currentStep > 1 ? 'bg-[#0F172A]' : 'bg-slate-200'
            }`}
          />

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div
              className={`flex size-8 items-center justify-center rounded-full text-xs font-bold transition ${
                currentStep >= 2
                  ? 'bg-[#0F172A] text-white shadow-xs'
                  : 'border border-slate-300 bg-white text-slate-400'
              }`}
            >
              {currentStep > 2 ? <Check className="size-4" /> : '2'}
            </div>
            <span
              className={`mt-1.5 text-xs ${
                currentStep === 2
                  ? 'font-bold text-[#0F172A]'
                  : currentStep > 2
                  ? 'font-semibold text-slate-700'
                  : 'font-medium text-slate-400'
              }`}
            >
              Setup
            </span>
          </div>

          {/* Line 2-3 */}
          <div
            className={`h-0.5 flex-1 mx-2 -mt-4 transition ${
              currentStep > 2 ? 'bg-[#0F172A]' : 'bg-slate-200'
            }`}
          />

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div
              className={`flex size-8 items-center justify-center rounded-full text-xs font-bold transition ${
                currentStep === 3
                  ? 'bg-[#0F172A] text-white shadow-xs'
                  : 'border border-slate-300 bg-white text-slate-400'
              }`}
            >
              3
            </div>
            <span
              className={`mt-1.5 text-xs ${
                currentStep === 3
                  ? 'font-bold text-[#0F172A]'
                  : 'font-medium text-slate-400'
              }`}
            >
              Security
            </span>
          </div>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-4 rounded-lg bg-red-50 p-3 text-xs font-medium text-red-600 border border-red-200/60">
            {error}
          </div>
        )}

        {/* STEP 1: Personal Details */}
        {currentStep === 1 && (
          <form onSubmit={handleStep1Next} className="space-y-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-xs font-semibold text-slate-700 mb-1.5"
              >
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Enter your first name"
                className="w-full rounded-lg border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-sm text-slate-800 outline-none placeholder:text-slate-400 transition focus:border-slate-400 focus:bg-white focus:ring-2 focus:ring-slate-100"
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-xs font-semibold text-slate-700 mb-1.5"
              >
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Enter your last name"
                className="w-full rounded-lg border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-sm text-slate-800 outline-none placeholder:text-slate-400 transition focus:border-slate-400 focus:bg-white focus:ring-2 focus:ring-slate-100"
              />
            </div>

            <button
              type="submit"
              className="mt-4 w-full rounded-lg bg-[#0C2A4A] py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#071D35] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
            >
              Next
            </button>

            <p className="mt-6 text-center text-xs text-slate-500">
              Already have an account?{' '}
              <Link
                to="/auth/login"
                className="font-semibold text-blue-700 hover:text-blue-800 hover:underline transition"
              >
                Log in here.
              </Link>
            </p>
          </form>
        )}

        {/* STEP 2: Configure Profile */}
        {currentStep === 2 && (
          <form onSubmit={handleStep2Continue} className="space-y-5">
            <div>
              <label
                htmlFor="username"
                className="block text-xs font-semibold text-slate-700 mb-1.5"
              >
                Username
              </label>
              <div className="relative flex items-center">
                <span className="absolute left-3 text-sm text-slate-400">@</span>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="johndoe"
                  className="w-full rounded-lg border border-slate-200 bg-slate-50/60 pl-8 pr-3.5 py-2.5 text-sm text-slate-800 outline-none placeholder:text-slate-400 transition focus:border-slate-400 focus:bg-white focus:ring-2 focus:ring-slate-100"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-2">
                Account Type
              </label>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {/* Administrator Card */}
                <div
                  onClick={() => setAccountType('administrator')}
                  className={`relative flex cursor-pointer flex-col rounded-xl border p-3.5 transition ${
                    accountType === 'administrator'
                      ? 'border-[#0F172A] bg-slate-50/80 ring-1 ring-[#0F172A]'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex size-8 items-center justify-center rounded-lg bg-slate-100 text-slate-700">
                      <Shield className="size-4" />
                    </div>
                    <div
                      className={`size-4 rounded-full border flex items-center justify-center transition ${
                        accountType === 'administrator'
                          ? 'border-[#0F172A] bg-[#0F172A]'
                          : 'border-slate-300 bg-white'
                      }`}
                    >
                      {accountType === 'administrator' && (
                        <div className="size-1.5 rounded-full bg-white" />
                      )}
                    </div>
                  </div>
                  <h4 className="mt-3 text-xs font-bold text-slate-900">
                    Administrator
                  </h4>
                  <p className="mt-1 text-[11px] leading-relaxed text-slate-500">
                    Full access to workspace settings, billing, and member
                    management.
                  </p>
                </div>

                {/* Standard User Card */}
                <div
                  onClick={() => setAccountType('standard')}
                  className={`relative flex cursor-pointer flex-col rounded-xl border p-3.5 transition ${
                    accountType === 'standard'
                      ? 'border-[#0F172A] bg-slate-50/80 ring-1 ring-[#0F172A]'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex size-8 items-center justify-center rounded-lg bg-slate-100 text-slate-700">
                      <User className="size-4" />
                    </div>
                    <div
                      className={`size-4 rounded-full border flex items-center justify-center transition ${
                        accountType === 'standard'
                          ? 'border-[#0F172A] bg-[#0F172A]'
                          : 'border-slate-300 bg-white'
                      }`}
                    >
                      {accountType === 'standard' && (
                        <div className="size-1.5 rounded-full bg-white" />
                      )}
                    </div>
                  </div>
                  <h4 className="mt-3 text-xs font-bold text-slate-900">
                    Standard User
                  </h4>
                  <p className="mt-1 text-[11px] leading-relaxed text-slate-500">
                    Access to assigned tasks, projects, and standard collaboration
                    tools.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 Bottom Actions */}
            <div className="flex items-center justify-between border-t border-slate-100 pt-5 mt-6">
              <button
                type="button"
                onClick={() => {
                  setError(null)
                  setCurrentStep(1)
                }}
                className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 transition"
              >
                <ArrowLeft className="size-3.5" />
                Back
              </button>

              <button
                type="submit"
                className="flex items-center gap-1.5 rounded-lg bg-[#2E1A29] px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-slate-800"
              >
                Continue
                <ArrowRight className="size-3.5" />
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: Security Details */}
        {currentStep === 3 && (
          <form onSubmit={handleStep3Submit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold text-slate-700 mb-1.5"
              >
                Email Address
              </label>
              <div className="relative flex items-center">
                <span className="absolute left-3 text-sm text-slate-400">@</span>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex.chen@example.com"
                  className="w-full rounded-lg border border-slate-200 bg-slate-50/60 pl-8 pr-3.5 py-2.5 text-sm text-slate-800 outline-none placeholder:text-slate-400 transition focus:border-slate-400 focus:bg-white focus:ring-2 focus:ring-slate-100"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-xs font-semibold text-slate-700 mb-1.5"
              >
                Password
              </label>
              <div className="relative flex items-center">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-lg border border-slate-200 bg-slate-50/60 pl-3.5 pr-10 py-2.5 text-sm text-slate-800 outline-none placeholder:text-slate-400 transition focus:border-slate-400 focus:bg-white focus:ring-2 focus:ring-slate-100"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 text-slate-400 hover:text-slate-600 transition"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? (
                    <EyeOff className="size-4" />
                  ) : (
                    <Eye className="size-4" />
                  )}
                </button>
              </div>

              {/* Password Strength Indicator Bar */}
              <div className="mt-2.5 flex items-center justify-between gap-2">
                <div className="flex flex-1 gap-1.5">
                  <div
                    className={`h-1.5 flex-1 rounded-full transition ${
                      passwordStrength.level >= 1
                        ? 'bg-[#0F172A]'
                        : 'bg-slate-200'
                    }`}
                  />
                  <div
                    className={`h-1.5 flex-1 rounded-full transition ${
                      passwordStrength.level >= 2
                        ? 'bg-[#0F172A]'
                        : 'bg-slate-200'
                    }`}
                  />
                  <div
                    className={`h-1.5 flex-1 rounded-full transition ${
                      passwordStrength.level >= 3
                        ? 'bg-[#0F172A]'
                        : 'bg-slate-200'
                    }`}
                  />
                </div>
                <span className="text-[11px] font-semibold text-slate-600">
                  {passwordStrength.label}
                </span>
              </div>

              {/* Password Requirements Checklist */}
              <div className="mt-3 space-y-1.5 text-xs">
                <div className="flex items-center gap-1.5 text-slate-600">
                  {hasMinLength ? (
                    <CheckCircle2 className="size-3.5 text-emerald-600" />
                  ) : (
                    <Circle className="size-3.5 text-slate-300" />
                  )}
                  <span
                    className={
                      hasMinLength
                        ? 'font-medium text-slate-700'
                        : 'text-slate-500'
                    }
                  >
                    At least 8 characters
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-slate-600">
                  {hasNumber ? (
                    <CheckCircle2 className="size-3.5 text-emerald-600" />
                  ) : (
                    <Circle className="size-3.5 text-slate-300" />
                  )}
                  <span
                    className={
                      hasNumber ? 'font-medium text-slate-700' : 'text-slate-500'
                    }
                  >
                    Contains a number
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-slate-600">
                  {hasSpecialChar ? (
                    <CheckCircle2 className="size-3.5 text-emerald-600" />
                  ) : (
                    <Circle className="size-3.5 text-slate-300" />
                  )}
                  <span
                    className={
                      hasSpecialChar
                        ? 'font-medium text-slate-700'
                        : 'text-slate-500'
                    }
                  >
                    Contains a special character
                  </span>
                </div>
              </div>
            </div>

            {/* Terms Agreement */}
            <div className="pt-2">
              <label className="flex items-start gap-2.5 text-xs text-slate-600 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="mt-0.5 size-3.5 rounded border-slate-300 text-slate-900 focus:ring-slate-400"
                />
                <span>
                  I agree to the{' '}
                  <a
                    href="#terms"
                    className="font-semibold text-blue-700 hover:underline"
                  >
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a
                    href="#privacy"
                    className="font-semibold text-blue-700 hover:underline"
                  >
                    Privacy Policy
                  </a>
                  .
                </span>
              </label>
            </div>

            {/* Step 3 Bottom Actions */}
            <div className="flex items-center justify-between border-t border-slate-100 pt-5 mt-6">
              <button
                type="button"
                onClick={() => {
                  setError(null)
                  setCurrentStep(2)
                }}
                className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 transition"
              >
                <ArrowLeft className="size-3.5" />
                Back
              </button>

              <button
                type="submit"
                className="rounded-lg bg-[#2E1A29] px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-slate-800"
              >
                Complete Registration
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

export default SignUpPage
