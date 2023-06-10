export function InputCustomFile() {
  return (
    <>
      <div>
        <label
          htmlFor="dropzone-file"
          className="
        h-48 absolute
        mx-auto cursor-pointer flex w-full max-w-[600px]
        flex-col items-center rounded-xl 
        border-2 border-dashed border-orange-400 p-6 text-center"
        />
        <div className="w-full h-48 flex flex-col justify-center items-center">
          <svg
            className="h-10 w-10 fill-orange-500"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <h2 className="mt-4 text-lg font-medium text-gray-700 tracking-wide">
            Escolha o arquivo
          </h2>
          <p className="mt-2 text-gray-500 tracking-wide">
            Escolha ou arraste e solte arquivos, PNG OU JPG.
          </p>
        </div>
        <input className="hidden" id="dropzone-file" type="file" />
      </div>
    </>
  );
}
