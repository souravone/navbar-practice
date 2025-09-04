function Login() {
  return (
    <div className="max-w-2xl mx-auto  mt-16 rounded-md shadow">
      <form
        action="submit"
        className="bg-blue-100 border-2 border-blue-600 p-6 flex flex-col gap-2"
      >
        <div>
          <label htmlFor="" className="font-semibold">
            Email
          </label>
          <input
            type="email"
            className="w-full border-1 border-black rounded-md mt-1 p-1"
          />
        </div>

        <div>
          <label htmlFor="" className="font-semibold">
            Password
          </label>
          <input
            type="password"
            className="w-full border-1 border-black rounded-md mt-1 p-1"
          />
        </div>
        <button className="border-2 border-blue-600 bg-blue-300 rounded-lg font-bold px-4 py-2 mt-4 mr-auto">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
