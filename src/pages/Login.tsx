import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/veriftToken";

const Login = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: "0001",
      password: "admin12345",
    },
  });
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();

  const onSubmit = async (data) => {
    const res = await login(data).unwrap();
    const user = verifyToken(res.data.accessToken);
    dispatch(setUser({ user, token: res.data.accessToken }));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">ID</label>
        <input type="text" {...register("id")} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="text" {...register("password")} />
      </div>
      <Button htmlType="submit">Submit</Button>
    </form>
  );
};

export default Login;
