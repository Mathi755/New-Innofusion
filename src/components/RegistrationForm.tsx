import { useForm } from 'react-hook-form';
import { Registration } from '../types';

export default function RegistrationForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Registration>();

  const onSubmit = (data: Registration) => {
    const registrations = JSON.parse(localStorage.getItem('registrations') || '[]');
    registrations.push(data);
    localStorage.setItem('registrations', JSON.stringify(registrations));
    alert('Registration successful!');
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md mx-auto">
      <div>
        <label htmlFor="teamName" className="block text-sm font-medium text-gray-700">Team Name</label>
        <input
          type="text"
          id="teamName"
          {...register('teamName', { required: 'Team name is required' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.teamName && <p className="text-red-500 text-sm">{errors.teamName.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Team Leader Email</label>
        <input
          type="email"
          id="email"
          {...register('email', { 
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Team Leader Phone Number</label>
        <input
          type="tel"
          id="phone"
          {...register('phone', { required: 'Phone number is required' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
      </div>

      <div>
        <label htmlFor="problemStatement" className="block text-sm font-medium text-gray-700">Problem Statement</label>
        <select
          id="problemStatement"
          {...register('problemStatement', { required: 'Problem statement is required' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="">Select Problem Statement</option>
          <option value="1">Early Warning System for Natural Disasters</option>
          <option value="2">AI-Enhanced CAPTCHA Security</option>
          <option value="3">AI Chatbots for Elderly Assistance</option>
          <option value="4">IoT for EV Health Monitoring</option>
          <option value="5">Smart Railway Management</option>
          <option value="6">Blockchain for Social Media Security</option>
          <option value="7">Ex-Convict Monitoring System</option>
          <option value="8">Voice-Controlled Learning Tools</option>
          <option value="9">Smart Automation</option>
          <option value="10">Smart Education</option>
          <option value="11">Smart Irrigation</option>
          <option value="12">Precision Agriculture</option>
          <option value="13">Smart Electricity</option>
          <option value="14">SDG Goals</option>
        </select>
        {errors.problemStatement && <p className="text-red-500 text-sm">{errors.problemStatement.message}</p>}
      </div>

      <div>
        <label htmlFor="teamSize" className="block text-sm font-medium text-gray-700">Team Size</label>
        <select
          id="teamSize"
          {...register('teamSize', { required: 'Team size is required' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="">Select Team Size</option>
          <option value="1">1 Member</option>
          <option value="2">2 Members</option>
          <option value="3">3 Members</option>
          <option value="4">4 Members</option>
        </select>
        {errors.teamSize && <p className="text-red-500 text-sm">{errors.teamSize.message}</p>}
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Register Now
      </button>
    </form>
  );
}