"use client";
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { CheckCircle, Send, Clock, MapPin, Mail, Phone, Building, ChevronDown } from 'lucide-react';
interface TemplateParams {
  businessName: string;
  businessType: string;
  location: string;
  foodType: string;
  operationStart: string;
  operationEnd: string;
  name: string;
  email: string;
  phone: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    location: '',
    businessType: '',
    foodType: 'both',
    operationStart: '',
    operationEnd: '',
    email: '',
    phone: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: '',
    loading: false
  });

  const [activeField, setActiveField] = useState('');
  const [formStep, setFormStep] = useState(1);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

 const sendEmail = async (templateParams: TemplateParams) => {
    try {
      // Using Gmail SMTP through a backend API route or service
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'support@lastbiteindia.com', // Your receiving email
          subject: `New Partner Application from ${templateParams.businessName}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background: linear-gradient(135deg, #0f766e, #14b8a6); padding: 30px; text-align: center; color: white;">
                <h1 style="margin: 0; font-size: 24px;">New Partner Application</h1>
                <p style="margin: 10px 0 0 0; opacity: 0.9;">Someone wants to join your network!</p>
              </div>
              
              <div style="padding: 30px; background: #f8fafc; border-left: 4px solid #14b8a6;">
                <h2 style="color: #0f766e; margin-top: 0;">Business Information</h2>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 150px;">Business Name:</td>
                    <td style="padding: 8px 0; color: #6b7280;">${templateParams.businessName}</td>
                  </tr>
                  <tr style="background: white;">
                    <td style="padding: 8px 0; font-weight: bold; color: #374151;">Business Type:</td>
                    <td style="padding: 8px 0; color: #6b7280;">${templateParams.businessType}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #374151;">Location:</td>
                    <td style="padding: 8px 0; color: #6b7280;">${templateParams.location}</td>
                  </tr>
                  <tr style="background: white;">
                    <td style="padding: 8px 0; font-weight: bold; color: #374151;">Food Type:</td>
                    <td style="padding: 8px 0; color: #6b7280;">${templateParams.foodType}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #374151;">Operating Hours:</td>
                    <td style="padding: 8px 0; color: #6b7280;">${templateParams.operationStart} - ${templateParams.operationEnd}</td>
                  </tr>
                </table>
              </div>

              <div style="padding: 30px; background: white;">
                <h2 style="color: #0f766e; margin-top: 0;">Contact Information</h2>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 150px;">Contact Person:</td>
                    <td style="padding: 8px 0; color: #6b7280;">${templateParams.name}</td>
                  </tr>
                  <tr style="background: #f8fafc;">
                    <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
                    <td style="padding: 8px 0; color: #6b7280;">
                      <a href="mailto:${templateParams.email}" style="color: #14b8a6; text-decoration: none;">${templateParams.email}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #374151;">Phone:</td>
                    <td style="padding: 8px 0; color: #6b7280;">
                      <a href="tel:${templateParams.phone}" style="color: #14b8a6; text-decoration: none;">${templateParams.phone}</a>
                    </td>
                  </tr>
                </table>
              </div>

              <div style="padding: 20px; background: #0f766e; text-align: center;">
                <p style="color: white; margin: 0; font-size: 14px;">
                  Submitted on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}
                </p>
              </div>
            </div>
          `,
          // Also send confirmation email to the applicant
          confirmationEmail: {
            to: templateParams.email,
            subject: 'Application Received - Partner Network',
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <div style="background: linear-gradient(135deg, #0f766e, #14b8a6); padding: 30px; text-align: center; color: white;">
                  <h1 style="margin: 0; font-size: 24px;">Application Received!</h1>
                  <p style="margin: 10px 0 0 0; opacity: 0.9;">Thank you for your interest in joining our network</p>
                </div>
                
                <div style="padding: 30px; background: white;">
                  <p style="color: #374151; font-size: 16px; line-height: 1.6;">
                    Dear ${templateParams.name},
                  </p>
                  <p style="color: #374151; font-size: 16px; line-height: 1.6;">
                    Thank you for submitting your partner application for <strong>${templateParams.businessName}</strong>. 
                    We have received your information and will review it shortly.
                  </p>
                  
                  <div style="background: #f0fdfa; border: 1px solid #14b8a6; border-radius: 8px; padding: 20px; margin: 20px 0;">
                    <h3 style="color: #0f766e; margin: 0 0 10px 0;">What happens next?</h3>
                    <ul style="color: #374151; margin: 0; padding-left: 20px;">
                      <li>Our team will review your application within 24-48 hours</li>
                      <li>We'll contact you at ${templateParams.phone} or ${templateParams.email}</li>
                      <li>If approved, we'll schedule an onboarding call</li>
                    </ul>
                  </div>
                  
                  <p style="color: #374151; font-size: 16px; line-height: 1.6;">
                    If you have any questions in the meantime, feel free to reach out to us at 
                    <a href="mailto:support@lastbiteindia.com" style="color: #14b8a6;">support@lastbiteindia.com</a>.
                  </p>
                  
                  <p style="color: #374151; font-size: 16px; line-height: 1.6;">
                    Best regards,<br>
                    <strong>The Partnership Team</strong>
                  </p>
                </div>
                
                <div style="padding: 20px; background: #f8fafc; text-align: center; border-top: 1px solid #e5e7eb;">
                  <p style="color: #6b7280; margin: 0; font-size: 14px;">
                    This is an automated confirmation email.
                  </p>
                </div>
              </div>
            `
          }
        }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to send email');
      }

      return { success: true };
    } catch (error) {
      console.error('Email sending failed:', error);
      throw error;
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setFormStatus({
      submitted: false,
      error: false,
      message: '',
      loading: true
    });

    try {
      const templateParams = {
        name: formData.name,
        businessName: formData.businessName,
        location: formData.location,
        businessType: formData.businessType,
        foodType: formData.foodType.charAt(0).toUpperCase() + formData.foodType.slice(1),
        operationStart: formData.operationStart,
        operationEnd: formData.operationEnd,
        email: formData.email,
        phone: formData.phone,
      };

      await sendEmail(templateParams);

      setFormStatus({
        submitted: true,
        error: false,
        message: 'Thank you! Your application has been submitted successfully. We will contact you soon.',
        loading: false
      });

      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          businessName: '',
          location: '',
          businessType: '',
          foodType: 'both',
          operationStart: '',
          operationEnd: '',
          email: '',
          phone: ''
        });
        setFormStatus({
          submitted: false,
          error: false,
          message: '',
          loading: false
        });
        setFormStep(1);
      }, 5000);

    }catch (error) {
  console.error('Application submission failed:', error); // Now it's used
  setFormStatus({
    submitted: false,
    error: true,
    message: 'Sorry, there was an error sending your application. Please try again or contact us directly.',
    loading: false
  });
}

  };

  const goToNextStep = () => {
    setFormStep(2);
  };

  const goToPreviousStep = () => {
    setFormStep(1);
  };

  const businessTypes = [
    'Restaurant',
    'Quick Service Restaurant',
    'Café',
    'Coffee Shop',
    'Bakery',
    'Deli',
    'Grocery Store',
    'Supermarket',
    'Food Producer',
    'Wholesaler',
    'Other'
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-emerald-50 to-teal-100 min-h-screen flex items-center partner" id='partner'>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-teal-100 text-teal-800 text-sm font-semibold px-4 py-1 rounded-full mb-3">
              Partner With Us
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-teal-800 leading-tight">
              Join Our Network <span className="text-amber-500">Today</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Ready to reduce Unconsumed Food and increase your bottom line? Our network connects businesses like yours with sustainable solutions.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            {formStatus.submitted ? (
              <div className="p-12 text-center">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
                  <CheckCircle size={32} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Application Received!</h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">{formStatus.message}</p>
                <div className="inline-flex items-center space-x-2 text-sm text-teal-600">
                  <Clock size={16} />
                  <span>We typically respond within 24-48 hours</span>
                </div>
                <div className="mt-4 text-sm text-gray-500">
                  <p>A confirmation email has been sent to your email address.</p>
                </div>
              </div>
            ) : formStatus.error ? (
              <div className="p-12 text-center">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Submission Failed</h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">{formStatus.message}</p>
                <button
                  onClick={() => setFormStatus({ submitted: false, error: false, message: '', loading: false })}
                  className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
                >
                  Try Again
                </button>
              </div>
            ) : (
              <div className="flex flex-col md:flex-row min-h-[600px]">
                {/* Left sidebar */}
                <div className="w-full md:w-1/3 bg-teal-800 text-white p-8 md:p-10 flex flex-col">
                  <div className="mb-12">
                    <h3 className="font-bold text-xl mb-6">Join Our Partners</h3>
                    <p className="text-teal-100 mb-4">
                      Complete this quick form to start your journey to:
                    </p>
                    
                    <div className="space-y-4 mt-8">
                      <div className="flex items-start">
                        <div className="flex items-center justify-center rounded-full bg-teal-700 p-2 mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium text-amber-300">Recover Food Costs</h4>
                          <p className="text-sm text-teal-100">Convert potential waste into revenue</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex items-center justify-center rounded-full bg-teal-700 p-2 mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium text-amber-300">Expand Your Reach</h4>
                          <p className="text-sm text-teal-100">Connect with new customers through our platform</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex items-center justify-center rounded-full bg-teal-700 p-2 mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium text-amber-300">Make An Impact</h4>
                          <p className="text-sm text-teal-100">Join our mission for a more sustainable food system</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="pt-6 border-t border-teal-700">
                      <div className="flex items-center mb-4">
                        <span className="inline-block bg-amber-500 text-teal-800 text-xs font-bold px-2 py-1 rounded mr-2">NEW</span>
                        <p className="text-sm text-amber-300">Partner onboarding in as little as 48 hours</p>
                      </div>
                      <p className="text-teal-100 text-sm">
                        Have questions? Contact us at <a href="mailto:partners@example.com" className="text-white underline">partners@example.com</a>
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Form side */}
                <div className="w-full md:w-2/3 p-6 md:p-10">
                  <div className="mb-8">
                    <div className="flex justify-between items-center">
                      <h3 className="text-2xl font-bold text-gray-800">
                        {formStep === 1 ? "Business Information" : "Contact Details"}
                      </h3>
                      <div className="flex items-center space-x-1">
                        <div className={`w-3 h-3 rounded-full ${formStep >= 1 ? 'bg-teal-600' : 'bg-gray-300'}`}></div>
                        <div className={`w-8 h-1 ${formStep >= 1 ? 'bg-teal-600' : 'bg-gray-300'}`}></div>
                        <div className={`w-3 h-3 rounded-full ${formStep >= 2 ? 'bg-teal-600' : 'bg-gray-300'}`}></div>
                      </div>
                    </div>
                    <p className="text-gray-500 mt-2">
                      {formStep === 1 
                        ? "Tell us about your business so we can understand how to best serve you."
                        : "How can we reach you to discuss the partnership opportunities?"}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {formStep === 1 ? (
                      <>
                        {/* Business Name */}
                        <div className="space-y-1">
                          <label 
                            htmlFor="businessName" 
                            className="block text-sm font-medium text-gray-700"
                          >
                            Business Name*
                          </label>
                          <div className={`relative rounded-lg overflow-hidden ${
                            activeField === 'businessName' ? 'ring-2 ring-teal-500' : 'ring-1 ring-gray-200'
                          }`}>
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                              <Building size={16} className="text-gray-400" />
                            </div>
                            <input
                              type="text"
                              name="businessName"
                              id="businessName"
                              required
                              className="block w-full pl-10 py-3.5 bg-gray-50 focus:bg-white border-0 focus:outline-none text-gray-900"
                              value={formData.businessName}
                              onChange={handleInputChange}
                              onFocus={() => setActiveField('businessName')}
                              onBlur={() => setActiveField('')}
                              placeholder="Green Bites Restaurant"
                            />
                          </div>
                        </div>

                        {/* Business Type */}
                        <div className="space-y-1">
                          <label 
                            htmlFor="businessType" 
                            className="block text-sm font-medium text-gray-700"
                          >
                            Business Type*
                          </label>
                          <div className={`relative rounded-lg overflow-hidden ${
                            activeField === 'businessType' ? 'ring-2 ring-teal-500' : 'ring-1 ring-gray-200'
                          }`}>
                            <select
                              name="businessType"
                              id="businessType"
                              required
                              className="block w-full px-4 py-3.5 bg-gray-50 focus:bg-white border-0 focus:outline-none text-gray-900 appearance-none"
                              value={formData.businessType}
                              onChange={handleInputChange}
                              onFocus={() => setActiveField('businessType')}
                              onBlur={() => setActiveField('')}
                            >
                              <option value="" disabled>Select business type</option>
                              {businessTypes.map((type) => (
                                <option key={type} value={type}>{type}</option>
                              ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                              <ChevronDown size={18} />
                            </div>
                          </div>
                        </div>

                        {/* Location */}
                        <div className="space-y-1">
                          <label 
                            htmlFor="location" 
                            className="block text-sm font-medium text-gray-700"
                          >
                            Business Location*
                          </label>
                          <div className={`relative rounded-lg overflow-hidden ${
                            activeField === 'location' ? 'ring-2 ring-teal-500' : 'ring-1 ring-gray-200'
                          }`}>
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                              <MapPin size={16} className="text-gray-400" />
                            </div>
                            <input
                              type="text"
                              name="location"
                              id="location"
                              required
                              className="block w-full pl-10 py-3.5 bg-gray-50 focus:bg-white border-0 focus:outline-none text-gray-900"
                              value={formData.location}
                              onChange={handleInputChange}
                              onFocus={() => setActiveField('location')}
                              onBlur={() => setActiveField('')}
                              placeholder="123 Main St, City"
                            />
                          </div>
                        </div>

                        {/* Food Type */}
                        <div className="space-y-1">
                          <span className="block text-sm font-medium text-gray-700 mb-2">Food Type*</span>
                          <div className="grid grid-cols-3 gap-3">
                            <label className={`border rounded-lg p-3 flex items-center justify-center transition cursor-pointer ${
                              formData.foodType === 'veg' 
                                ? 'bg-teal-50 border-teal-500 text-teal-700' 
                                : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                            }`}>
                              <input
                                type="radio"
                                name="foodType"
                                value="veg"
                                checked={formData.foodType === 'veg'}
                                onChange={handleInputChange}
                                className="sr-only"
                              />
                              <div className="text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                                <span className="text-sm font-medium">Vegetarian</span>
                              </div>
                            </label>
                            
                            <label className={`border rounded-lg p-3 flex items-center justify-center transition cursor-pointer ${
                              formData.foodType === 'nonveg' 
                                ? 'bg-teal-50 border-teal-500 text-teal-700' 
                                : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                            }`}>
                              <input
                                type="radio"
                                name="foodType"
                                value="nonveg"
                                checked={formData.foodType === 'nonveg'}
                                onChange={handleInputChange}
                                className="sr-only"
                              />
                              <div className="text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                                <span className="text-sm font-medium">Non-Vegetarian</span>
                              </div>
                            </label>
                            
                            <label className={`border rounded-lg p-3 flex items-center justify-center transition cursor-pointer ${
                              formData.foodType === 'both' 
                                ? 'bg-teal-50 border-teal-500 text-teal-700' 
                                : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                            }`}>
                              <input
                                type="radio"
                                name="foodType"
                                value="both"
                                checked={formData.foodType === 'both'}
                                onChange={handleInputChange}
                                className="sr-only"
                              />
                              <div className="text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                <span className="text-sm font-medium">Both</span>
                              </div>
                            </label>
                          </div>
                        </div>

                        {/* Operation Hours */}
                        <div className="space-y-1">
                          <label className="block text-sm font-medium text-gray-700">
                            Operating Hours*
                          </label>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <div className={`relative rounded-lg overflow-hidden ${
                                activeField === 'operationStart' ? 'ring-2 ring-teal-500' : 'ring-1 ring-gray-200'
                              }`}>
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                  <Clock size={16} className="text-gray-400" />
                                </div>
                                <input
                                  type="time"
                                  name="operationStart"
                                  id="operationStart"
                                  required
                                  className="block w-full pl-10 py-3.5 bg-gray-50 focus:bg-white border-0 focus:outline-none text-gray-900"
                                  value={formData.operationStart}
                                  onChange={handleInputChange}
                                  onFocus={() => setActiveField('operationStart')}
                                  onBlur={() => setActiveField('')}
                                />
                                <div className="absolute inset-y-0 right-0 pr-7 flex items-center pointer-events-none">
                                  <span className="text-sm text-gray-500">From</span>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className={`relative rounded-lg overflow-hidden ${
                                activeField === 'operationEnd' ? 'ring-2 ring-teal-500' : 'ring-1 ring-gray-200'
                              }`}>
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                  <Clock size={16} className="text-gray-400" />
                                </div>
                                <input
                                  type="time"
                                  name="operationEnd"
                                  id="operationEnd"
                                  required
                                  className="block w-full pl-10 py-3.5 bg-gray-50 focus:bg-white border-0 focus:outline-none text-gray-900"
                                  value={formData.operationEnd}
                                  onChange={handleInputChange}
                                  onFocus={() => setActiveField('operationEnd')}
                                  onBlur={() => setActiveField('')}
                                />
                                <div className="absolute inset-y-0 right-0 pr-6 flex items-center pointer-events-none">
                                  <span className="text-sm text-gray-500">To</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="pt-6">
                          <button
                            type="button"
                            onClick={goToNextStep}
                            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3.5 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
                          >
                            <span>Continue to Contact Details</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Contact Person Name */}
                        <div className="space-y-1">
                          <label 
                            htmlFor="name" 
                            className="block text-sm font-medium text-gray-700"
                          >
                            Contact Person Name*
                          </label>
                          <div className={`relative rounded-lg overflow-hidden ${
                            activeField === 'name' ? 'ring-2 ring-teal-500' : 'ring-1 ring-gray-200'
                          }`}>
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                            </div>
                            <input
                              type="text"
                              name="name"
                              id="name"
                              required
                              className="block w-full pl-10 py-3.5 bg-gray-50 focus:bg-white border-0 focus:outline-none text-gray-900"
                              value={formData.name}
                              onChange={handleInputChange}
                              onFocus={() => setActiveField('name')}
                              onBlur={() => setActiveField('')}
                              placeholder="John Smith"
                            />
                          </div>
                        </div>

                        {/* Email */}
                        <div className="space-y-1">
                          <label 
                            htmlFor="email" 
                            className="block text-sm font-medium text-gray-700"
                          >
                            Email Address*
                          </label>
                          <div className={`relative rounded-lg overflow-hidden ${
                            activeField === 'email' ? 'ring-2 ring-teal-500' : 'ring-1 ring-gray-200'
                          }`}>
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                              <Mail size={16} className="text-gray-400" />
                            </div>
                            <input
                              type="email"
                              name="email"
                              id="email"
                              required
                              className="block w-full pl-10 py-3.5 bg-gray-50 focus:bg-white border-0 focus:outline-none text-gray-900"
                              value={formData.email}
                              onChange={handleInputChange}
                              onFocus={() => setActiveField('email')}
                              onBlur={() => setActiveField('')}
                              placeholder="contact@yourbusiness.com"
                            />
                          </div>
                        </div>

                        {/* Phone */}
                        <div className="space-y-1">
                          <label 
                            htmlFor="phone" 
                            className="block text-sm font-medium text-gray-700"
                          >
                            Contact Number*
                          </label>
                          <div className={`relative rounded-lg overflow-hidden ${
                            activeField === 'phone' ? 'ring-2 ring-teal-500' : 'ring-1 ring-gray-200'
                          }`}>
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                              <Phone size={16} className="text-gray-400" />
                            </div>
                            <input
                              type="tel"
                              name="phone"
                              id="phone"
                              required
                              className="block w-full pl-10 py-3.5 bg-gray-50 focus:bg-white border-0 focus:outline-none text-gray-900"
                              value={formData.phone}
                              onChange={handleInputChange}
                              onFocus={() => setActiveField('phone')}
                              onBlur={() => setActiveField('')}
                              placeholder="(555) 123-4567"
                            />
                          </div>
                          <p className="text-xs text-gray-500 mt-2">{"We'll only use this for updates regarding your application"}</p>
                        </div>

                        <div className="pt-8 flex flex-col sm:flex-row gap-3">
                          <button
                            type="button"
                            onClick={goToPreviousStep}
                            className="flex-1 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-3.5 px-6 rounded-lg transition-colors duration-300"
                            disabled={formStatus.loading}
                          >
                            Back to Business Details
                          </button>
                          <button
                            type="submit"
                            disabled={formStatus.loading}
                            className="flex-1 bg-teal-600 hover:bg-teal-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-3.5 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
                          >
                            {formStatus.loading ? (
                              <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                <span>Sending...</span>
                              </>
                            ) : (
                              <>
                                <Send size={18} className="mr-2" />
                                <span>Submit Application</span>
                              </>
                            )}
                          </button>
                        </div>
                      </>
                    )}
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}