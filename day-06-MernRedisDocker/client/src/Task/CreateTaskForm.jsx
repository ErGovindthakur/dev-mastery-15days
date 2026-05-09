const CreateTaskForm = (props) => {
  const { toggle } = props;

  return (
    <div
      className={`${toggle ? "w-2xs transform transition-all duration-1000" : "w-0 transform transition-all duration-75"} min-h-screen bg-zinc-800 shadow-md absolute right-0 top-0 flex justify-center pt-10`}
    >
      <p className="text-2xl font-bold">Create Tasks</p>
    </div>
  );
};

export default CreateTaskForm;
