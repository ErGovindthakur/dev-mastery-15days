import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import { useState } from "react";
import { registerUser } from "@/api/endpoint";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await registerUser(form);

      console.log(res.data);

      toast.success("Registered Successfully...");

      navigate("/login");

      setForm({ name: "", email: "", password: "" });
    } catch (error) {
      console.error("Registration Error:", error.response?.data.message);
      toast.error(error.response?.data.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Card className="w-full sm:max-w-md bg-zinc-900 text-white border border-gray-500 shadow-md ">
        <CardHeader>
          <CardTitle>Register Now</CardTitle>
          <CardDescription>Welcome to your Daily Do...</CardDescription>
        </CardHeader>
        <CardContent>
          <form id="form-rhf-demo" onSubmit={handleSubmit}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="form-rhf-demo-title">Name*</FieldLabel>
                <Input
                  id="form-rhf-demo-title"
                  type="text"
                  name="name"
                  value={form.name}
                  placeholder="Enter your name*"
                  onChange={handleChange}
                  autoComplete="off"
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="form-rhf-demo-title">Email</FieldLabel>
                <Input
                  id="form-rhf-demo-title"
                  type="email"
                  name="email"
                  value={form.email}
                  placeholder="Enter your email*"
                  onChange={handleChange}
                  autoComplete="off"
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="form-rhf-demo-title">Password</FieldLabel>
                <Input
                  id="form-rhf-demo-title"
                  type="password"
                  name="password"
                  value={form.password}
                  placeholder="Enter your password*"
                  onChange={handleChange}
                  autoComplete="off"
                />
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
        <CardFooter className="text-white bg-zinc-900">
          <Field orientation="horizontal">
            <Button
              type="button"
              variant="destructive"
              onClick={() =>
                toast("Event has been created", { position: "top-left" })
              }
            >
              Reset
            </Button>
            <Button type="submit" form="form-rhf-demo" variant="secondary">
              {loading ? "Registering" : "Submit"}
            </Button>
          </Field>
        </CardFooter>
      </Card>
    </div>
  );
};
