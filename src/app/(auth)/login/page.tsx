"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Next.js App Router
import Card from "@/components/Template/Card";
import Input from "@/components/Template/Input";
import Button from "@/components/Template/Button";


// Mock Database
interface User {
  code: string;
  password: string;
  name: string;
}

const mockDatabase: Record<string, User> = {
  user1: {
    code: "123456",
    password: "pass1234",
    name: "John Doe",
  },
  user2: {
    code: "654321",
    password: "secret99",
    name: "Jane Smith",
  },
};

export default function LoginPage() {
  const [code, setCode] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<{ code?: string; password?: string }>({});
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { code?: string; password?: string } = {};

    if (!code.trim()) newErrors.code = "Access code is required";
    if (!password.trim()) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Cari pengguna berdasarkan kode akses
    const foundUser = Object.values(mockDatabase).find(user => user.code === code);

    if (!foundUser) {
      newErrors.code = "Invalid access code";
      setErrors(newErrors);
      return;
    }

    if (foundUser.password !== password) {
      newErrors.password = "Incorrect password";
      setErrors(newErrors);
      return;
    }

    // Simpan data ke localStorage atau sessionStorage
    localStorage.setItem("user", JSON.stringify(foundUser));

    // Redirect ke dashboard
    router.push("/admin");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <Card title="Login with Access Code">
        <form onSubmit={handleSubmit}>
          <Input
            label="Access Code"
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            error={errors.code}
            placeholder="e.g. 123456"
          />

          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
            placeholder="••••••••"
          />

          <Button type="submit">Login</Button>
        </form>
      </Card>
    </div>
  );
}