"use client";

import { useState } from "react";
import Link from "next/link";

const courses = [
  { id: "qa-manual", title: "QA Manual Testing", duration: "8 weeks", level: "Beginner" },
  { id: "qa-automation", title: "QA Automation", duration: "12 weeks", level: "Intermediate" },
  { id: "fullstack-sdet", title: "Full-Stack SDET", duration: "16 weeks", level: "Advanced" },
  { id: "api-testing", title: "API Testing & Automation", duration: "6 weeks", level: "Intermediate" },
  { id: "devops-testers", title: "DevOps Pipeline for Testers", duration: "8 weeks", level: "Intermediate" },
  { id: "ai-qa", title: "AI for QA", duration: "6 weeks", level: "Advanced" },
  { id: "performance-tester", title: "Performance Tester", duration: "6 weeks", level: "Intermediate" },
  { id: "security-tester", title: "Security Tester", duration: "6 weeks", level: "Intermediate" },
  { id: "508-compliance-tester", title: "508 Compliance Tester", duration: "4 weeks", level: "Beginner" },
  { id: "digital-marketing", title: "Digital Marketing", duration: "10 weeks", level: "Beginner" },
];

const trainingFormats = [
  { id: "in-person", label: "In-Person", description: "Classroom-based training" },
  { id: "online", label: "Online", description: "Live virtual sessions" },
  { id: "corporate", label: "Corporate", description: "Customized for organizations" },
];

