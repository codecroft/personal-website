import PageTitle from '@/components/shared/PageTitle';
import AppLayout from '@/layouts/AppLayout';
import React, { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/form/Button';
import Input from '@/components/form/Input';
import TextArea from '@/components/form/Textarea';

type Props = {};

const Contact = (props: Props) => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async () => {
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <AppLayout title="contact">
      <PageTitle
        breadcrumb={[
          { label: 'Home', path: '/' },
          { label: 'Contact', path: '' },
        ]}
      >
        Contact
      </PageTitle>
      <div className="container py-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="relative mb-10 h-48">
            <Image src="/images/map.svg" layout="fill" className="dark:invert" alt="map" />
            <h6 className="text-2xl font-bold">Contact with me</h6>
            <p className="mt-2">I would love to hear from you. 👋</p>
            <div className="mt-10 text-gray-400">
              <p>Vancouver, Canada</p>
              <p className="mt-4">nima.r.m@gmail.com</p>
            </div>
          </div>
          <div className="col-span-2">
            <div className="grid gap-8 md:grid-cols-2">
              <Input placeholder="Your Name" value={form.name} onChange={handleChange('name')} />
              <Input placeholder="Email Address" type="email" value={form.email} onChange={handleChange('email')} />
            </div>
            <div className="mt-8">
              <Input placeholder="Subject" value={form.subject} onChange={handleChange('subject')} />
            </div>
            <div className="mt-8">
              <TextArea placeholder="Message" value={form.message} onChange={handleChange('message')} />
            </div>
            {status === 'success' && (
              <p className="mt-4 text-green-500">Message sent! I'll get back to you soon.</p>
            )}
            {status === 'error' && (
              <p className="mt-4 text-red-500">Something went wrong. Please try again.</p>
            )}
            <div className="mt-8">
              <Button
                className="mt-5 bg-primary-500 px-8 font-semibold text-white hover:bg-primary-600 focus:ring-2 focus:ring-primary-200"
                onClick={handleSubmit}
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Contact;
