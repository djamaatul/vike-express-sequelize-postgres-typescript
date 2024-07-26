import React from 'react';
import RegisterForm from "./components/RegisterForm";

export default function Login() {
  return (
    <main className="p-4 space-y-4">
      <h1 className="text-4xl font-bold hover:text-primary">DAFTAR</h1>
      <RegisterForm />
      <p>Sudah punya akun ? masuk <a href='/login' className="text-primary">disini</a>.</p>
    </main>
  );
}