export default function Enroll() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    selectedCourse: "",
    trainingFormat: "",
    previousExperience: "",
    howDidYouHear: "",
    additionalInfo: "",
    agreeToTerms: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.selectedCourse) newErrors.selectedCourse = "Please select a course";
    if (!formData.trainingFormat) newErrors.trainingFormat = "Please select a training format";
    if (!formData.agreeToTerms) newErrors.agreeToTerms = "You must agree to the terms and conditions";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Use Google Apps Script web app URL for form submission
      const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || "";
      
      if (!scriptUrl) {
        throw new Error("Form submission endpoint not configured. Please set up Google Apps Script and add NEXT_PUBLIC_GOOGLE_SCRIPT_URL environment variable.");
      }

      console.log("Submitting enrollment form...");
      console.log("Form data:", formData);

      // Send data as individual form fields
      const formDataToSend = new URLSearchParams();
      
      // Add all form fields individually
      Object.keys(formData).forEach(key => {
        const value = formData[key as keyof typeof formData];
        if (value !== null && value !== undefined && value !== '') {
          formDataToSend.append(key, String(value));
        }
      });

      // Submit to Google Apps Script
      const response = await fetch(scriptUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formDataToSend.toString(),
        mode: "no-cors", // Required for Google Apps Script
        cache: "no-cache",
      });

      // With no-cors mode, we can't read the response, but if fetch completes without error, assume success
      console.log("Form submission sent successfully");
      
      // Success
      setSubmitted(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          state: "",
          zipCode: "",
          country: "",
          selectedCourse: "",
          trainingFormat: "",
          previousExperience: "",
          howDidYouHear: "",
          additionalInfo: "",
          agreeToTerms: false,
        });
      }, 5000);
    } catch (error: any) {
      console.error("Error submitting enrollment:", error);
      console.error("Script URL:", process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL ? "Set" : "Not set");
      
      // Provide more specific error messages
      let errorMessage = "Failed to submit enrollment. Please try again.";
      
      if (error.message && error.message.includes("fetch")) {
        errorMessage = "Network error. Please check your internet connection and try again. If the problem persists, the form endpoint may need to be reconfigured.";
      } else if (error.name === "TypeError" && error.message.includes("Failed to fetch")) {
        errorMessage = "Unable to connect to the submission server. Please check your internet connection. If the problem persists, verify that the Google Apps Script is deployed correctly with 'Anyone' access.";
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      setErrors({
        submit: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Student Enrollment</h1>
            <p className="text-xl text-blue-100">
              Start your journey to becoming a skilled professional
            </p>
          </div>
        </div>
      </section>

      {/* Enrollment Form */}
      <section className="py-16 -mt-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Submitted Successfully!</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Thank you for your interest. Our team will contact you within 24-48 hours to discuss next steps.
                  </p>
                  <Link
                    href="/courses"
                    className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                  >
                    Browse Courses
                  </Link>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Application Form</h2>
                    <p className="text-gray-600">Please fill out all required fields to complete your enrollment</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Personal Information */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                        Personal Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                            First Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                              errors.firstName ? "border-red-500" : "border-gray-300"
                            }`}
                            placeholder="John"
                          />
                          {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>}
                        </div>

                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                            Last Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                              errors.lastName ? "border-red-500" : "border-gray-300"
                            }`}
                            placeholder="Doe"
                          />
                          {errors.lastName && <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>}
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                              errors.email ? "border-red-500" : "border-gray-300"
                            }`}
                            placeholder="john.doe@example.com"
                          />
                          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                        </div>

                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                              errors.phone ? "border-red-500" : "border-gray-300"
                            }`}
                            placeholder="+1 (917) 561-6554"
                          />
                          {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                        </div>

                        <div className="md:col-span-2">
                          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                            Street Address
                          </label>
                          <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            placeholder="123 Main Street"
                          />
                        </div>

                        <div>
                          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                            City
                          </label>
                          <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            placeholder="New York"
                          />
                        </div>

                        <div>
                          <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                            State/Province
                          </label>
                          <input
                            type="text"
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            placeholder="NY"
                          />
                        </div>

                        <div>
                          <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-2">
                            ZIP/Postal Code
                          </label>
                          <input
                            type="text"
                            id="zipCode"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            placeholder="10001"
                          />
                        </div>

                        <div>
                          <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                            Country
                          </label>
                          <input
                            type="text"
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            placeholder="United States"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Course Selection */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                        Course Selection
                      </h3>
                      <div>
                        <label htmlFor="selectedCourse" className="block text-sm font-medium text-gray-700 mb-2">
                          Select Course <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="selectedCourse"
                          name="selectedCourse"
                          value={formData.selectedCourse}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white ${
                            errors.selectedCourse ? "border-red-500" : "border-gray-300"
                          }`}
                        >
                          <option value="">Choose a course...</option>
                          {courses.map((course) => (
                            <option key={course.id} value={course.id}>
                              {course.title} - {course.duration} ({course.level})
                            </option>
                          ))}
                        </select>
                        {errors.selectedCourse && <p className="mt-1 text-sm text-red-500">{errors.selectedCourse}</p>}
                      </div>
                    </div>

                    {/* Training Format */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                        Training Format
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {trainingFormats.map((format) => (
                          <label
                            key={format.id}
                            className={`relative flex flex-col p-4 border-2 rounded-lg cursor-pointer transition-all ${
                              formData.trainingFormat === format.id
                                ? "border-blue-600 bg-blue-50"
                                : "border-gray-200 hover:border-gray-300"
                            } ${errors.trainingFormat ? "border-red-500" : ""}`}
                          >
                            <input
                              type="radio"
                              name="trainingFormat"
                              value={format.id}
                              checked={formData.trainingFormat === format.id}
                              onChange={handleChange}
                              className="sr-only"
                            />
                            <div className="flex items-center mb-2">
                              <div
                                className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                                  formData.trainingFormat === format.id
                                    ? "border-blue-600"
                                    : "border-gray-300"
                                }`}
                              >
                                {formData.trainingFormat === format.id && (
                                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                                )}
                              </div>
                              <span className="font-semibold text-gray-900">{format.label}</span>
                            </div>
                            <p className="text-sm text-gray-600 ml-8">{format.description}</p>
                          </label>
                        ))}
                      </div>
                      {errors.trainingFormat && <p className="mt-2 text-sm text-red-500">{errors.trainingFormat}</p>}
                      <p className="text-sm text-gray-500 mt-2">
                        <span className="text-red-500">*</span> Required
                      </p>
                    </div>

                    {/* Additional Information */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                        Additional Information
                      </h3>
                      <div className="space-y-6">
                        <div>
                          <label htmlFor="previousExperience" className="block text-sm font-medium text-gray-700 mb-2">
                            Previous Experience/Background
                          </label>
                          <textarea
                            id="previousExperience"
                            name="previousExperience"
                            rows={4}
                            value={formData.previousExperience}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            placeholder="Tell us about your background, experience, or why you're interested in this course..."
                          />
                        </div>

                        <div>
                          <label htmlFor="howDidYouHear" className="block text-sm font-medium text-gray-700 mb-2">
                            How did you hear about us?
                          </label>
                          <select
                            id="howDidYouHear"
                            name="howDidYouHear"
                            value={formData.howDidYouHear}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
                          >
                            <option value="">Select an option...</option>
                            <option value="google">Google Search</option>
                            <option value="social-media">Social Media</option>
                            <option value="friend">Friend/Colleague</option>
                            <option value="linkedin">LinkedIn</option>
                            <option value="other">Other</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">
                            Additional Comments or Questions
                          </label>
                          <textarea
                            id="additionalInfo"
                            name="additionalInfo"
                            rows={4}
                            value={formData.additionalInfo}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            placeholder="Any additional information you'd like to share..."
                          />
                        </div>
                      </div>
                    </div>

                    {/* Terms and Conditions */}
                    <div>
                      <label className="flex items-start cursor-pointer">
                        <input
                          type="checkbox"
                          name="agreeToTerms"
                          checked={formData.agreeToTerms}
                          onChange={handleChange}
                          className="mt-1 mr-3 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">
                          I agree to the{" "}
                          <Link href="/terms-of-use" className="text-blue-600 hover:underline">
                            Terms of Use
                          </Link>{" "}
                          and{" "}
                          <Link href="/privacy-policy" className="text-blue-600 hover:underline">
                            Privacy Policy
                          </Link>
                          <span className="text-red-500"> *</span>
                        </span>
                      </label>
                      {errors.agreeToTerms && <p className="mt-2 text-sm text-red-500">{errors.agreeToTerms}</p>}
                    </div>

                    {/* Error Message */}
                    {errors.submit && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
                        <p className="font-semibold">Error</p>
                        <p>{errors.submit}</p>
                      </div>
                    )}

                    {/* Submit Button */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-6">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Submitting...
                          </>
                        ) : (
                          "Submit Application"
                        )}
                      </button>
                      <Link
                        href="/courses"
                        className="flex-1 sm:flex-initial bg-gray-200 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-300 transition text-center"
                      >
                        Cancel
                      </Link>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

