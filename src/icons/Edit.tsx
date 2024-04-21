interface Props {
  width: number;
  height: number;
}

function Edit({ width, height }: Props) {
  return (
    <svg color="#fff" width={width} height={height} viewBox="0 0 24 24" role="presentation">
      <path
        d="M4.02 19.23a1 1 0 001.18 1.18l3.81-.78-4.21-4.21-.78 3.81zM19.844 6.707l-2.12-2.122A1.997 1.997 0 0016.308 4c-.512 0-1.024.195-1.415.585l-9.757 9.758 4.95 4.95 9.757-9.758a2 2 0 000-2.828z"
        fill="currentColor"
        fillRule="evenodd"
      ></path>
    </svg>
  );
}

export default Edit;
