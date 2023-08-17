import { useState } from "react"

// TODO: fazer condição se o campo não estiver preenchido
// TODO: criar função de "possui prefixo" (abrir outro input para colocar qual é o input)
// TODO: ajustar para "Nome do arquivo formatado" só aparecer se houver algum item na lista
// TODO: criar botão de copy para área de transferência

function App() {
  const [fileName, setFileName] = useState('');
  const [formatedFileName, setFormatedFileName] = useState([]);

  const handleChangeNameFile = (e) => {
    e.preventDefault();


    const fileNameItem = fileName.replaceAll(" ", "-").replaceAll("_", "-").toLowerCase() + '-agosto-23'

    if (!fileName.length == 0) {
      setFormatedFileName([...formatedFileName, fileNameItem])
    } else {
      // TODO: fazer condição se o campo não estiver preenchido
    }

    setFileName('');
  }

  const handleDeleteNameFiles = (e) => {
    setFormatedFileName([])
  }

  return (
    <div className="container mt-5 m-auto grid gap-5">
      <div className="flex gap-3 items-center">
        <img src="/bayer-logo.svg" alt="Logo Bayer" width={50} />
        <h1 className="text-2xl font-semibold text-gray-900">
          Plugin de mudança de nome de arquivos
        </h1>
      </div>
      <hr />
      <form
        onSubmit={handleChangeNameFile}
        className="grid gap-2"
      >
        <label
          htmlFor="file-name"
          className="text-xl font-medium text-gray-900"
        >
          Nome do arquivo
        </label>
        <div className="flex gap-8">
          <input
            type="text"
            name="file-name"
            id="file-name"
            value={fileName}
            placeholder="Insira o nome do arquivo aqui"
            className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg block w-1/2 p-2.5 font-medium"
            onChange={(e) => setFileName(e.target.value)}
          />
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              name="have-sulfix"
              id="have-sulfix"
            />
            <label
              htmlFor="have-sulfix"
              className="text-sm font-medium text-gray-900"
            >
              Possui sulfixo?
            </label>
          </div>
        </div>
        <div className="flex gap-3 mt-2">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none w-20"
          >
            Ajustar
          </button>
          <button
            type="button"
            className="text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none w-20"
            onClick={handleDeleteNameFiles}
          >
            Limpar
          </button>
        </div>
      </form>
      {formatedFileName &&
        <div className="mt-10">
          <h3 className="text-xl font-medium text-gray-900 mb-4">
            Nome do arquivo formatado:
          </h3>
          {formatedFileName.map((item, index) => (
            <p key={index} className="text-lg font-normal text-gray-900 mb-2">
              {item}
            </p>
          ))}
        </div>
      }
    </div>
  )
}

export default App
