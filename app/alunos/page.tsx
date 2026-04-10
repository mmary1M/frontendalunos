
export default function alunosPage(){
    return(
        <div className=" h-screen w-screen flex flex-col items-center">
            <h1 className="mt-30 mb-50 text-5xl font-bold ">lista de alunos</h1>

            <div className="w-50 h-70 bg-white rounded-md shadow-md shadow-white text-black p-2 overflow-auto">
                <ul className="flex flex-col intems-center gap-3 text-center">
                    <li className=" underline decoration-red-500">Aluno 1 </li>
                    <li className=" underline decoration-orange-500">Aluno 2</li>
                    <li className=" underline decoration-yellow-500">Aluno 3</li>
                     <li className=" underline decoration-green-500">Aluno 4</li>
                    <li className=" underline decoration-blue-500">Aluno 5</li>
                    <li className=" underline decoration-indigo-950">Aluno 6</li>
                    <li className=" underline decoration-violet-500">Aluno 7</li>
                    <li className=" underline decoration-red-500">Aluno 8</li>
                    <li className=" underline decoration-orange-500">Aluno 9</li>
                    <li className=" underline decoration-yellow-500">Aluno 10</li>
                 
                    
                </ul>
            </div>
        </div>
    )


} 