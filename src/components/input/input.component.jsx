const Input = ({ inputRefNumb, inputRefText, onSubmit }) => {
  return (
    <div>
      <label>
        item to add to list:
        <input type="text" name="name" ref={inputRefText} />
        <input type="number" name="number" ref={inputRefNumb} />
      </label>
      <input type="submit" value="Submit" onClick={onSubmit} />
    </div>
  );
};

export default Input;
