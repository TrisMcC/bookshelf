export default function Button(props) {
  return (
    <button
      className="px-2 border border-trueGray-500 bg-blue-100 hover:bg-blue-200 transition-colors shadow rounded"
      type="button"
      {...props}
    />
  );
}
